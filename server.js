const express = require('express'),
  path = require('path'),
  app = express(),
  bodyParser = require('body-parser'),
  http = require('http');

const port = process.env.PORT || 3004;

app.use(express.static('client/build'));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get('/jobs/:id', (req, resp) => {
  let query = req.params.id;
  console.log('query ', query);
  // let config = {
  //   path: `http://jobs.github.com/positions.json?description=${query}`
  //   // headers: {
  //   //   'Access-Control-Allow-Origin': '*',
  //   //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  //   // }
  // };
  // console.log('config ', config);
  http
    .get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`, res => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' + `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', chunk => {
        rawData += chunk;
      });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resp.send(parsedData);
        } catch (e) {
          console.error(e.message);
        }
      });
    })
    .on('error', e => {
      console.error(`Got error: ${e.message}`);
    });
});
app.get('/', (req, res) => {
  console.log('base url hit');
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, function() {
  console.log('up 3004');
});

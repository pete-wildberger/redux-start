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

app.get('/jobs/:id', (req, res) => {
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
  http.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`, (err, response) => {
    if (err) {
      console.log('err', err);
    } else {
      console.log('response ', typeof response);
      res.send(response);
    }
  });
});
app.get('/', (req, res) => {
  console.log('base url hit');
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, function() {
  console.log('up 3004');
});

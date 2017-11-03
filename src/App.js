import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Landing from './components/Landing.jsx';
import Results from './components/Results.jsx';
import './styles/main.min.css';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </Provider>
  </BrowserRouter>
);
export default App;

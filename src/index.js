import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import StartPage from './components/StartPage';
import SearchResults from './components/SearchResults';
import MoreInfo from './components/MoreInfo';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={StartPage} />
      <Route path="/results/:id" component={SearchResults} />
      <Route path="/:type/:id-:name" component={MoreInfo} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

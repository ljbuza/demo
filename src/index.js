import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);

// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


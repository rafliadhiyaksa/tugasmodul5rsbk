import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import kawalkorona from './kawalkorona';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';

import Tekkom from './tekkom';

ReactDOM.render(
  <React.StrictMode>
    <Tekkom />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
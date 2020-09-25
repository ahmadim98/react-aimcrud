import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <header style={{backgroundColor: "black", color:"grey", paddingBottom: "8px",textAlign: "center",}}>
      <h1 style={{transform: "translateY(15%)",display: "inline-block"}}>AIM-CRUD</h1>
      <p style={{display: "inline-block",transform: "translateY(15%)"}}>v0.1</p>
    </header>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

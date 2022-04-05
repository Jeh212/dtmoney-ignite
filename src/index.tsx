import React from 'react';
import ReactDOM from 'react-dom';
import './api/mirage';
import { App } from './App';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


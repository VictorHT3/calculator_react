import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculadora from './main/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Calculadora/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

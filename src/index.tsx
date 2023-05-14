import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Cabecalho from './componentes/cabecalho';

ReactDOM.render(
  <React.StrictMode>
    <Cabecalho />        
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
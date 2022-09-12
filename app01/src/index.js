import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Appp from './AppState'
import Evento from './eventos'
import Renderização from './renderizaçãoCondicional'
import Lista from './Lista'
import Formulario from './formulario'
import Objeto from './objetosState'
import Desafio from './Desafio02Unicap'
//function tick(){
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    
   <Desafio/>
  </React.StrictMode>
  
);
//}
//setInterval(tick,1000)
//tick()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

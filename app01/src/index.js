import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Appp from './AppState'
import Evento from './eventos'
import Renderização from './renderizaçãoCondicional'
//function tick(){
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    
   <Renderização/>
  </React.StrictMode>
  
);
//}
//setInterval(tick,1000)
//tick()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

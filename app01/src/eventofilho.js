import React from 'react'
import LedVerde from './componentes/imgs/img/sinal.verde.jfif'
import LedVermelho from './componentes/imgs/img/sinal.vermelho.jfif'

export default function Eventos(props){
return (

<>

<hr/>
<h1>Eventos em React</h1>
<img  style={{width:'90px'}}src={props.ligado?LedVerde:LedVermelho}/>
<button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?'Desligar':'Ligar'}</button>

</>
)
}
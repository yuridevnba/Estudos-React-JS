import React,{useState} from 'react'
import Numero from './componentes/imgs/Numero'
export default function App(){

    const[num,setNum]=useState(10) //nome do estado, e função que altera o estado.
   
    
    
    return(
          <>
         
          <hr></hr>
          <h1>STATE</h1>
          <p>Valor da state num em App:{num}</p>
          <Numero num={num} setNum={setNum}/>
         
          </>
         )
         }
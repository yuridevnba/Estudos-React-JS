import React,{useState} from 'react'
import Led from './eventofilho'

export default function Eventos(){
    const[ligado,setLigado]=useState(false)
return (
<>


<Led ligado={ligado} setLigado={setLigado}/>








</>
)
}

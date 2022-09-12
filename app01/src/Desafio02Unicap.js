import React,{useState} from "react"
import {ContadoRegex} from "./ContadoRegex"


export default function Desafio02Unicap(){
    const regexVogais=/[aáàãâeèêiìoòõôuù]/gi;
    const  regexConsoantes=/[bcçdfghjklmnopqrstvwxyz]/gi;
    const [texto,setTexto]=useState(" ")

return(
<div>
 <input 
value={texto}
type="text"
onChange={(e)=>setTexto(e.target.value)}
 />

<ContadoRegex titulo="Vogais" texto={texto} regex={regexVogais}/>

<ContadoRegex titulo=" Consoantes" texto={texto} regex={regexConsoantes}/>









</div>
);
}
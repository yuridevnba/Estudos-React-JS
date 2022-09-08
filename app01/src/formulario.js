import React,{useState}  from "react";

export default function Formulario(){

    const[nome,setNome]=useState('')

return(
<>



<label>Digite seu Nome</label>

<input type="text" name="fnome" value={nome} onChange={(e)=>setNome(e.target.value)}/>

<p>Nome Digitado: </p>


{nome}




</>
)
}
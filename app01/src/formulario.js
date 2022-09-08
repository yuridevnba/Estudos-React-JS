import React,{useState}  from "react";

export default function Formulario(){
    const [carro,setCarro]=useState('HRV')
    const[nome,setNome]=useState('')


    const handleChangeNome=(e)=>{
        setNome(e.target.value)
}
return(
<>



<label>Digite seu Nome</label>
<input type="text" name="fnome" value={nome} onChange={(e)=>handleChangeNome(e)}></input>
<p>Nome Digitado:{nome} </p>




<label>Selecione um Carro</label>
<select value={carro} onChange={(e)=>setCarro(e.target.value)}>
<option value="HRV">HRV</option>
<option value="GOLF">GOLF</option>
<option value="Cruze">Cruze</option>
<option value="Argo">Argo</option>
</select>

<p>Carro Selecionado: {carro}</p>













</>
)
}
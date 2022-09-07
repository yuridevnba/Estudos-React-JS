import React from 'react'

export default function Lista(){
    
    const carros=[
{categoria: "Esporte", preco:"110000.00",modelo:"Gof GTI"},
{categoria: "Esporte", preco:"120000.00",modelo:"Camaro"},
{categoria: "SUV", preco:"850000.00",modelo:"HRV"},
{categoria: "SUV", preco:"830000.00",modelo:"T-Cross"},
{categoria: "Utilitário", preco:"120000.00",modelo:"Hillux"},
{categoria: "Utilitário", preco:"90000.00",modelo:"Range"},
    ]
const listaCarros = carros .map(
(c,i)=>
<li key={i}>{i}- {c.categoria}-{c.modelo}- R${c.preco}</li>
)
    
return(
<>

<ul>{listaCarros}</ul>

</>
)
}
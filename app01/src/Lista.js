import React from 'react'

export default function Lista(){
    const carros=['HRV','GOLF','FOCUS','CRUZE','ARGO']
    const listadeCarros = carros.map(
        (c,i)=>
        <li key ={i}>{i}-{c}</li>


    )
return(
<>




<ul>{listadeCarros}</ul>











</>
)
}
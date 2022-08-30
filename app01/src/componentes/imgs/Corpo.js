import React from 'react'
import Dados from './Dados'



export default function Corpo(){

    const canal=()=>{
        return ' CFB Cursos'
        
        }
        
        const yt=' youtube.com/cfbcursos'  
        //const canal=' CFB Cursos'
        const crs=" React.js"
        
        const somar=(v1,v2)=>{
            return v1+v2
        }
    return (

        <section>
            <Dados 
            canal={canal} 
            youtube ={yt} 
            curso={crs} 
            somar={somar}/> 

            <h2> Curso de React</h2>
            <p>  Se inscreva em nosso canal</p>
            <p> Ative no sininho e clique na joinha </p>
            
            
            </section>
    )
}
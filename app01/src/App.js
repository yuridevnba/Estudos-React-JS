import React from 'react'
import Header from './componentes/imgs/Header'
import Corpo from './componentes/imgs/Corpo'
//import Logo from './componentes/imgs/facu.jpg'
//import react from './componentes/imgs/react.jpg'
import Dados from './componentes/imgs/Dados'

export default function App(){

const yt=' youtube.com/cfbcursos'  
const canal=' CFB Cursos'
const crs=" React.js"

return(
      <>
    
       <h1> Universidade Católica, abre curso de React. </h1>
       <Header/>
       <hr></hr>
       <p>
       <Dados canal={canal} youtube ={yt} curso={crs}/> 
       </p>
      <Corpo/>
      
      
     
    

      </>
)
}
//export default App()
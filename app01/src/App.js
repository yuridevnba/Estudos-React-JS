import React from 'react'
import Logo from './componentes/imgs/facu.jpg'
//import react from './componentes/imgs/react.jpg'
export default function App(){
const canal=()=>{
     return ('CBF Cursos')
}
const curso = 'Curso de React'
return(
      <section>
      <header>
      <p> {"CANAL:"+canal()}</p>
      <p>{curso}</p>
      </header>
      <section>
      <img src={Logo}/>
      <img src='/img/front.jpg'/>
      </section>
      </section>




)
}
//export default App()
import React from 'react'
import Header from './componentes/imgs/Header'
import Corpo from './componentes/imgs/Corpo'
import './Appp.css'
import Relogio from './componentes/imgs/relogio'
export default function App(){


const testeDestaque={

      color:'#00f',
      fontSize:'3em'
}

return(
      <>
      
      <section className='caixa'>
            <Relogio />
      <h1  style={{color:'#f00', fontSize:'3em'}}>CFB Cursos</h1>
       <h1 style={testeDestaque}> Universidade Católica, abre curso de React. </h1>
       <Header/>
       <hr></hr>
       <Corpo/>
       <p className='texto'>
      Vamos Aprender Muito, Vem com a gt.
      <a href='https://www.youtube.com/cfbcursos' target='blanck'> clique aqui</a>
      </p>
      </section>
      </>
)
}
//export default App()
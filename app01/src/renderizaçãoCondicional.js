import React,{useState} from 'react'


export default function RenderizaçãoCondicional(){
// Log //
  const [log,setLog]=useState(false)
  const msglogin =()=>{
    return 'Usuário Logado'
}
const msglogoff =()=>{
    return 'Favor Logar'
}

// cumrpimento
    const cumprimento=()=>{
    const hora = new Date().getHours()
    if(hora>=0 && hora<13){
        return<p>Bom dia</p>
    }
     else if(hora>=13 && hora<18){
        return <p>Boa Tarde</p>
    
}else{
return <p> Boa Noite</p>
}


    }
// Cor 

const [cor,setCor]=useState(1)
   const vermelho ={color:'#f00'}
   const verde ={color:'#0f0'}
   const azul ={color:'#00f'}


   const retCor=(c)=>{
  if(c==1){
    return vermelho
  }
   else if(c==2){
    return verde
   }
   else{
    return azul
   }
   }
   const mudaCor=()=>{
      setCor(cor+1)
      //setInterval(mudaCor,1000)
      if(cor>2){

      setCor(1)
      }
     
   }
return (
<>



<p>{cumprimento}</p>



<p>{log?msglogin():msglogoff()}</p>
<button  onClick={()=> setLog(!log)}>{log?'Logoff':'Login'}</button>

<h1 style={retCor(cor)}> AMOR: ANINHA DA SILVA </h1>
<button onClick={()=> mudaCor()}>Muda Cor</button>

</>
)
}

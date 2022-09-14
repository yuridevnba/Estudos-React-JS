import React, { useState } from "react";
import "./App.css";

//UseState

export default function App() {
  const [textvetor2, setTextvetor2] = useState([]);
    const [textvetor, setTextvetor] = useState([]);


    const [suposicao, setSuposicao] = useState(" ");
    const [segredo,setSegredo]=useState(" ");

    const [mostrardiv, setMostrarDiv] = useState(false);
    const [esconderdiv, setEsconderDiv] = useState(true);

    const handleSegredo = (evt) => {
        if(evt.target.value.length<=3){
        setSegredo(evt.target.value);
      }
    }

  const handleSuposicao = (evt) => {
    if(evt.target.value.length<=3){
    setSuposicao(evt.target.value);
  }
}
  const handleClickBtInserir = () => {
    setEsconderDiv(false)
    let textoTrim = suposicao.trim();
    if (textoTrim) {
      setTextvetor2([...textvetor2, textoTrim]);
    }
}

    const handleClickBtInserirsecreto = () => {
      setMostrarDiv(true)
        let secreTrim = segredo.trim();
        if (secreTrim) {
          setTextvetor([...textvetor, secreTrim]);
          
          
        }
  };
    
     
  
  
  

  let cott=0;
 let cont=0;
  function comparação(comp1,comp2,comp3){

    comp1= segredo[0].indexOf(suposicao[0])
    if(comp1!=-1){
      cont++
    }
    
    comp2= segredo[1].indexOf(suposicao[1])
    if(comp2!=-1){
      cont++
    }
    comp3= segredo[2].indexOf(suposicao[2])
    if(comp3!=-1){
      cont++
    }
   return "Touro ("+cont+")"
  }







 
    function comparação2(co1,co2,co3){
  
  co1=suposicao.match(segredo[0])
    if(co1!=null){
      cott++
    }
    co2=suposicao.match(segredo[1])
    
    if(co2!=null){
      cott++
    }
    co3=suposicao.match(segredo[2])
    
    if(co3!=null){
      cott++
    }
    return "Vaca ("+cott+")"
  }



  return (
    <>
     
    <h1>Jogo das Senhas</h1>
    <hr></hr>
    <p style={{color:'#f00'}}> REGRAS DO JOGO</p>
    <label>Digite uma palavra da lingua portuguesa que tenha até 3 letras, </label>
       <p> e seja um isograma, ou seja, nenhuma letra pode ser repetida.</p>
       <img  src= "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4b5e1c15227903.5628e65346842.png"  width="300px"  margin-left></img>
    
       <hr></hr>
      <p>
      
      <input
      placeholder="TEXTO SECRETO"
          id="secreto"
          type="text"
          value={segredo}
         onChange={handleSegredo} 
        />
        
        <button onClick={handleClickBtInserirsecreto} > Inserir</button ><br></br>
      <p id="demo"></p>
        <input
         placeholder="TEXTO SUPOSIÇÃO"
          id="suposicao"
          type="text"
          value={suposicao}
          onChange={handleSuposicao}
          
        />{" "}
        <button  onClick={handleClickBtInserir}>Inserir</button>
       
      </p>
     
      {textvetor.length > 0 && (
        <table>
          <tr>
            
            <th>VACA</th>
            <th>TOURO</th>
          </tr>
          {textvetor.map((umTexto, index) => (
            <tr key={index}>
              
              <td>{/*Buscador(umTexto)*/}</td>

              <td>{comparação(umTexto)}</td>
              <td>{comparação2(umTexto)}</td>
           {/*"teste"+textvetor[0]*/}
          {/*suposicao[0]*/}
          
            </tr>
          ))}
        </table>
    
      )}
    </>
  );

}

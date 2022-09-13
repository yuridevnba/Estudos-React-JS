import React, { useState } from "react";
import "./App.css";

//UseState

export default function App() {
  const [textvetor2, setTextvetor2] = useState([]);
    const [textvetor, setTextvetor] = useState([]);


    const [suposicao, setSuposicao] = useState("");
    const [segredo,setSegredo]=useState(" ");



    const handleSegredo = (e) => {
        if(e.target.value.length<=3){
        setSegredo(e.target.value);
      }
    }
// manipulador do useState
  const handleChangeTexto = (evt) => {
    if(evt.target.value.length<=3){
    setSuposicao(evt.target.value);
  }
}
  const handleClickBtInserir = () => {
    let textoTrim = suposicao.trim();
    if (textoTrim) {
      setTextvetor2([...textvetor2, textoTrim]);
    }
}
    const handleClickBtInserirsecreto = () => {
        let secretSemEspaço = segredo.trim();
        if (secretSemEspaço) {
          setTextvetor([...textvetor, secretSemEspaço]);
        }
  };
  

 
    
  
  //let Advinho=textvetor2[0]  
  //let SECRETO = textvetor[0]  // igual a primeira palavara secreta digitada.
  
 // function Buscador(str) {

   // if(textvetor2[0]=!null){
 // str= SECRETO.match(Advinho);
//}
  
  
   // return str=== null ? " 0   0": "   ";
  
 // }
  
  
  

  
 
  function comparação(comp1,comp2,comp3){
    //let palavra=" yuri";
    //do {
    comp1= segredo[0].indexOf(suposicao[0])
    comp2= segredo[1].indexOf(suposicao[1])
    comp3= segredo[2].indexOf(suposicao[2])
    //if(segredo[0]!=" "){
    //return comp === -1? " 0  0": " vaca";
    //}
  if(comp1===-1){
   return <p name="t"> 0  </p>
  }
  //} while (textvetor.length);
  
  }
  
  return (
    <>
 
    <h1>Jogo das Senhas</h1>
    <hr></hr>
    <p style={{color:'#f00'}}> REGRAS DO JOGO</p>
    <label>Digite uma palavra da lingua portuguesa que tenha até 3 letras, </label>
       <p> e seja um isograma, ou seja, nenhum letra pode ser repetida.</p>
       <img  src= "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4b5e1c15227903.5628e65346842.png"  width="300px"  margin-left></img>
    
       <hr></hr>
      <p>
      <input
      placeholder="TEXTO SECRETO"
          id="suposicao"
          type="text"
          value={segredo}
          onChange={handleSegredo}
        />
        <button onClick={handleClickBtInserirsecreto}>Inserir</button ><br></br>
   
        <input
         placeholder="TEXTO SUPOSIÇÃO"
          id="suposicao"
          type="text"
          value={suposicao}
          onChange={handleChangeTexto}
        />{" "}
        <button  onClick={handleClickBtInserir}>Inserir</button>
      </p>
      
      {textvetor.length > 0 && (
        <table>
          <tr>
            
            <th>Touro{t} </th>
            <th>Vaca</th>
          </tr>
          {textvetor.map((umTexto, index) => (
            <tr key={index}>
              
              <td>{/*Buscador(umTexto)*/}</td>

              <td>{comparação(umTexto)}</td>
              
           {/*"teste"+textvetor[0]*/}
          {/*suposicao[0]*/}
            </tr>
          ))}
        </table>
    
      )}
    </>
  );

}

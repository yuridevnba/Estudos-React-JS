import React, { useState } from "react";
import "./App.css";


function getVowels(str) {
  var m = str.match(/[aáàãâeéêiíoóõôuú]/gi);
  return m === null ? 0 : m.length;
}
function getConsonants(str) {
  var m = str.match(/[bcçdfghjklmnpqrstvwxyz]/gi);
  return m === null ? 0 : m.length;
}

//Usestate
export default function App() {
  
  const [textvetor, setTextvetor] = useState([]);
  const [texto, setTexto] = useState("");

// manipulador do useState
  const handleChangeTexto = (evt) => {
    setTexto(evt.target.value);
  };
  const handleClickBtInserir = () => {
    let textoTrim = texto.trim();
    if (textoTrim) {
      
      setTextvetor([...textvetor, textoTrim]);
    }
  };

  return (
    <>
      <p>
        <label htmlFor="texto">Digite um texto: </label>
        <input
          id="texto"
          type="text"
          value={texto}
          onChange={handleChangeTexto}
        />{" "}
        <button onClick={handleClickBtInserir}>Inserir</button>
      </p> 
      {textvetor.length > 0 && (
        <table>
          <tr>
            <th>Texto</th>
            <th>Vogais</th>
            <th>Consoantes</th>
          </tr>
          {textvetor.map((umTexto, index) => (
            <tr key={index}>
              <td>{umTexto}</td>
              <td>{getVowels(umTexto)}</td>
              <td>{getConsonants(umTexto)}</td>
            </tr>
          ))}
        </table>
      )}
    </>
  );
}

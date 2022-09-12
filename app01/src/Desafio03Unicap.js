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

export default function App() {
  const [textos, setTextos] = useState([]);
  const [texto, setTexto] = useState("");
  const handleChangeTexto = (evt) => {
    setTexto(evt.target.value);
  };
  const handleClickBtInserir = () => {
    let textoTrim = texto.trim();
    if (textoTrim) {
      setTextos([...textos, textoTrim]);
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
      <ol>
        {textos.length > 0 &&
          textos.map((umTexto, index) => <li key={index}>{umTexto}</li>)}
      </ol>
      </>
  )
        }
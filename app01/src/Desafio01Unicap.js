import { useState } from "react";
import "./App.css";
import { Contador } from "./Contador";


export default function App() {



  const [item, setItem] = useState("");
  const [contadores, setContadores] = useState([]);





  const handleClickBtInserir = () => {
    const contadoresFiltrados = contadores.filter( // filter, para filtrar elementos no array que atendem a um certo critério.
      (contador) => contador.props.txt === item
    );
    if (contadoresFiltrados.length === 0) {
      setContadores([...contadores, <Contador key={item} txt={item} />]);
    }
  };
  return (
    <div>
      
      <input
        placeholder="Item da lista de compras"
        value={item}
        onChange={(evt) => setItem(evt.target.value)}
      />
      <button onClick={handleClickBtInserir}>Inserir</button>
      <hr />
     
      <div>{contadores}</div>
      <hr />
    </div>
  )
}
import React from "react";

export const Contador = ({ txt }) => {
  let [contador, setContador] = React.useState(0);



  const handleClickMais = () => {
    setContador((contador) => contador + 1);
  };
  const handleClickMenos = () => {
   if(contador>0){
    setContador(contador-1)

   }
  }
  return (
    <div>
      <h3>
   
        {txt} - {contador}
      </h3>
      
      <button onClick={handleClickMais}>+</button>
      <button onClick={handleClickMenos}>-</button>
    </div>
  )
};

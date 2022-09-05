import React  from 'react'

export default function Numero(props){

    return(
<p>

<p>Valor da state num em Numero:{props.num}</p>
          <button onClick={()=>props.setNum(props.num+10)}>Soma 10</button>





</p>
    )
}
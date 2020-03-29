import React from "react";

export default function Experience(props){
const {cargo, periodo, empresa, local, conteudo, atual} = props.conteudo
console.log(props)
// {atual == true && ( <button onClick = {showOnlyTrue}></button>)}
return (
      <>
      <div>
        <h4>{cargo}</h4>
        <date>{periodo}</date>
        <strong>{empresa}</strong>
        <span>{local}</span>
      </div>
      <p>
        {conteudo}
    </p>
    </>
)
// // showOnlyTrue = () => {
// REMOVER A PROPS INTEIRA QUE TEM ATUAL == false
// // }
// }
}
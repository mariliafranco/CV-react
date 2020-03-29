import React from "react";

function Education(props){
    const { instituicao, curso } = props.conteudo
    return (
            <li>
              <h4>{instituicao} </h4>
              <p>{curso}</p>
            </li>
    )
}

export default Education;
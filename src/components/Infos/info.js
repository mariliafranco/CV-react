import React from "react";
import Contacts from "../Contacts/contacts";
import Education from "../Education/education";
import Experience from "../Experience/experience";

function Info(props) {
  const { nome, ocupacao, resumo, perfilProfissional } = props.conteudo;
  const { contatos } = props.conteudo;
  const { educacao } = props.conteudo;
  const { experiencia } = props.conteudo;
  return (
   <>
      <div className="biografia">
        <h1>
          {nome} <br />
        </h1>
        <div className="ocupacao">{ocupacao}</div>
      <p>{resumo}</p>
      </div>
      <div className="titulo">
      Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>
          {perfilProfissional}
          </p>
      </div>
      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>
          <div className="lista-de-contatos"></div>
        {contatos.map(contact => (
          <Contacts conteudo={contact} key={contact.id} />
        ))}
        </div>
        <div className="sidebar">
          <h3>Educação</h3>
          <div className="education"></div>
        {educacao.map(school => (
          <Education conteudo={school} key={school.id} />
        ))}
        </div>
      </aside>
      <div className="experience">
        <h2>Experiência Profissional</h2>
        <div className="experience-item">
      {experiencia.map(job => (
        <Experience conteudo={job} key={job.id} />
      ))}
      </div>
      <button>Mostrar atual</button>
      </div>
    </>
  );
}

export default Info;

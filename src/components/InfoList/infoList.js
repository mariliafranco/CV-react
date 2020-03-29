import React, { Component } from "react";
import Info from "../../components/Infos/info";

class InfoList extends Component {
  state = {
    informacoes: [
      {
        nome: "Marília Franco de Andrade",
        ocupacao: "Developer JavaScript/React Júnior",
        resumo: "24 anos, solteira",
        perfilProfissional:
          "Participante do Women Can Code 2020, na trilha de formação JavaScript/React.",
        contatos: [
          {
            id: 1,
            tipo: "telefone",
            contato: "19 996527795"
          },
          {
            id: 2,
            tipo: "email",
            contato: "marilia.andrad@gmail.com"
          }
        ],
        educacao: [
          {
            id: 1,
            instituicao: "USP",
            curso: "Engenharia de Biossistemas"
          },
          {
            id: 2,
            instituicao: "ETEC",
            curso: "Ensino médio e técnico"
          }
        ],
        experiencia: [
          {
            id: 1,
            cargo: "Aluna (Front-End)",
            periodo: "Março de 2020",
            empresa: "Venturus e Share RH",
            local: "Campinas",
            conteudo: "Capacitação em JavaScript/React (84h)",
            atual: true
          },
          {
            id: 2,
            cargo: "Aluna",
            periodo: "Agosto 2017 - Dezembro 2017",
            empresa: "USP",
            local: "Pirassununga/SP",
            conteudo:
              "Aproveitamento máximo na disciplina optativa de Métodos Computacionais Aplicados.",
            atual: false
          }
        ]
      }
    ]
  };

  render() {
    const { informacoes } = this.state;
    return (
      <>    
      {
         informacoes.map(info => (
          <Info key={info.nome} conteudo={info} />
        ))}
        );
        </>
    )
  };
};

export default InfoList;
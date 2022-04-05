import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className="main-content">
        {conteudos.map((item) => (
          <div className="card" key={item.conteudo}>
            <h3>{`O conteúdo é ${item.conteudo}`}</h3>
            <p>{`status : ${item.status}`}</p>
            <p>{`bloco ${item.bloco}`}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Content;
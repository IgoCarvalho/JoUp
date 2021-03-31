import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsCheckBox } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import Moment from 'react-moment';
import { useHistory } from 'react-router';

function ProjetoCard({ projeto }) {
  const history = useHistory();

  function navigateToDetalhes(id) {
    return () => {
      history.push(`/detalheprojeto/${id}`);
    };
  }

  function getFaseAtual() {
    const fases = projeto.fases_projeto;

    const totalFases = fases.length;
    const faseAtualNum = fases.filter((f) => f.completo).length;

    let faseAtual = [];
    if (faseAtualNum >= totalFases) {
      faseAtual = fases[totalFases - 1];
    } else {
      faseAtual = fases[faseAtualNum];
    }

    console.log({
      faseAtualNum,
      totalFases,
      fases,
      faseAtual
    });

    const porcentagem = Math.round((fases.filter((f) => f.completo).length * 100) / totalFases);

    return {
      atual: faseAtualNum >= totalFases? totalFases : faseAtualNum + 1,
      total: totalFases,
      conteudo: faseAtual,
      porcentagem
    };
  }

  const faseAtual = getFaseAtual();
  console.log(faseAtual);

  return (
    <li onClick={navigateToDetalhes(projeto._id)}>
      <span className="tres-pontos"><FiMoreHorizontal/></span>
      <h3 className="tituloProjeto">{projeto.titulo}</h3>
      <span>
        <i>
          <BsCheckBox />
        </i>
        {`${faseAtual.atual}/${faseAtual.total}  ${faseAtual.conteudo.nome}`}
      </span>
      <span>
        <i>
          <AiOutlineCalendar />
        </i>
        <Moment format="D" locale="pt-br">
          {faseAtual.conteudo.data.start}
        </Moment>{' '}
        de{' '}
        <Moment format="MMMM" locale="pt-br">
          {faseAtual.conteudo.data.start}
        </Moment>
        {' - '}
        <Moment format="D" locale="pt-br">
          {faseAtual.conteudo.data.end}
        </Moment>{' '}
        de{' '}
        <Moment format="MMMM" locale="pt-br">
          {faseAtual.conteudo.data.end}
        </Moment>
      </span>
      <div className="tagsProjetos">
        {projeto.filtros.map((f) => (
          <label>{f}</label>
        ))}
      </div>
      <div className="progresProj">
        <div className="cinza">
          <div style={{ width: `${faseAtual.porcentagem}%` }} className="roxo"></div>
        </div>
      </div>
    </li>
  );
}

export default ProjetoCard;

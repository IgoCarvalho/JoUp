import React from 'react';
import { MdDone } from 'react-icons/md';

// import { Container } from './styles';

export function PlanoBasico() {
  return (
    <>
      <div className="preco">
      <label>Plano Básico</label>
      <h2>R$ 19,99</h2>
      <p><strong>Oferte até 5 serviços e acompanhe até 3 projetos por mês.</strong></p>
      </div>
      <div className="beneficios">
          <tr>
              <td><i><MdDone/></i></td><td className="descricao">Sessões ilimitadas de detalhamento do projeto.</td>
          </tr>
              <td><i><MdDone/></i></td><td className="descricao">Checklist de fases de desenvolvimento.</td>
          <tr>
              <td><i><MdDone/></i></td><td className="descricao">Link compartilhável de cada projeto.</td>
          </tr>
          <tr>
              <td></td><td className="descricao">Agenda integrada com o Google.</td>
          </tr>
          <tr>
              <td></td><td className="descricao">Vinculação de portfólio do Behance e currículo do LinkedIn no seu perfil profissional.</td>
          </tr>
          <tr>
              <td></td><td className="descricao">Avaliação dos clientes</td>
          </tr>
      </div>
    </>
  );
}

export function PlanoCompleto() {
  return (
    <>
      <div className="preco">
      <label>Plano Completo</label>
      <h2>R$ 49,99</h2>
      <p><strong>Oferte até  10 serviços e acompanhe até 10 projetos por mês.</strong></p>
      </div>
      <div className="beneficios">
          <tr>
              <td><i><MdDone/></i></td><td className="descricao">Sessões ilimitadas de detalhamento do projeto.</td>
          </tr>
              <td><i><MdDone/></i></td><td className="descricao">Checklist de fases de desenvolvimento.</td>
          <tr>
              <td><i><MdDone/></i></td><td className="descricao">Link compartilhável de cada projeto.</td>
          </tr>
          <tr>
              <td><i><MdDone/></i></td><td className="descricao">Agenda integrada com o Google.</td>
          </tr>
          <tr>
              <td></td><td className="descricao">Vinculação de portfólio do Behance e currículo do LinkedIn no seu perfil profissional.</td>
          </tr>
          <tr>
              <td></td><td className="descricao">Avaliação dos clientes</td>
          </tr>
      </div>
    </>
  );
}

export function PlanoPremium() {
  return (
    <>
      <div className="preco">
      <label>Plano Premium</label>
      <h2>R$ 69,99</h2>
      <p><strong>Ofertas de serviços e companhamento ilimitado de projetos por mês.</strong></p>
      </div>
      <div className="beneficios">
          <tr>
              <td><i><MdDone/></i></td><td className="descricao">Sessões ilimitadas de detalhamento do projeto.</td>
          </tr>
              <td><i><MdDone/></i></td><td className="descricao">Checklist de fases de desenvolvimento.</td>
          <tr>
              <td><i><MdDone/></i></td><td className="descricao">Link compartilhável de cada projeto.</td>
          </tr>
          <tr>
              <td><i><MdDone/></i></td><td className="descricao">Agenda integrada com o Google.</td>
          </tr>
          <tr>
              <td><i><MdDone/></i></td><td className="descricao">Vinculação de portfólio do Behance e currículo do LinkedIn no seu perfil profissional.</td>
          </tr>
          <tr>
              <td><i><MdDone/></i></td><td className="descricao">Avaliação dos clientes</td>
          </tr>
      </div>
    </>
  );
}

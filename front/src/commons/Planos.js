import React, { Component } from 'react';
import '../commons/Planos.css';
import '../commons/BotaoAmarelo.css';
import { Link } from 'react-router-dom';
import { MdDone} from "react-icons/md";

export class Planos extends Component {
    render() {
        return (
            <section className="planos" id="planos">
                <div className="basico">
                    <h3>Plano Básico</h3>
                    <h1>R$ 19,99</h1>
                    <p>Oferte até  5 serviços e acompanhe até 3 projetos por mês.</p>
                    <table>
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
                    </table>
                    <button className="botaoAmarelo">ADQUIRIR ESTE PLANO</button><br/>
                    <Link to="/">Fazer um teste grátis</Link>
                </div>
                <div className="completo">
                <h3>Plano Completo</h3>
                    <h1>R$ 49,99</h1>
                    <p>Oferte até  10 serviços e acompanhe até 10 projetos por mês.</p>
                    <table>
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
                    </table>
                    <button className="botaoAmarelo">ADQUIRIR ESTE PLANO</button><br/>
                    <Link to="/">Fazer um teste grátis</Link>
                </div>
                <div className="premium">
                <h3>Plano Premium</h3>
                    <h1>R$ 69,99</h1>
                    <p>Ofertas de serviços e companhamento ilimitado de projetos por mês</p>
                    <table>
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
                    </table>
                    <button className="botaoAmarelo">ADQUIRIR ESTE PLANO</button><br/>
                    <Link to="/">Fazer um teste grátis</Link>
                </div>
            </section>
        )
    }
}

export default Planos

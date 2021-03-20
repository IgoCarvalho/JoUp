import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../commons/ContainerConta.css';
import { FiEdit } from "react-icons/fi";
import { MdDone} from "react-icons/md";
import cardicon from '../images/mastercard.svg';

class ContainerConta extends Component {
    render() {
        return (
            <section className="ContainerConta">
             <div className="topSessao">
                <h2>Minha conta</h2>
                    <button className="bRoxoRedondo"><Link to=""><i><FiEdit/></i>Editar conta</Link></button> 
                </div>
                <div className="MainSectionConta">
                    <div className="dadosBasicos">
                        <div className="primary">
                            <h3>Acesso e segurança</h3>
                            <p><strong>Email</strong></p>
                            <p>joanadesigns@gmail.com</p>
                            <p><strong>Nome de usuário</strong></p>
                            <p>JoanaDesigner</p>
                            <p><strong>Senha</strong></p>
                            <p>**************</p>
                            <p><strong>Validação de identidade</strong></p>
                            <p>Não validado</p>
                        </div>
                        <div className="secundary">
                        <h3>Dados pessoais</h3>
                            <p><strong>Nome completo</strong></p>
                            <p>Maria Joana da Silva Costa</p>
                            <p><strong>Data de Nascimento</strong></p>
                            <p>28/09/1998</p>
                            <p><strong>Telefone</strong></p>
                            <p>(88) 9 9782 1078</p>
                        </div>
                    </div>
                    <div className="dadosPlano">
                    <h3>Plano atual</h3>
                    <table className="planoAtual">
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
                    </table>
                    <br/>
                    <div className="primary">
                            <h3>Dados de Pagamento</h3>
                            <p><strong>Nome do titular</strong></p>
                            <p>Maria Joana da Silva Costa</p>
                            <p><strong>CPF</strong></p>
                            <p>067.987-876-76</p>
                            <p><strong>Número do cartão</strong></p>
                            <div className="card">
                            <img src={cardicon}/><p>**** **** **** 8837</p>
                            </div>
                            <p><strong>Data de validade</strong></p>
                            <p>05/21</p>
                            <p><strong>Código de segurança (CVV)</strong></p>
                            <p>****</p>
                            <p><strong>Forma de pagamento</strong></p>
                            <ul className="pagamentos">
                            <li><input type="radio" id="credito" name="pag" value="credito"/>
                            <label for="male">Crédito</label></li>
                            <li><input type="radio" id="debito" name="pag" value="debito"/>
                            <label for="female">Débito</label></li>
                            </ul>
                    </div>
                    </div>
                </div> 
            </section>
        )
    }
}

export default ContainerConta

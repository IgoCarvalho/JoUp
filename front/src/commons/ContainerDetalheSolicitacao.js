import React, { Component } from 'react';
import '../commons/ContainerDetalheSolicitacao.css';
import '../commons/BotaoRoxo.css';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";

export class DetalhesServico extends Component {
    render() {
        return (
            <div className={`ContainerSolicitacao ${this.props.menu && 'open'}`}>
                <div className="topSessao">
                    <h2>Solicitações /<strong>Título do novo serviço solicitado</strong></h2>
                    <button className="bRoxoRedondo"><Link to={''}><i><FiEdit /></i>Editar serviço</Link></button>
                </div>
                <section className="SessoesSolicitacao">
                    <div className="conteudoSolicitacao">
                        <div className="infoSolicitacao">
                            <h2>Respostas dos Requisitos</h2>
                            <div>
                                <p>Objetivos e benefícios do serviço:

                                Este serviço tem como objetivo contribuir para ...  gerando os benefícios tais em relação ao problema
                                a ser solucionado. Este serviço tem como objetivo contribuir para ...  gerando os benefícios tais em relação ao problema a ser solucionado.

                                Este serviço tem como objetivo contribuir para ...  gerando os benefícios tais em relação ao problema
                                a ser solucionado. Este serviço tem como objetivo contribuir para ...  gerando os benefícios tais em relação ao problema a ser solucionado.
                                    <br></br>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr
                                </p>
                            </div>
                        </div>
                        <div className="precosPrazos">
                            <h2>Faixa de preço do cliente</h2>
                            <table className="NunericOptions">
                                <tr className="preco">
                                    <td>
                                        <legend>No mínimo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>R$</label></td><td><input type="numeric" /></td>
                                        </div>
                                    </td>
                                    <td>
                                        <legend>No máximo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>R$</label></td><td><input type="numeric" /></td>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <h2>Faixa de tempo do cliente</h2>
                            <table className="NunericOptions">
                                <tr className="tempo">
                                    <td>
                                        <legend>No mínimo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>Semanas</label></td><td><input type="numeric" /></td>
                                        </div>
                                    </td>
                                    <td>
                                        <legend>No máximo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>Semanas</label></td><td><input type="numeric" /></td>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <div className="referencias">
                                <h2>Referências do cliente</h2>
                                <ul>

                                    <li><label><i><AiOutlineLink /></i>Google Drive</label></li>
                                    <li><label><i><AiOutlineLink /></i>Vídeo do Youtube</label></li><br />
                                </ul>
                                <ul>
                                    <li><label><i><AiOutlineLink /></i>https://determined-no...</label></li>
                                </ul>
                            </div>

                        </div>
                        <div className="perguntasSolicitacao">
                            <div className="dadosCliente">
                                <h2>Dados do cliente</h2>
                                <div className="dados">
                                    <p><strong>Nome completo</strong></p>
                                    <p>Luana Moreira Brumado</p>
                                </div>
                                <div className="dados">
                                    <p><strong>Email</strong></p>
                                    <p>luana.moreira@gmail.com</p>
                                </div>
                                <div className="dados">
                                    <p><strong>Telefone</strong></p>
                                    <p>(88) 9 9639 8134</p>
                                </div>
                            </div>
                            <div className="cronograma">
                                <h2>Cronograma de solicitação</h2>
                                <table className="dataSolicitacao">
                                    <tr className="datas">
                                        <td>
                                            <legend>Data de solicitação</legend>
                                            <div className="dataReposta">
                                                <td><label>13 janeiro</label></td>
                                            </div>
                                        </td>
                                        <td>
                                            <legend>Prazo para resposta</legend>
                                            <div className="dataReposta">
                                                <td><label>19 janeiro</label></td>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className="botoes">
                                <button className="botaoVerde">Aceitar</button>
                                <button className="botaoVermelho">Recusar</button>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default DetalhesServico

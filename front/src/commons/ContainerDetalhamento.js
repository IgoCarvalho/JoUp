import React, { Component } from 'react';
import '../commons/ContainerDetalhamento.css';
import '../commons/ContainerProjeto.css';
import '../commons/BotaoRoxo.css';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { AiOutlineLink} from "react-icons/ai";

class DetalhesProjeto extends Component {
    render() {
        return (
            <div className="ContainerProjeto">
                <div className="topSessao">
                    <h2>Detalhamento do projeto / <strong>Título do projeto</strong></h2>
                    <button className="bRoxoRedondo"><Link to="adicionarservico"><i><FiEdit/></i>Editar projeto</Link></button>
                </div>
                <section className="SessoesProjeto">
                    <div className="conteudoProjeto">
                        <div className="infoProjeto">
                            <h2>Dados do cliente</h2>
                            <strong><p>Nome completo:</p></strong>
                            <p>Luana Moreira Brumado</p>
                            <strong><p>Email:</p></strong>
                            <p>luana.moreira@gmail.com</p>   
                            <strong><p>Telefone:</p></strong>
                            <p>(88)99999-9999</p>
                            
                            <div className="precosPrazos">
                            <h2 className="sessionPreco">Preço pelo serviço</h2>
                            <table className="NunericOptions">
                                <tr className="preco">
                                    <td>
                                        <legend>No mínimo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>R$</label></td><td><input type="numeric" value="3" disabled/></td>
                                        </div>
                                    </td>
                                    <td>
                                        <legend>No mínimo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>R$</label></td><td><input type="numeric" value="3" disabled/></td>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <h2 className="sessionPreco">Faixa de tempo do serviço</h2>
                            <table className="NunericOptions">
                                <tr className="tempo">
                                    <td>
                                        <legend>No mínimo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>Semanas</label></td><td><input type="numeric" disabled/></td>
                                        </div>
                                    </td>
                                    <td>
                                        <legend>No mínimo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>Semanas</label></td><td><input type="numeric" disabled/></td>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                                <div className="referencias">
                                    <h2>Referencias do cliente</h2>
                                    <ul>
                                        <li><label><a href="" target="_blank"><i><AiOutlineLink/></i>Google Drive</a></label></li>
                                        <li><label><a href="" target="_blank"><i><AiOutlineLink/></i>Vídeo do Youtube</a></label></li><br/>
                                    </ul>
                                    <ul>
                                        <li><label><a href="" target="_blank"><i><AiOutlineLink/></i>https://determined-no...</a></label></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        <div className="perguntasProjeto">
                        <h2>Respostas dos requisitos</h2>
                                <p>As respostas para as requisicoes do servico irao aqui, é uma caida de texto 
                                corrido apenas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                 ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                   velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                   cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                                   est laborum.<br></br>
                                   
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                 nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                   eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div className="filtros">
                                    <h2>Filtros</h2>
                                    <ul>
                                        <li><label>Design</label></li>
                                        <li><label>IHC</label></li>
                                        <li><label>UX</label></li>
                                    </ul>
                                </div>
                        </div>

                    </div>
                    <div className="fasesDesenvolvimento">     
                        <h2>Fases de desenvolvimento</h2>
                        <div className="progresProj">
                            <label>69%</label>
                            <div className="cinza">
                                <div className="roxo"></div>
                            </div>
                        </div>
                        <table className="fasesProjeto"> 
                                <tr>
                                    <td>
                                    <input type="checkbox"/>
                                    </td>
                                    <td>
                                        <h3>Fase 1</h3>
                                        <p>Montagem do briefing</p>
                                    </td>
                                    <td>
                                        <label className="prazoFases">13 jan - 19 jan</label>
                                    </td>
                                </tr>
                                <br/>
                                <tr>
                                    <td>
                                    <input type="checkbox"/>
                                    </td>
                                    <td>
                                        <h3>Fase 2</h3>
                                        <p>Pesquisa de similares</p>
                                    </td>
                                    <td>
                                        <label className="prazoFases">13 jan - 19 jan</label>
                                    </td>
                                </tr>
                                <br/>
                                <tr>
                                    <td>
                                    <input type="checkbox"/>
                                    </td>
                                    <td>
                                        <h3>Fase 3</h3>
                                        <p>Pesquisa de concorrencia</p>
                                    </td>
                                    <td>
                                        <label className="prazoFases">13 jan - 19 jan</label>
                                    </td>
                                </tr>
                                <br/>
                                <tr>
                                    <td>
                                    <input type="checkbox"/>
                                    </td>
                                    <td>
                                        <h3>Fase 4</h3>
                                        <p>Mapa de empatia</p>
                                    </td>
                                    <td>
                                        <label className="prazoFases">13 jan - 19 jan</label>
                                    </td>
                                </tr>
                                <br/>
                                <tr>
                                    <td>
                                    <input type="checkbox"/>
                                    </td>
                                    <td>
                                        <h3>Fase 5</h3>
                                        <p>UX Canvas</p>
                                    </td>
                                    <td>
                                        <label className="prazoFases">13 jan - 19 jan</label>
                                    </td>
                                </tr>
                                <br/>
                                <tr>
                                    <td>
                                    <input type="checkbox"/>
                                    </td>
                                    <td>
                                        <h3>Fase 6</h3>
                                        <p>Apresentação</p>
                                    </td>
                                    <td>
                                        <label className="prazoFases">13 jan - 19 jan</label>
                                    </td>
                                </tr>

                            
                        </table>
                    </div>
                    
                </section>  
            </div> 
        ) 
    }
}

export default DetalhesProjeto



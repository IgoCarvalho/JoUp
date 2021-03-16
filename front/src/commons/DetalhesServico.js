import React, { Component } from 'react';
import '../commons/DetalhesServico.css';
import '../commons/ContainerServico.css';
import { FaPlus } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import '../commons/BotaoRoxo.css';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { AiOutlineBold,AiOutlineOrderedList, AiOutlineUnorderedList,AiOutlineItalic,AiOutlineLink} from "react-icons/ai";

export class DetalhesServico extends Component {
    render() {
        return (
            <div className="ContainerServico">
                <div className="topSessao">
                    <h2>Serviços ofertados / <strong>Título do serviço</strong></h2>
                    <button className="bRoxoRedondo"><Link to="adicionarservico"><i><FiEdit/></i>Editar serviço</Link></button>
                </div>
                <section className="SessoesServico">
                    <div className="conteudoServico">
                        <div className="infoServico">
                            <h2>Detalhamento do serviço</h2>
                            <strong><p>Objetivos e benefícios do serviço:</p></strong>
                            <p>Este serviço tem como objetivo contribuir para ...  gerando os benefícios tais em relação ao problema 
                            a ser solucionado. Este serviço tem como objetivo contribuir para ...  gerando os benefícios tais em relação ao problema a ser solucionado.</p>
                            <p>Este serviço tem como objetivo contribuir para ...  gerando os benefícios tais em relação ao problema 
                            a ser solucionado. Este serviço tem como objetivo contribuir para ...  gerando os benefícios tais em relação ao problema a ser solucionado.</p>
                            <h2>Requisitos para o serviço</h2>
                            <strong><p>Natureza do projeto:</p></strong>
                            <ul>
                                <li>Quais os objetivos básicos do projeto?</li>
                                <li>Quais resultados desejáveis?</li>
                                <li>Por que esse projeto tornou-se necessário?</li>
                                <li>Por que agora?</li>
                            </ul>
                            <strong><p>Análise de mercado:</p></strong>
                            <ul>
                                <li>Qual o segmento e o nicho do seu negócio? (Exemplo: moda - bijuterias)</li>
                                <li>Quais os seus concorrentes e/ou produtos similares?</li>
                            </ul>
                            <strong><p>Público-alvo:</p></strong>
                            <ul>
                                <li>Quem esse projeto deve atingir?</li>
                                <li>Qual experiência o projeto espera proporcionar?</li>
                            </ul>
                        </div>
                        <div className="precosPrazos">
                        <h2>Faixa de preço</h2>
                        <table className="NunericOptions">
                        <tr className="preco">
                            <td>
                                <legend>No mínimo</legend>
                                <div className="InputsNumeric">
                                <td><label>R$</label></td><td><input type="numeric" disabled/></td>
                                </div>
                            </td>
                            <td>
                                <legend>No mínimo</legend>
                                <div className="InputsNumeric">
                                <td><label>R$</label></td><td><input type="numeric" disabled/></td>
                                </div>
                            </td>
                        </tr>
                        </table>
                        <h2>Faixa de tempo</h2>
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
                        <div className="filtros">
                        <h2>Filtros</h2>
                        <ul>
                            <li><label>Design</label></li>
                            <li><label>IHC</label></li>
                            <li><label>UX</label></li>
                        </ul>
                        </div>
                        <div className="referencias">
                        <h2>Referencias do serviço</h2>
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


                    <div className="perguntasServico">
                    <h2>Perguntas Frequentes</h2>
                    <strong><p>Porquê isso é necessário para meu site?</p></strong>
                    <p>Os conceitos de UI e UX geram um maravilhoso desempenho para quem for utilizar as propriedades de sua interface.</p><br/>
                    <strong><p>Porquê isso é necessário para meu site?</p></strong>
                    <p>Os conceitos de UI e UX geram um maravilhoso desempenho para quem for utilizar as propriedades de sua interface.</p><br/>
                    <strong><p>Porquê isso é necessário para meu site?</p></strong>
                    <p>Os conceitos de UI e UX geram um maravilhoso desempenho para quem for utilizar as propriedades de sua interface.</p><br/>
                    <strong><p>Porquê isso é necessário para meu site?</p></strong>
                    <p>Os conceitos de UI e UX geram um maravilhoso desempenho para quem for utilizar as propriedades de sua interface.</p><br/>
                    </div>
                </section>  
            </div> 
        ) 
    }
}

export default DetalhesServico

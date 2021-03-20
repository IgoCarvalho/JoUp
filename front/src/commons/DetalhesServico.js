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
        if(!this.props.service) {
            return (<div>carregando...</div>)
        }

        console.log(this.props.service);
        
        return (
            <div className="ContainerServico">
                <div className="topSessao">
                    <h2>Serviços ofertados / <strong>{this.props.service?.titulo}</strong></h2>
                    <button className="bRoxoRedondo"><Link to={`/editarservico/${this.props.service._id}`}><i><FiEdit/></i>Editar serviço</Link></button>
                </div>
                <section className="SessoesServico">
                    <div className="conteudoServico">
                        <div className="infoServico">
                            <h2>Detalhamento do serviço</h2>
                            <div dangerouslySetInnerHTML={{__html: this.props.service.detalhes}}  />
                            
                            <h2>Requisitos para o serviço</h2>
                            <div dangerouslySetInnerHTML={{__html: this.props.service.requisitos}}  />
                        </div>
                        <div className="precosPrazos">
                        <h2>Faixa de preço</h2>
                        <table className="NunericOptions">
                        <tr className="preco">
                            <td>
                                <legend>No mínimo</legend>
                                <div className="InputsNumeric">
                                <td><label>R$</label></td><td><input type="numeric" value={this.props.service.faixa_de_preco?.min} disabled/></td>
                                </div>
                            </td>
                            <td>
                                <legend>No mínimo</legend>
                                <div className="InputsNumeric">
                                <td><label>R$</label></td><td><input type="numeric" value={this.props.service.faixa_de_preco?.max} disabled/></td>
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
                                <td><label>Semanas</label></td><td><input type="numeric" value={this.props.service.faixa_de_tempo?.min} disabled/></td>
                                </div>
                            </td>
                            <td>
                                <legend>No mínimo</legend>
                                <div className="InputsNumeric">
                                <td><label>Semanas</label></td><td><input type="numeric" value={this.props.service.faixa_de_tempo?.max} disabled/></td>
                                </div>
                            </td>
                        </tr>
                        </table>
                        <div className="filtros">
                        <h2>Filtros</h2>
                        <ul>
                            {
                                this.props.service.filtros?.map((filtro) => (
                                    <li key={filtro}><label>{filtro}</label></li>
                                ))
                            }
                            {/* <li><label>Design</label></li>
                            <li><label>IHC</label></li>
                            <li><label>UX</label></li> */}
                        </ul>
                        </div>
                        <div className="referencias">
                        <h2>Referencias do serviço</h2>
                        <ul>
                            {
                                this.props.service.referencias?.map((referencia) => (
                                    <li key={referencia._id}>
                                        <label><a href={referencia.link} target="_blank"><i><AiOutlineLink/></i>{referencia.nome}</a></label>
                                    </li>
                                ))
                            }
                            {/* <li><label><a href="" target="_blank"><i><AiOutlineLink/></i>Google Drive</a></label></li>
                            <li><label><a href="" target="_blank"><i><AiOutlineLink/></i>Vídeo do Youtube</a></label></li><br/> */}
                        </ul>
                        {/* <ul>
                            <li><label><a href="" target="_blank"><i><AiOutlineLink/></i>https://determined-no...</a></label></li>
                        </ul> */}
                        </div>
                        
                        </div>
                    </div>


                    <div className="perguntasServico">
                        <h2>Perguntas Frequentes</h2>
                        <div dangerouslySetInnerHTML={{__html: this.props.service.perguntas}} />
                    </div>
                </section>  
            </div> 
        ) 
    }
}

export default DetalhesServico

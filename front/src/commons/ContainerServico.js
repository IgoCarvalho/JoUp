import React, { Component } from 'react';
import '../commons/ContainerServico.css';
import { FaPlus } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import '../commons/BotaoRoxo.css';
import { Link } from 'react-router-dom';

export class ContainerServico extends Component { 
    render() {
        return (
            <div className="ContainerServico">
                <div className="topSessao">
                    <h2>Serviços ofertados</h2>
                    <button className="bRoxoRedondo"><Link to="adicionarservico"><i><FaPlus/></i>Adicionar serviço</Link></button>
                </div>
                <div className="CardsContainer">
                    <ul className="listaServicos">
                            <li><Link to="">
                                <h3>Criação de interface para sites e aplicativos</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                                </Link>
                            </li>
                            <li><Link to="">
                                <h3>Criação de interface para sites e aplicativos</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                                </Link>
                            </li>
                            <li><Link to="">
                                <h3>Criação de interface para sites e aplicativos</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                                </Link>
                            </li>
                            <li><Link to="">
                                <h3>Criação de interface para sites e aplicativos</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                                </Link>
                            </li>
                            <li><Link to="">
                                <h3>Criação de interface para sites e aplicativos</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                                </Link>
                            </li>
                            <li><Link to="">
                                <h3>Criação de interface para sites e aplicativos</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                                </Link>
                            </li>
                            <li><Link to="">
                                <h3>Criação de interface para sites e aplicativos</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                                </Link>
                            </li><li><Link to="">
                                <h3>Criação de interface para sites e aplicativos</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                                </Link>
                            </li><li><Link to="">
                                <h3>Criação de interface para sites e aplicativos</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                                </Link>
                            </li><li><Link to="">
                                <h3>Criação de interface para sites e aplicativos</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                                </Link>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}

export default ContainerServico

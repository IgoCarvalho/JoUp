import React, { Component } from 'react';
import '../commons/ContainerServico.css';
import { AiOutlinePlus } from "react-icons/ai";
import '../commons/BotaoRoxo.css';

export class ContainerServico extends Component {
    render() {
        return (
            <div className="ContainerServico">
                <div className="topSessao">
                    <h2>Serviços ofertados</h2>
                    <button className="bRoxoRedondo"><i><AiOutlinePlus/></i>Adicionar serviço</button>
                </div><div className="CardsContainer">
                    <ul className="listaServicos">
                            <li>
                                <h3>Título Serviço</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}

export default ContainerServico

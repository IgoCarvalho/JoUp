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
                                <h3>Criação de interface para sites e aplicativos</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Identidade Visual</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Cartão de visitas</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Animação de logo</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Consultoria de design para redes sociais</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Edição de vídeos de data comemorativa</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Criação de paleta de cores</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                            <li>
                                <h3>Criação de interface para sites e aplicativos</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}

export default ContainerServico

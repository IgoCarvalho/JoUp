import React, { Component } from 'react';
import '../commons/ContainerServico.css';
import { FaPlus } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import '../commons/BotaoRoxo.css';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";

export class ContainerDetalhamento extends Component {
    render() {
        return (
            <div className="ContainerDetalhamento">
                <div className="topSessao">
                    <h2>Projetos em andamento</h2>
                    <h1>Título do Projeto</h1>
                    <button className="bRoxoRedondo"><i><FiEdit/></i>Editar projeto</button>
                </div><div className="ProjInfoContainer">
                    
                </div>
            </div>
        )
    }
}

export default ContainerDetalhamento

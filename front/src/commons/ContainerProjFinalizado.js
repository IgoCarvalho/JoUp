import React, { Component } from 'react';
import '../commons/ContainerProjeto.css';
import { AiOutlineCalendar,AiOutlinePlus } from "react-icons/ai";
import { BsCheckBox } from "react-icons/bs";
import '../commons/BotaoRoxo.css';
import { FaPlus } from "react-icons/fa";


export class ContainerProjFinalizado extends Component {
    render() {
        return (
            <div className="ContainerProjeto">
                <div className="topSessao">
                    <h2>Projetos finalizados</h2>
                    
                </div>
                <div className="CardsContainer">
                    <ul className="listaProjetos">
                    <li>
                            <h3 className="tituloProjeto">0764 - Construtop</h3>
                            <span><i><BsCheckBox/></i>1/5 Finalização dos esboços desenvolvidos</span>
                            <span><i><AiOutlineCalendar/></i>12 de Janeiro - 20 de Fevereiro</span>
                            <div className="tagsProjetos"><label>Design</label><label>UX</label><label>IHC</label></div>
                        </li>
                        <li>
                            <h3 className="tituloProjeto">0764 - Construtop</h3>
                            <span><i><BsCheckBox/></i>1/5 Finalização dos esboços desenvolvidos</span>
                            <span><i><AiOutlineCalendar/></i>12 de Janeiro - 20 de Fevereiro</span>
                            <div className="tagsProjetos"><label>Design</label><label>UX</label><label>IHC</label></div>
                        </li>
                        <li>
                            <h3 className="tituloProjeto">0764 - Construtop</h3>
                            <span><i><BsCheckBox/></i>1/5 Finalização dos esboços desenvolvidos</span>
                            <span><i><AiOutlineCalendar/></i>12 de Janeiro - 20 de Fevereiro</span>
                            <div className="tagsProjetos"><label>Design</label><label>UX</label><label>IHC</label></div>
                        </li>  
                    </ul>
                </div>
            </div>
        )
    }
}

export default ContainerProjFinalizado;
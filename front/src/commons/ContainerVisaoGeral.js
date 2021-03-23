import React, { Component } from 'react';
import '../commons/ContainerProjeto.css';
import { AiOutlineCalendar,AiOutlinePlus } from "react-icons/ai";
import { BsCheckBox } from "react-icons/bs";
import { FaPlus, FaCaretDown } from "react-icons/fa";
import '../commons/BotaoRoxo.css';
import { Link } from 'react-router-dom';
import '../commons/ContainerVisaoGeral.css';
import fakeCalendar from '../images/calendarfake.png';


export class ContainerVisaoGeral extends Component {
    render() {
        return (
            <div className={`ContainerVisaoGeral ${this.props.menu && 'open'}`}>
                <div className="CardsContainer"> 
                <h2>Projetos em andamento</h2>
                    <ul className="listaProjetos">
                        <li>
                            <h3 className="tituloProjeto">0764 - Construtop</h3>
                            <span><i><BsCheckBox/></i>1/5 Finalização dos esboços desenvolvidos</span>
                            <span><i><AiOutlineCalendar/></i>12 de Janeiro - 20 de Fevereiro</span>
                            <div className="tagsProjetos"><label>Design</label><label>UX</label><label>IHC</label></div>
                                <div className="progresProj">
                                <div className="cinza">
                                    <div className="roxo"></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <h3 className="tituloProjeto">0764 - Construtop</h3>
                            <span><i><BsCheckBox/></i>1/5 Finalização dos esboços desenvolvidos</span>
                            <span><i><AiOutlineCalendar/></i>12 de Janeiro - 20 de Fevereiro</span>
                            <div className="tagsProjetos"><label>Design</label><label>UX</label><label>IHC</label></div>
                                <div className="progresProj">
                                <div className="cinza">
                                    <div className="roxo"></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <h3 className="tituloProjeto">0764 - Construtop</h3>
                            <span><i><BsCheckBox/></i>1/5 Finalização dos esboços desenvolvidos</span>
                            <span><i><AiOutlineCalendar/></i>12 de Janeiro - 20 de Fevereiro</span>
                            <div className="tagsProjetos"><label>Design</label><label>UX</label><label>IHC</label></div>
                                <div className="progresProj">
                                <div className="cinza">
                                    <div className="roxo"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="CalendarContainer">
                <h2>Atividades do dia</h2>
                    <div className="Calendário">
                        <img src={fakeCalendar}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContainerVisaoGeral;
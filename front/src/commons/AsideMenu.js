import React, { Component } from 'react';
import {AiOutlineUserAdd,AiOutlineEye,AiOutlineBulb,AiOutlineCalendar,AiOutlineUnorderedList} from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../commons/AsideMenu.css';

export class AsideMenu extends Component {
    render() {
        const { page, menu } = this.props;
        
        return (
            <aside className="AsideMenu">
                <div className={`AsideContainer ${menu? 'AsideContainer-aberto' : ''}`}>
                        {/* <table>
                            <tr className={`desmarcado ${page === 'visaogeral'? 'marcado' : ''}`}><Link to="/visaogeral"><td><i><AiOutlineEye/></i></td> <td className="legend">Visão Geral</td></Link></tr>
                            <tr className={`desmarcado ${page === 'projetos' ? 'marcado' : ''}`}><Link to="/projetos"><td><i><AiOutlineBulb/></i></td><td className="legend">Projetos</td></Link></tr>
                            <tr className={`desmarcado ${page === 'servicos' ? 'marcado' : ''}`}><Link to="/servicos"><td><i><AiOutlineUnorderedList/></i></td> <td className="legend">Serviços Ofertados</td></Link></tr> 
                            <tr className={`desmarcado ${page === 'solicitacoes' ? 'marcado' : ''}`}><Link to=""><td><i><AiOutlineUserAdd/></i></td> <td className="legend">Solicitações</td></Link></tr> 
                            <tr className={`desmarcado ${page === 'calendario' ? 'marcado' : ''}`}><Link to=""><td><i><AiOutlineCalendar/></i></td> <td className="legend">Agenda</td></Link></tr>
                        </table> */}

                        <ul>
                            <li className={`${page === 'avisaogeral'? 'marcado' : ''}`}>
                                <Link className="menu-text" to="/visaogeral"><i><AiOutlineEye/></i>
                                    <p>Visão Geral</p>
                                </Link>
                            </li>
                            <li className={`${page === 'aprojetos' ? 'marcado' : ''}`}>
                                <div className="menu-text">
                                    <i><AiOutlineBulb/></i>
                                    <p>Projetos</p>
                                </div>

                                <ul className="sub-menu">
                                    <li>
                                        <Link to="/projetos">
                                            <p>Em andamento</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/projetos">
                                            <p>Finalizados</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={`${page === 'aservicos' ? 'marcado' : ''}`}>
                                <Link className="menu-text" to="/servicos"><i><AiOutlineUnorderedList/></i>
                                    <p>Serviços Ofertados</p>
                                </Link>
                            </li>
                            <li className={`${page === 'solicitacoes' ? 'marcado' : ''}`}>
                                <div className="menu-text">
                                    <i><AiOutlineBulb/></i>
                                    <p>Solicitações</p>
                                </div>

                                <ul className="sub-menu">
                                    <li>
                                        <Link to="/solicitacoes">
                                            <p>Novas</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/solicitacoes">
                                            <p>Pendentes</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={`${page === 'calendario' ? 'marcado' : ''}`}>
                                <Link className="menu-text" to="/visaogeral"><i><AiOutlineCalendar/></i>
                                    <p>Agenda</p>
                                </Link>
                            </li>
                        </ul>
                </div>
            </aside>
        )
    }
}

export default AsideMenu

import React, { Component } from 'react';
import {AiOutlineUsergroupAdd,AiOutlineUserAdd,AiOutlineFileDone,AiOutlineEye,AiOutlineBulb,AiOutlineCalendar,AiOutlineUnorderedList} from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../commons/AsideMenu.css';

export class AsideMenu extends Component {
    render() {
        return (
            <aside className="AsideMenu">
                <div className={"AsideContainer "+(this.props.menu? "AsideContainer-aberto":"")}>
                        <table>
                            <tr className="desmarcado"><Link to="visaogeral"><td><i><AiOutlineEye/></i></td> <td className="legend">Visão Geral</td></Link></tr>
                            <tr className="desmarcado"><Link to="projetos"><td><i><AiOutlineBulb/></i></td><td className="legend">Projetos</td></Link></tr>
                            <tr className="desmarcado"><Link to="servicos"><td><i><AiOutlineUnorderedList/></i></td> <td className="legend">Serviços Ofertados</td></Link></tr> 
                            <tr className="desmarcado"><Link to=""><td><i><AiOutlineUserAdd/></i></td> <td className="legend">Solicitações</td></Link></tr> 
                            <tr className="desmarcado"><Link to=""><td><i><AiOutlineCalendar/></i></td> <td className="legend">Agenda</td></Link></tr>
                        </table>
                </div>
            </aside>
        )
    }
}

export default AsideMenu

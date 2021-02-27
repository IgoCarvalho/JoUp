import React, { Component } from 'react';
import {BiMenu, BiBell,BiSearch, BiUser, BiShow, BiTime, BiCalendar} from "react-icons/bi";
import {FaRegClipboard} from "react-icons/fa";
import {AiOutlineUserAdd} from "react-icons/ai";
import {FiUsers} from "react-icons/fi";
import {MdComputer} from "react-icons/md";
import '../components/PerfilSubMenu.css';

export class PerfilSubMenu extends Component {
    render() {
        return (
            <div>
                <section className="containerProfile">
                    <section className="menuLateral"> 
                        <ul>
                            <li className="desmarcado"><a href=""><i><BiShow /></i>Visão Geral</a></li>
                            <li className="desmarcado"><a href=""><i><FaRegClipboard /></i>Projetos</a></li>
                            <li className="marcado"><a href=""><i><MdComputer /></i>Serviços ofertados</a></li>
                            <li className="desmarcado"><a href=""><i><AiOutlineUserAdd /></i>Solicitações</a></li>
                            <li className="desmarcado"><a href=""><i><BiCalendar /></i>Agenda</a></li>
                        </ul>
                    </section>
                    <section className="conteudo"></section>
                </section>
            </div>
        )
    }
}

export default PerfilSubMenu

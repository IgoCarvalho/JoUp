import React, { Component } from 'react';
import { BiMenu, BiBell, BiSearch, BiUser, BiShow, BiTime, BiCalendar } from "react-icons/bi";
import { FaRegClipboard } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import logo from "../images/logo.svg";
import '../components/Navegador.css';
import { Link } from 'react-router-dom';
  
export class Navegador extends Component {
    render() {
        return (
            <div>
                <nav className="fullNav">
                    <img src={logo} className="logoNav1" alt="logo"/>
                    <ul className="navMain">
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#funcionalidades">Funcionalidades</a></li>
                        <li><a href="#planos">Preços e Planos</a></li>
                        <li><a href="#contato">Contato</a></li> 
                        <li><a href="">Perguntas Frequentes</a></li>
                    </ul>
                    <div className="perfil">
                        {/* <button><BiUser /></button> */}
                        <button className="login"><Link to="/login">Entrar</Link></button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navegador

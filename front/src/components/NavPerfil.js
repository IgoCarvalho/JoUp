import React, { Component } from 'react';
import Busca from '../commons/Busca';
import Logo from '../commons/Logo';
import {AiOutlineMenu} from "react-icons/ai";

import '../components/Nav.css';
import PerfilUser from '../commons/PerfilUser';

export class NavPerfil extends Component {
    render() {
        return (
            <nav className="NavPerfil">
                <div className="LogoMenu">
                <button onClick={()=>{this.props.abrirMenu()}}><AiOutlineMenu/></button>
                <Logo/>
                </div>
                <div className="Busca"><Busca/></div>
                <div className="PerfilUser"><PerfilUser/></div>
            </nav>
        )
    }
}

export default NavPerfil

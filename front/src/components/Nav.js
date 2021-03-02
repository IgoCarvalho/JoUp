import React, { Component } from 'react';
import '../components/Nav.css';
import '../commons/BotaoRoxo.css';
import { Link } from 'react-router-dom';
import Logo from '../commons/Logo';
import Menus from '../commons/Menus';

export class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="component">
                   <Logo/>
                   <Menus/>
                   <button className="bRoxo"><Link to="login" className="entrar">Entrar</Link></button>
                </nav>
            </div>
        )
    }
}

export default Nav

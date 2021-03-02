import React, { Component } from 'react';
import '../commons/Menu.css';

export class Menus extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li><a href="#apresentacao">Sobre</a></li>
                    <li><a href="#funcionalidades">Funcionalidades</a></li>
                    <li><a href="#planos">Preços e Planos</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#perguntas">Perguntas Frequentes</a></li>
                </ul>
            </div>
        )
    }
}

export default Menus

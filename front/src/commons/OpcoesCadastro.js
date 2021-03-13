import React, { Component } from 'react';
import LogoMax from './LogoMax';
import { Link } from 'react-router-dom';
import '../commons/BotaoRoxo.css';
import '../commons/OpcoesCadastro.css';
import BotoesCadastro from './BotoesCadastro';

export class OpcoesCadastro extends Component {
    render() {
        return (
            <div className="containerConta">
                <LogoMax/>
                <h2>Cadastro</h2>
                <label>Já possui conta? <Link to="login">Entrar</Link></label>
                <BotoesCadastro/>
            </div>
        )
    }
}

export default OpcoesCadastro

import React, { Component } from 'react';
import '../commons/ContaDeUsuario.css';
import Logo from './Logo';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import FormLogin from './FormLogin';
import LogoMax from './LogoMax';
import FormCadastro from './FormCadastro';

export class ContaDeUsuario extends Component {
    render() {
        return (
            <div className="containerConta">
                <LogoMax/>
                <h2>Acessar minha conta</h2>
                <label>Não possui conta? <Link to="/cadastro">Cadastre-se</Link></label>
                <FormLogin/>
            </div>
        )
    }
}

export default ContaDeUsuario

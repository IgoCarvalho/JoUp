import React, { Component } from 'react';
import LogoMax from './LogoMax';
import FormCadastro from './FormCadastro';
import { Link } from 'react-router-dom';
import FormSenha from './FormSenha';
import FormCodigoSenha from './FormCodigoSenha';

export class ContainerCodigoSenha extends Component {
    render() {
        return (
            <div className="containerConta">
                <LogoMax/>
                <h2>Redefinir Senha</h2>
                <label>Lembrou sua senha?<Link to="login"> Entrar</Link></label>
                <FormCodigoSenha/>
           </div>
        )
    }
}

export default ContainerCodigoSenha

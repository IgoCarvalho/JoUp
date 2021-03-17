import React, { Component } from 'react';
import LogoMax from './LogoMax';
import FormCadastro from './FormCadastro';
import { Link } from 'react-router-dom';

export class CadastroUsuario extends Component {
    render() {
        return ( 
            <div className="containerConta">
                <LogoMax/>
                <h2>Cadastro</h2>
                <label>Já possui conta?<Link to="login"> Entrar</Link></label>
                <FormCadastro/>
            </div>
        )
    }
}

export default CadastroUsuario

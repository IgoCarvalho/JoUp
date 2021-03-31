import React, { Component } from 'react';
import LogoMax from './LogoMax';
import FormCadastro from './FormCadastro';
import { Link } from 'react-router-dom';
import FormPagamento from './FormPagamento';

export class ContainerPagamento extends Component {
    render() {
        return (
            <div className="containerConta">
                <LogoMax/>
                <h2>Dados de pagamento</h2>
                <label>Já possui uma conta?<Link to="login"> Entrar</Link></label>
                <FormPagamento/>
           </div> 
        )
    }
}

export default ContainerPagamento

import React, { Component } from 'react';
import CadastroUsuario from '../commons/CadastroUsuario';
import ContaDeUsuario from '../commons/ContaDeUsuario';
import DesignerCotainer from '../commons/DesignerCotainer';
import '../components/Cadastro.css';

export class Cadastro extends Component {
    render() {
        return (
            <div className="Cadastro">
                <CadastroUsuario/>
                <DesignerCotainer/>
            </div>
        )
    }
}

export default Cadastro

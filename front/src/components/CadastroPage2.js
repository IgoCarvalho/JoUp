import React, { Component } from 'react'
import CadastroUsuario from '../commons/CadastroUsuario';
import DesignerCotainer from '../commons/DesignerCotainer';
import OpcoesCadastro from '../commons/OpcoesCadastro';
import '../components/Cadastro.css';
export class CadastroPage2 extends Component {
    render() {
        return (
            <div className="Cadastro">
                <OpcoesCadastro/>
                <DesignerCotainer/>
            </div>
        )
    }
}

export default CadastroPage2

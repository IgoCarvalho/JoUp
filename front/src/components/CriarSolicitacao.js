import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu';
import ContainerCriarSolicitacao from '../commons/ContainerCriarSolicitacao';
import ContainerDetalheSolicitacao from '../commons/ContainerDetalheSolicitacao';
import '../components/Projetos.css';
import NavPerfil from './NavPerfil';

export class CriarSolicitacao extends Component {
    state= {
        menu: false
    };

    abreMenu=()=>{
        this.setState({menu:!this.state.menu});
    }
    render() {
        return (
            <div className="detalheSolicitacao">
                <NavPerfil abrirMenu={this.abreMenu}/>
                <AsideMenu menu={this.state.menu}/>
                <ContainerCriarSolicitacao />
            </div>
        )
    }
}

export default CriarSolicitacao;
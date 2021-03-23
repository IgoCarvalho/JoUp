import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu';
import ContainerDetalheSolicitacao from '../commons/ContainerDetalheSolicitacao';
import '../components/Projetos.css';
import NavPerfil from './NavPerfil';

export class DetalheSolicitacao extends Component {
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
                <ContainerDetalheSolicitacao menu={this.state.menu} />
            </div>
        )
    }
}

export default DetalheSolicitacao;
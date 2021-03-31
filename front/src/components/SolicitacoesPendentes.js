import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu';
import ContainerSolicitacoes from '../commons/ContainerSolicitacoes';
import '../components/Solicitacoes.css';
import NavPerfil from './NavPerfil';

export class SolicitacoesPendentes extends Component {
    state= {
        menu: false
    };

    abreMenu=()=>{
        this.setState({menu:!this.state.menu});
    }
    render() {
        return (
            <div className="solicitacoes">
                <NavPerfil abrirMenu={this.abreMenu}/>
                <AsideMenu page="solicitacoes" menu={this.state.menu}/>
                <ContainerSolicitacoes menu={this.state.menu} pendentes/>
            </div>
        )
    }
}

export default SolicitacoesPendentes;
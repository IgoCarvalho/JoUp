import React, { Component } from 'react';
import AsideMenu from '../commons/AsideMenu';
import ContainerServico from '../commons/ContainerServico';
import DetalhesServico from '../commons/DetalhesServico';
import '../components/Servicos.css';
import NavPerfil from './NavPerfil';

export class ServicoAberto extends Component {
    state= {
        menu: false
    };

    abreMenu=()=>{
        this.setState({menu:!this.state.menu});
    }
    render() {
        return (
            <div className="servicos">
                <NavPerfil abrirMenu={this.abreMenu}/>
                <AsideMenu menu={this.state.menu}/>
                <DetalhesServico/>
            </div>
        )
    }
}

export default ServicoAberto

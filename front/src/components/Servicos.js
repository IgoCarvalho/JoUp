import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu';
import ContainerServico from '../commons/ContainerServico';
import '../components/Servicos.css';
import Nav from './Nav';
import NavPerfil from './NavPerfil';

export class Servicos extends Component {
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
                <AsideMenu page="servicos" menu={this.state.menu}/>
                <ContainerServico/>
            </div>
        )
    }
}

export default Servicos

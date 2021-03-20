import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu';
import '../commons/ContainerProjeto.css';
import ContainerProjFinalizado from '../commons/ContainerProjFinalizado';
import '../components/Projetos.css';
import Nav from './Nav';
import NavPerfil from './NavPerfil';

export class ProjFinalizado extends Component {
    state= {
        menu: false
    };

    abreMenu=()=>{
        this.setState({menu:!this.state.menu});
    }
    render() {
        return (
            <div className="projetos">
                <NavPerfil abrirMenu={this.abreMenu}/>
                <AsideMenu page="projetos" menu={this.state.menu}/>
                <ContainerProjFinalizado/>
            </div>
        )
    }
}

export default ProjFinalizado;

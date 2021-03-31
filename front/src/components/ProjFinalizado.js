import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu';
import '../commons/ContainerProjeto.css';
import ContainerProjFinalizado from '../commons/ContainerProjFinalizado';
import '../components/Projetos.css';
import Nav from './Nav';
import NavPerfil from './NavPerfil';
import ContainerProjeto from '../commons/ContainerProjeto';


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
                <ContainerProjeto menu={this.state.menu} finalizado/>
            </div>
        )
    }
}

export default ProjFinalizado;

import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu';
import ContainerProjeto from '../commons/ContainerProjeto';
import '../components/Projetos.css';
import Nav from './Nav';
import NavPerfil from './NavPerfil';

export class Projetos extends Component {
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
                <ContainerProjeto/>
            </div>
        )
    }
}

export default Projetos;

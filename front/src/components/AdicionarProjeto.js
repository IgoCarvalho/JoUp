import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu';
import ContainerAdicionarProjeto from '../commons/ContainerAdicionarProjeto';
import '../components/AdicionarProjeto.css';
import Nav from './Nav';
import NavPerfil from './NavPerfil';

export class AdicionarProjeto extends Component {
    state= {
        menu: false
    };

    abreMenu=()=>{
        this.setState({menu:!this.state.menu});
    }
    render() {
        return (
            <div className="addProjetos">
                <NavPerfil abrirMenu={this.abreMenu}/>
                <AsideMenu page="projetos" menu={this.state.menu}/>
                <ContainerAdicionarProjeto/>
            </div>
        )
    }
}

export default AdicionarProjeto;
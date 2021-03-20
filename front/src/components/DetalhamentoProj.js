import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu';
import '../commons/ContainerProjeto.css';
import ContainerDetalhamento from '../commons/ContainerDetalhamento';
import '../components/DetalhamentoProj.css';
import Nav from './Nav';
import NavPerfil from './NavPerfil';


export class DetalhamentoProj extends Component {
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
                <ContainerDetalhamento/>
            </div>
        )
    }
}

export default DetalhamentoProj;
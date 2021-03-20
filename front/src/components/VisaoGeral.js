import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu';
import '../components/Projetos.css';
import Nav from './Nav';
import NavPerfil from './NavPerfil';
import ContainerVisaoGeral from '../commons/ContainerVisaoGeral';

export class VisaoGeral extends Component {
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
                <AsideMenu page="visaogeral" menu={this.state.menu}/>
                <ContainerVisaoGeral/>
            </div>
        )
    }
}

export default VisaoGeral;
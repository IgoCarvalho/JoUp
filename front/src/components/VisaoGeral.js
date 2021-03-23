import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu';
import '../components/Projetos.css';
import Nav from './Nav';
import NavPerfil from './NavPerfil';
import ContainerVisaoGeral from '../commons/ContainerVisaoGeral';
import '../components/VisaoGeral.css';

export class VisaoGeral extends Component {
    state= {
        menu: false
    };

    abreMenu=()=>{
        this.setState({menu:!this.state.menu});
    }
    render() {
        return (
            <div className="VisaoGeral">
                <NavPerfil abrirMenu={this.abreMenu}/>
                <AsideMenu page="visaogeral" menu={this.state.menu}/>
                <ContainerVisaoGeral menu={this.state.menu}/>
            </div>
        )
    }
}

export default VisaoGeral;
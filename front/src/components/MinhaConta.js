import React, { Component } from 'react';
import AsideMenu from '../commons/AsideMenu';
import NavPerfil from './NavPerfil';
import '../components/MeuPerfil.css';
import ContainerConta from '../commons/ContainerConta';

class MinhaConta extends Component {
    state= {
        menu: false
    };

    abreMenu=()=>{
        this.setState({menu:!this.state.menu});
    }
    render() {
        return (
            <div className="MinhaConta">
                <NavPerfil abrirMenu={this.abreMenu}/>
                <AsideMenu menu={this.state.menu}/>
                <ContainerConta/> 
            </div>
        )
    }
}

export default MinhaConta

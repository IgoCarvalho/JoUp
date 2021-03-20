import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu'
import ContainerPerfil from '../commons/ContainerPerfil'
import NavPerfil from './NavPerfil'
import '../components/MeuPerfil.css'

class MeuPerfil extends Component {
    state= {
        menu: false
    };

    abreMenu=()=>{
        this.setState({menu:!this.state.menu});
    }
    render() {
        return (
            <div className="MeuPerfil">
                <NavPerfil abrirMenu={this.abreMenu}/>
                <AsideMenu menu={this.state.menu}/>
                <ContainerPerfil/> 
            </div>
        )
    }
}

export default MeuPerfil;
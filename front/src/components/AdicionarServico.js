import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu'
import AddServico from '../commons/AddServico'
import NavPerfil from './NavPerfil'

export class AdicionarServico extends Component {
    state= {
        menu: false
    };

    abreMenu=()=>{
        this.setState({menu:!this.state.menu});
    }
    render() {
        return (
            <div className="ContainerAdicionarServico">
                <NavPerfil abrirMenu={this.abreMenu}/>
                <AsideMenu page="servicos" menu={this.state.menu}/>
                <AddServico/>
                
            </div>
        )
    }
}

export default AdicionarServico

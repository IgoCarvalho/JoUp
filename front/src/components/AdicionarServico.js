import React, { Component } from 'react'
import AsideMenu from '../commons/AsideMenu'
import ModalAddServico from '../commons/ModalAddServico'
import NavPerfil from './NavPerfil'

export class AdicionarServico extends Component {
    render() {
        return (
            <div className="ContainerAdicionarServico">
                <NavPerfil/>
                <AsideMenu/>
                <ModalAddServico/>
                
            </div>
        )
    }
}

export default AdicionarServico

import React, { Component } from 'react'
import ContainerResetSenha from '../commons/ContainerResetSenha'
import DesignerCotainer from '../commons/DesignerCotainer'
import '../components/RedefinirSenha.css';

export class RedefinirSenha extends Component {
    render() {
        return (
            <div className="RedefinirSenha">
                <ContainerResetSenha/>
                <DesignerCotainer/>
            </div>
        )
    }
}

export default RedefinirSenha

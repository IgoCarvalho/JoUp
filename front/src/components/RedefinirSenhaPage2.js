import React, { Component } from 'react';
import ContainerCodigoSenha from '../commons/ContainerCodigoSenha';
import DesignerCotainer from '../commons/DesignerCotainer';
import '../components/RedefinirSenhaPage2.css';

export class RedefinirSenhaPage2 extends Component {
    render() {
        return (
            <div className="RedefinirSenhaPage2">
                <ContainerCodigoSenha/>
                <DesignerCotainer/>
            </div>
        )
    }
}

export default RedefinirSenhaPage2

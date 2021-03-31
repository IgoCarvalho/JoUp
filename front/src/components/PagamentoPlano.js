import React, { Component } from 'react'
import ContainerPagamento from '../commons/ContainerPagamento'
import DesignerCotainer from '../commons/DesignerCotainer'
import '../components/Login.css';

export class PagamentoPlano extends Component {
    render() {
        return (
            <div className="Login">
                <ContainerPagamento/>
                <DesignerCotainer/>
            </div>
        )
    }
}

export default PagamentoPlano

import React, { Component } from 'react';
import '../commons/ContratarPlano.css';
import Planos from '../commons/Planos';
import LogoMax from './LogoMax';

export class ContratarPlano extends Component {
    render() {
        return (
            <div className="ContratarPlano">
                <div className="HeaderPlanos">
                <LogoMax/>
                <h2>Selecione um plano</h2>
                </div>
                <Planos/>
                <div className="bNext">
                    <button className="bRoxoRedondo">Próximo</button>
                </div>
            </div>
        )
    }
}

export default ContratarPlano

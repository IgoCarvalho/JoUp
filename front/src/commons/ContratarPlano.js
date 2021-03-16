import React, { Component } from 'react';
import '../commons/ContratarPlano.css';
import Planos from '../commons/Planos';
import ListaPlanos from './ListaPlanos';
import LogoMax from './LogoMax';
import PlanoBasico from './PlanoBasico';
import PlanoCompleto from './PlanoCompleto';
import PlanoPremium from './PlanoPremium';

export class ContratarPlano extends Component {

    state = {
        planos: [
            {key: 'basic', component: <PlanoBasico/>},
            {key: 'complete', component: <PlanoCompleto/>},
            {key: 'premium', component: <PlanoPremium/>},
        ],
        planoSelecionado: ''
    }

    selectPlano = (planoKey) => {
        this.setState({ ...this.planos, planoSelecionado: planoKey })
    }
    
    render() {
        return (
            <div className="ContratarPlano">
                <div className="HeaderPlanos">
                <LogoMax/>
                <h2>Selecione um plano</h2>
                </div>

                <ListaPlanos>
                    
                    {
                        this.state.planos.map((plano) => (
                            <div key={plano.key} onClick={() => this.selectPlano(plano.key)}>
                                {React.cloneElement(plano.component, { selected: this.state.planoSelecionado })}
                            </div>
                        ))
                    }
                    
                </ListaPlanos>
                
                <div className="bNext">
                    <button disabled={!this.state.planoSelecionado} className="bRoxoRedondo" onClick={() => {alert('ola')}}>Próximo</button>
                </div>
            </div>
        )
    }
}

export default ContratarPlano;

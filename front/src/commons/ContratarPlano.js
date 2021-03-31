import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import '../commons/ContratarPlano.css';
import Planos from '../commons/Planos';
import ListaPlanos from './ListaPlanos';
import LogoMax from './LogoMax';
import PlanoBasico from './PlanoBasico';
import PlanoCompleto from './PlanoCompleto';
import PlanoPremium from './PlanoPremium';

import { fetchPlan } from '../store/actions/userActions';

export class ContratarPlano extends Component {

    state = {
        planos: [
            {key: 'basic', component: <PlanoBasico/>},
            {key: 'complete', component: <PlanoCompleto/>},
            {key: 'premium', component: <PlanoPremium/>},
        ],
        planoSelecionado: '',
        submitting: false
    }

    selectPlano = (planoKey) => {
        this.setState({ ...this.planos, planoSelecionado: planoKey })
    }

    contractPlan = () => {
        const { history } = this.props
        history.push('/dadospagamento', {plan: this.state.planoSelecionado})
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
                    <button disabled={this.state.submitting || !this.state.planoSelecionado} className="bRoxoRedondo" onClick={this.contractPlan}>Próximo</button>
                </div>
            </div>
        )
    }
}


export default withRouter(ContratarPlano);

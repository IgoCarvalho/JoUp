import React, { Component } from 'react';
import '../commons/BotaoRoxo.css';
import '../commons/OpcoesCadastro.css';
import '../commons/FormCadastro.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPlan } from '../store/actions/userActions';


export class BotoesCadastro extends Component {
    contractPlanFree = (e) => {
        const { fetchPlan: plan, history } = this.props;

        plan('free')
            .then(() => {
                console.log('deu certo');
                history.push('/visaogeral')
            })

    }
    
    render() {
        return (
            <div className="FormCadastro">
                <form>
                    <h4>O que você deseja fazer?</h4>
                    <button onClick={this.contractPlanFree} type="button" className="bRoxoRedondo">Realizar teste grátis</button><br/>
                    <button onClick={()=>{ this.props.history.push('/contratarplano') }} type="button" className="bRoxoRedondo">Contratar plano</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = { fetchPlan };


export default withRouter(connect(undefined, mapDispatchToProps)(BotoesCadastro));


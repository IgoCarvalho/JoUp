import React, { Component } from 'react';
import '../commons/Funcionalidades.css';
import acompanhamento from '../images/acompanhamento.svg';
import triagem from '../images/triagem.svg';
import autonomia from '../images/autonomia.svg';
import gerencia from '../images/gerencia.svg';

export class Funcionalidades extends Component {
    render() {
        return (
            <section className="funcionalidades" id="funcionalidades">
                <h2>Proporcionamos uma experiência única para você e os seus clientes</h2>
                <br/>
                <ul className="textos3">
                    <li className="acompanhamento">
                        <img src={acompanhamento}/>
                        <h3>Acompanhamento</h3>
                        <p>Possibilite aos seus clientes fazer o acompanhamento do projeto de forma rápida e prática.</p>
                    </li>
                    <li className="triagem">
                        <img src={triagem} />
                        <h3>Triagem de clientes</h3>
                        <p>Gerencie seus projetos e clientes ganhando tempo e praticidade na etapa de análise de documentos e contratação de serviços.</p>
                    </li>
                    <li className="fluxo">
                        <img src={gerencia}/>
                        <h3>Fluxo de processos</h3>
                        <p>Automatize a sua gestão de projetos a fim de acelerar, facilitar e centralizar a comunicação entre você e seus clientes. </p>
                    </li>
                    <li className="autonomia">
                        <img src={autonomia}/>
                        <h3>Autonomia</h3>
                        <p>Tenha autonomia para customizar os seus projetos de acordo com a sua individualidade profissional.</p>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Funcionalidades

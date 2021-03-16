import React, { Component } from 'react';
import '../commons/BotaoRoxo.css';
import '../commons/OpcoesCadastro.css';
import '../commons/FormCadastro.css';
import { Link } from 'react-router-dom';


export class BotoesCadastro extends Component {
    render() {
        return (
            <div className="FormCadastro">
                <form>
                    <h4>O que você deseja fazer?</h4>
                    <button className="bRoxoRedondo"><Link to="">Realizar teste grátis</Link></button><br/>
                    <button className="bRoxoRedondo"><Link to="contratarplano">Contratar plano</Link></button>
                </form>
            </div>
        )
    }
}

export default BotoesCadastro

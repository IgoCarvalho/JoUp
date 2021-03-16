import React, { Component } from 'react'
import PlanoBasico from './PlanoBasico'
import PlanoCompleto from './PlanoCompleto'
import PlanoPremium from './PlanoPremium'
import '../commons/Planos.css';
import '../commons/BotaoAmarelo.css';
import { Link } from 'react-router-dom';
import { MdDone} from "react-icons/md";

export class ListaPlanos extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <section className="planos" id="planos">
                {this.props.children}
            </section>
        )
    }
}

export default ListaPlanos

import React, { Component } from 'react'
import '../commons/Apresentacao.css';
import '../commons/BotaoAmarelo.css';
import imagem1 from '../images/designer.svg';

export class Apresentacao extends Component {
    render() {
        return (
            <section className="apresentacao" id="apresentacao">
                <div className="texto1">
                    <h2>Gerencie seus projetos e seus clientes em um só lugar</h2>
                    <p>Somos uma ferramenta de gestão desenvolvida exclusivamente para designers freelancers. Com a JoUp você pode gerenciar, agilizar e refinar seu fluxo de projeto e clientes. Gerenciamento de clientes e projetos em um só lugar.</p>
                    <button className="botaoAmarelo">Experimente como funciona</button>
                </div>
                <div className="imagem1">
                    <img src={imagem1}/>
                </div>
            </section>
        )
    }
}

export default Apresentacao

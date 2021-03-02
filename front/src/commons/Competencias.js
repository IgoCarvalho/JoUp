import React, { Component } from 'react';
import '../commons/Competencias.css';

export class Competencias extends Component {
    render() {
        return (
            <section className="competencias" id="competencias">
                <div className="video">
                    <iframe width="400px" height="220px" src="https://www.youtube.com/embed/9ZdNnQPhW-g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="texto2">
                    <h2>Praticidade, autonomia e transparência nos processos</h2>
                    <p>O gerenciamento de projetos não precisa ser difícil. JoUp é uma ferramenta para automarizar e facilitar a gestão do trabalho, com preços acessíveis e que permitem o acompanhamento dos projetos a partir da perspectiva dos seus clientes. Uma gestão eficiente começa aqui!</p>
                </div>
            </section>
        )
    }
}

export default Competencias

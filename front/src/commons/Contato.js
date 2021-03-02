import React, { Component } from 'react';
import '../commons/Contato.css';
import '../commons/BotaoRoxo.css';

export class Contato extends Component {
    render() {
        return (
            <section className="contato" id="contato">
                <div className="texto4">
                    <h2>Entre em contato conosco</h2>
                    <p>Qualquer dúvida estamos por aqui!</p>
                </div>
                <div className="form">
                    <form>
                        <div className="Flinha1">
                            <input type="text" placeholder="Seu Nome"/>
                            <input type="text" placeholder="Seu Telefone"/>
                        </div>
                        <div className="Flinha2"></div>
                        <input type="text" placeholder="Seu E-mail"/>
                        <div className="Flinha3">
                        <textarea placeholder="Sua mensagem"/>
                        </div>
                        <div className="Flinha4">
                        <button className="bRoxo">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contato

import React, { Component } from 'react';
import Nav from './Nav';
import '../commons/BotaoRoxo.css';
import Apresentacao from '../commons/Apresentacao';
import Competencias from '../commons/Competencias';
import Funcionalidades from '../commons/Funcionalidades';
import Planos from '../commons/Planos';
import Contato from '../commons/Contato';
import Rodape from '../commons/Rodape';

export class Home extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Apresentacao/>
                <Competencias/>
                <Funcionalidades/>
                <Planos/>
                <Contato/>
                <Rodape/>
            </div>
        )
    }
}

export default Home

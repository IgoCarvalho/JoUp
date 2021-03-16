import React, { Component } from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import OpcoesCadastro from '../commons/OpcoesCadastro';
import Cadastro from './Cadastro';
import CadastroPage2 from './CadastroPage2';
import CadastroPage3 from './CadastroPage3';
import Home from './Home';
import Login from './Login';
import Projetos from './Projetos';
import ServicoAberto from './ServicoAberto';
import Servicos from './Servicos';
import ProjFinalizado from '../components/ProjFinalizado'
import DetalhamentoProj from './DetalhamentoProj';
import AdicionarProjeto from './AdicionarProjeto';
import ModalAddServico from '../commons/ModalAddServico';
import AdicionarServico from './AdicionarServico';

export class Rotas extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/cadastro" component={Cadastro}></Route>
                    <Route exact path="/opcoescadastro" component={CadastroPage2}></Route>
                    <Route exact path="/contratarplano" component={CadastroPage3}></Route>
                    <Route exact path="/servicos" component={Servicos}></Route>
                    <Route exact path="/detalheservico" component={ServicoAberto}></Route>
                    <Route exact path="/projetos" component={Projetos}></Route>
                    <Route exact path="/projetosfinalizados" component={ProjFinalizado}></Route>
                    <Route exact path="/detalheprojeto" component={DetalhamentoProj}></Route>
                    <Route exact path="/adicionarprojeto" component={AdicionarProjeto}></Route>
                    <Route exact path="/adicionarservico" component={AdicionarServico}></Route>
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Rotas;

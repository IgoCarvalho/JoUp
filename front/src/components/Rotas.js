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
import AdicionarServico from './AdicionarServico';
import VisaoGeral from './VisaoGeral';
import RedefinirSenha from './RedefinirSenha';
import RedefinirSenhaPage2 from './RedefinirSenhaPage2';
import MeuPerfil from './MeuPerfil';
import MinhaConta from './MinhaConta';
import Solicitacoes from './Solicitacoes';
import DetalheSolicitacao from './DetalheSolicitacao';
import PagamentoPlano from './PagamentoPlano';

import CustomRoute from './CustomRoute';
import SolicitacoesPendentes from './SolicitacoesPendentes';
import CriarSolicitacao from './CriarSolicitacao';
import EmDesenvolvimento from '../commons/EmDesenvolvimento';
 
export class Rotas extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                    <CustomRoute exact path="/" component={Home}></CustomRoute>
                    <CustomRoute exact path="/login" component={Login}></CustomRoute>
                    <CustomRoute exact path="/cadastro" component={Cadastro}></CustomRoute>
                    <CustomRoute privated exact path="/opcoescadastro" component={CadastroPage2}></CustomRoute>
                    <CustomRoute privated exact path="/contratarplano" component={CadastroPage3}></CustomRoute>
                    <CustomRoute privated exact path="/dadospagamento" component={PagamentoPlano}></CustomRoute>
                    <CustomRoute privated exact path="/servicos" component={Servicos}></CustomRoute>
                    <CustomRoute privated exact path="/detalheservico/:id" component={ServicoAberto}></CustomRoute>
                    <CustomRoute privated exact path="/projetos" component={Projetos}></CustomRoute>
                    <CustomRoute privated exact path="/projetosfinalizados" component={ProjFinalizado}></CustomRoute>
                    <CustomRoute privated exact path="/detalheprojeto/:id" component={DetalhamentoProj}></CustomRoute>
                    <CustomRoute privated exact path="/adicionarprojeto" component={AdicionarProjeto}></CustomRoute>
                    <CustomRoute privated exact path="/editarprojeto/:id" component={AdicionarProjeto}></CustomRoute>
                    <CustomRoute privated exact path="/adicionarservico" component={AdicionarServico}></CustomRoute>
                    <CustomRoute privated exact path="/editarservico/:id" component={AdicionarServico}></CustomRoute>
                    <CustomRoute privated exact path="/visaogeral" component={VisaoGeral}></CustomRoute>
                    <CustomRoute exact path="/redefinirsenha" component={RedefinirSenha}></CustomRoute>
                    <CustomRoute exact path="/codredefinirsenha" component={RedefinirSenhaPage2}></CustomRoute>
                    <CustomRoute privated exact path="/perfil" component={MeuPerfil}></CustomRoute>
                    <CustomRoute privated exact path="/conta" component={MinhaConta}></CustomRoute>
                    <CustomRoute privated exact path="/solicitacoes" component={Solicitacoes}></CustomRoute>
                    <CustomRoute privated exact path="/solicitacoespendentes" component={SolicitacoesPendentes}></CustomRoute>
                    <CustomRoute privated exact path="/detalhesolicitacao/:id" component={DetalheSolicitacao}></CustomRoute>
                    <CustomRoute privated exact path="/criarsolicitacao" component={CriarSolicitacao}></CustomRoute>
                    <CustomRoute privated exact path="/editarPerfil" component={EmDesenvolvimento}></CustomRoute>
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Rotas;

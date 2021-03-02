import React, { Component } from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Cadastro from './Cadastro';
import Home from './Home';
import Login from './Login';
import Servicos from './Servicos';

export class Rotas extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/cadastro" component={Cadastro}></Route>
                    <Route exact path="/servicos" component={Servicos}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Rotas

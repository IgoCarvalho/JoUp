import React, { Component } from 'react'
import { BrowserRouter , Route} from 'react-router-dom';
import Apresentacao from '../components/Apresentacao';
import Login from '../components/Login';
import Servicos from '../components/Servicos';

export class Rotas extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/">
                         <Apresentacao/>
                    </Route>
                    <Route exact path="/login">
                         <Login/>
                    </Route>
                    <Route exact path="/servicos">
                         <Servicos/>
                    </Route>
                </BrowserRouter>
            </div>
        )
    }
}

export default Rotas

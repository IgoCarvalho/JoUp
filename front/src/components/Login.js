import React, { Component } from 'react'
import ContaDeUsuario from '../commons/ContaDeUsuario'
import DesignerCotainer from '../commons/DesignerCotainer'
import '../components/Login.css';

export class Login extends Component {
    render() {
        return (
            <div className="Login">
                <ContaDeUsuario/>
                <DesignerCotainer/>
            </div>
        )
    }
}

export default Login

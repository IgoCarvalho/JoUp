import React, { Component } from 'react';
import logo from "../images/logo.svg";
import woman from "../images/womanLogin.png";
import { FcGoogle } from "react-icons/fc";
import '../components/Login.css';

export class Login extends Component {
    render() {
        return (
            <div className="containerLogin">
                <section className="formLogin">
                <img src={logo} alt="logo" className="logo"/>
                <h2>Entrar como designer</h2>
                <form>
                    <input type="text" placeholder="Nome de usuário ou E-mail"/>
                    <input type="text" placeholder="Senha"/>
                    <label>Esqueceu a senha? <a href="">Redefinir</a></label>
                </form>
                <button>Entrar</button>
                <fieldset><legend>ou</legend></fieldset>
                <button className="google"><i><FcGoogle/></i>Continuar com o Google</button>
                <label>Não é nosso cliente ainda? <a href="">Criar conta</a></label>
                </section>
                <section className="background">
                <img src={woman}/>
                </section>
            </div>
        )
    }
}

export default Login

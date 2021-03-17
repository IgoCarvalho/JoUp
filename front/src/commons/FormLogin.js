import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../commons/BotaoRoxo.css';
import '../commons/FormLogin.css';
import { FcGoogle } from "react-icons/fc";
import { MdVisibilityOff } from "react-icons/md";

export class FormLogin extends Component {
    render() {
        return (
            <div className="FormLogin">
                <form>
                    <input type="text" placeholder="Nome ou e-mail"/>
                    <div className="senha">
                    <input type="password" placeholder="Digite sua senha"/><button><MdVisibilityOff/></button>
                    </div>
                    <label>Esqueceu a sua senha? <Link to="redefinirsenha">Redefinir</Link></label>
                    <br/>
                    <button className="bRoxoRedondo"><Link to="visaogeral">Entrar</Link></button>
                    <fieldset>
                    <legend>ou</legend>
                    <button className="bRoxoRedondo"><i><FcGoogle/></i> Entrar com o Google</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default FormLogin

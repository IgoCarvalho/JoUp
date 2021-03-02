import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../commons/FormCadastro.css';
import { MdVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export class FormCadastro extends Component {
    render() {
        return (
            <div className="FormCadastro">
                <form>
                    <input type="text" placeholder="Nome de usuário"/>
                    <input type="text" placeholder="E-mail"/>
                    <div className="senha">
                    <input type="password" placeholder="Digite sua senha"/><button><MdVisibilityOff/></button>
                    </div>
                    <div className="senha">
                    <input type="password" placeholder="Digite novamente sua senha"/><button><MdVisibilityOff/></button>
                    </div>
                    <br/>
                    <button className="bRoxoRedondo">Confirmar</button>
                    <fieldset>
                    <legend>ou</legend>
                    <button className="bRoxoRedondo"><i><FcGoogle/></i>Cadastre-se com o Google</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default FormCadastro

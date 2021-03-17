import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../commons/FormCadastro.css';

export class FormSenha extends Component {
    render() {
        return (
            <div className="FormCadastro">
                <form> 
                <br/>
                    <input type="text" placeholder="Digite seu e-mail"/>
                    <br/>
                    <button className="bRoxoRedondo"><Link to="codredefinirsenha">Próximo</Link></button>
                </form>
            </div>
        )
    }
}

export default FormSenha

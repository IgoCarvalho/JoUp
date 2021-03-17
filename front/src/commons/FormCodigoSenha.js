import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../commons/FormCadastro.css';

export class FormCodigoSenha extends Component {
    render() {
        return (
            <div className="FormCadastro">
                <form> 
                <br/>
                    <input type="text" placeholder="Digite seu código"/>
                    <label>Não recebeu o código? <Link to="/">Reenviar código</Link></label>
                    <br/> 
                    <button className="bRoxoRedondo"><Link to="opcoescadastro">Próximo</Link></button>
                </form>
            </div>
        )
    }
}

export default FormCodigoSenha

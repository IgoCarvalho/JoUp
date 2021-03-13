import React, { Component } from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import '../commons/Busca.css';

export class Busca extends Component {
    render() {
        return (
            <div className="Busca">
                <form>
                    <input type="text" placeholder="Buscar"/><button><i><AiOutlineSearch/></i></button>
                </form>
            </div>
        )
    }
}

export default Busca

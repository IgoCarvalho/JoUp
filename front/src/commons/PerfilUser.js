import React, { Component } from 'react';
import '../commons/PerfilUser.css';
import {AiOutlineUser,AiOutlineBell} from "react-icons/ai";


export class PerfilUser extends Component {
    render() {
        return (
            <div className="PerfilUser">
                <button className="notificacao"><AiOutlineBell/></button>
                <div className="dropdownPerfil">
                    <button className="avatar"><AiOutlineUser/></button>
                    <div className="dropdownPerfilContent">
                        <span>Meu Perfil</span>
                        <span>Minha conta</span>
                        <span>Configurações</span>
                        <span>Sair</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PerfilUser

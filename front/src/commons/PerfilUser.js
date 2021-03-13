import React, { Component } from 'react';
import '../commons/PerfilUser.css';
import {AiOutlineUser,AiOutlineBell} from "react-icons/ai";


export class PerfilUser extends Component {
    render() {
        return (
            <div className="PerfilUser">
                <button className="notificacao"><AiOutlineBell/></button>
                <button className="avatar"><AiOutlineUser/></button>
            </div>
        )
    }
}

export default PerfilUser

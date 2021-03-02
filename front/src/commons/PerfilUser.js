import React, { Component } from 'react';
import '../commons/PerfilUser.css';
import {AiOutlineUser} from "react-icons/ai";

export class PerfilUser extends Component {
    render() {
        return (
            <div className="PerfilUser">
                <button><AiOutlineUser/></button>
            </div>
        )
    }
}

export default PerfilUser

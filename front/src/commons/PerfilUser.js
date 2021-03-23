import React, { Component } from 'react';
import '../commons/PerfilUser.css';
import {AiOutlineUser,AiOutlineBell} from "react-icons/ai";
import { connect } from 'react-redux';
import {MdNotificationsNone} from "react-icons/md";

import { logoutAction } from '../store/actions/userActions';
import { Link, withRouter } from 'react-router-dom';

export class PerfilUser extends Component {
    handleLogout = () => {
        const { logoutAction: logout, history } = this.props;

        logout()
            .then(() => {
                console.log('saiu do app');
                history.push('/')
            })
    }
    
    render() {
        return (
            <div className="PerfilUser">
                <button className="notificacao"><MdNotificationsNone/></button>
                <div className="dropdownPerfil">
                    <img className="avatar" src={this.props.user.avatar_url} alt="user"></img>
                    <div className="dropdownPerfilContent">
                        <span><Link to ="/perfil">Meu Perfil</Link></span>
                        <span><Link to ="/conta">Minha conta</Link></span>
                        <span>Configurações</span>
                        <span onClick={this.handleLogout} >Sair</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToPros = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = { logoutAction };

export default withRouter(connect(mapStateToPros, mapDispatchToProps)(PerfilUser));

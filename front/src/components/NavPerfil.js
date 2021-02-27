import React, { Component } from 'react';
import logo from "../images/logo.svg";
import '../components/NavPerfil.css';
import {BiMenu, BiBell,BiSearch, BiUser, BiShow, BiTime, BiCalendar} from "react-icons/bi";
import {FaRegClipboard} from "react-icons/fa";
import {AiOutlineUserAdd} from "react-icons/ai";
import {FiUsers} from "react-icons/fi";
import {MdComputer} from "react-icons/md";

export class NavPerfil extends Component { 
    render() {
        return (
            <div>
                <nav className="mainNavPerfil">
                <div className="sectionLogo">
                <i className="burgerMenu"><BiMenu /></i>
                <img src={logo} className="logoNav" alt="logo"/>
                </div>
                <div className="busca">
                <form>
                    <input type="text" placeholder="Buscar projeto ..." />
                    <button><BiSearch /></button>
                </form>
                </div>
                <div className="perfilUser">
                <BiBell />
                    <div className="perfilLogado">
                        <button><BiUser /></button>
                    </div>
                </div>
                </nav>
            </div>
        )
    }
}

export default NavPerfil;

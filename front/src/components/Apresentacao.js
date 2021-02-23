import React, { Component } from 'react'
import { BiMenu, BiBell, BiSearch, BiUser, BiShow, BiTime, BiCalendar } from "react-icons/bi";
import { FaRegClipboard } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import logo from "../images/logo.svg";
import Navegador from './Navegador';
import ContainerApresentacao from './ContainerApresentacao';
import '../components/Apresentacao.css'

export class Apresentacao extends Component {
    render() {
        return (
            <div className="MainApresentacao">
                <Navegador/>
                <ContainerApresentacao/>
            </div>
        )
    }
}

export default Apresentacao;

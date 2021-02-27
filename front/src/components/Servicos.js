import React, { Component } from 'react'
import NavPerfil from './NavPerfil'
import PerfilSubMenu from './PerfilSubMenu'
import { GrAddCircle} from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import { MdAdd} from "react-icons/md";
import '../components/Servicos.css';

export class Servicos extends Component {
    render() {
        return (
            <div className="MainServicos">
                <NavPerfil/>
                <div className="Submenu"><PerfilSubMenu/></div>
                <div className="ContainerServicos">
                    <div className="topContainer">
                        <h2>Serviços ofertados</h2>
                        <button><a href=""><i><MdAdd/></i>Adicionar serviço</a></button>
                        <hr/>
                    </div>
                    <div className="mainContainer">
                        <ul className="listaServicos">
                            <li>
                                <h3>Título Serviço</h3>
                                <label>Design</label><label>UX</label><label>IHC</label>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <label>Design</label><label>UX</label><label>IHC</label>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <label>Design</label><label>UX</label><label>IHC</label>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <label>Design</label><label>UX</label><label>IHC</label>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <label>Design</label><label>UX</label><label>IHC</label>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <label>Design</label><label>UX</label><label>IHC</label>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <label>Design</label><label>UX</label><label>IHC</label>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <label>Design</label><label>UX</label><label>IHC</label>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <label>Design</label><label>UX</label><label>IHC</label>
                            </li>
                            <li>
                                <h3>Título Serviço</h3>
                                <label>Design</label><label>UX</label><label>IHC</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Servicos

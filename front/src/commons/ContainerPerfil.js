import React, { Component } from 'react';
import '../commons/BotaoRoxo.css';
import { AiOutlineCalendar,AiOutlinePlus } from "react-icons/ai";
import { BsCheckBox } from "react-icons/bs";
import { FaPlus, FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import '../commons/ContainerPerfil.css';
import PerfilUser from '../commons/PerfilUser';
import { connect } from 'react-redux';

export class ContainerPerfil extends Component {
    render() {
        return (
            <div className="ContainerPerfil">
                <div className="topSessao">
                <h2>Meu perfil</h2>
                    <button className="bRoxoRedondo"><Link to=""><i><FiEdit/></i>Editar perfil</Link></button> 
                </div>
                <section className="ContainerPerfilMain">

                <div className="dadosPrincipais">
                    <div className="sectionAvatar">
                        <div className="avatarIMG">
                             <img src={this.props.user.avatar_url} alt="img"/>
                        </div>
                        <div className="infoUser">
                            <h3>{this.props.user.name}</h3>
                            <legend>UX/UI Designer</legend>
                            <label>Quixadá, Ceará - Brasil</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>


                    <div className="sectionLinkedin">
                    <h3>Linkedin</h3>
                    <p>Aqui vai oq for possível apresentar das experiencia do LinkedIn</p>
                    </div>

                    <div className="sectionBehance">
                    <h3>Behance</h3>
                    <p>Aqui vai oq for possível apresentar dos projetos do Behance</p>
                    </div>

                </div>
                <div className="dadosAdicionais">
                    <div className="sectionServicos">
                    <h3>Serviços</h3>
                    <label>Design gráfico<br/>Web design<br/>UX/UI design<br/>Marketing<br/>Design de produto</label>
                    </div>

                    <div className="sectionHabilidades">
                    <h3>Habilidades Técnicas</h3>
                    <label>Design Visual<br/>Arquitetura da informação<br/>UX/UI design<br/>Design de Interação</label>
                    <br/><br/>

                    <h3>Habilidades Pessoais</h3>
                    <label>Comunicação<br/>Colaboração<br/>Empatia<br/>Flexibilidade</label>
                    <br/><br/>

                    <h3>Educação</h3>
                    <label><strong>Design Digital</strong></label><br/>
                    <label>Universidade Federal do Ceará</label><br/>
                    <label className="cinza">2015 - 2019</label>
                    <br/><br/>

                    <label><strong>Ensino Médio</strong></label><br/>
                    <label>E.E.M. Manoel Marinho de Sousa</label><br/>
                    <label className="cinza">2012 - 2014</label>
                    <br/><br/>

                    <h3>Idiomas</h3>
                    <table className="idiomas">
                        <tr className="linhaIdioma">
                            <td className="textLang">Português</td>
                            <td className="LangCheck">
                            <input type="checkbox" checked/>
                            <input type="checkbox" checked/>
                            <input type="checkbox" checked/>
                            <input type="checkbox" checked/>
                            <input type="checkbox" checked/>
                            </td>
                        </tr>
                        <tr className="linhaIdioma">
                            <td className="textLang">Inglês</td>
                            <td className="LangCheck">
                            <input type="checkbox" checked/>
                            <input type="checkbox" checked/>
                            <input type="checkbox" checked/>
                            <input type="checkbox" />
                            <input type="checkbox" />
                            </td>
                        </tr>
                        <tr className="linhaIdioma">
                            <td className="textLang">Espanhol</td>
                            <td className="LangCheck">
                            <input type="checkbox" checked/>
                            <input type="checkbox" checked/>
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            
                            </td>
                        </tr>
                        <tr className="linhaIdioma">
                            <td className="textLang">Japonês</td>
                            <td className="LangCheck">
                            <input type="checkbox" checked/>
                            <input type="checkbox" checked/>
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            </td>
                        </tr>
                    </table>
                    </div>
                </div>
                </section>



            </div>
        )
    }
}

const mapStateToPros = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToPros)(ContainerPerfil);

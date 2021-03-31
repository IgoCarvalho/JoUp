import React, { Component } from 'react';
import '../commons/BotaoRoxo.css';
import { AiOutlineCalendar,AiOutlinePlus } from "react-icons/ai";
import { BsCheckBox } from "react-icons/bs";
import { MdAutorenew, MdDelete } from "react-icons/md";
import { FaPlus, FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import '../commons/ContainerPerfil.css';
import PerfilUser from '../commons/PerfilUser';
import { connect } from 'react-redux';

import { fetchSocialMediaData } from '../store/actions/userActions';
import Moment from 'react-moment';

export class ContainerPerfil extends Component {

    state = {
        linkedin: '',
        behance: '',
        submitting: false,
        submittingInput: ''
    }

    componentDidMount() {
        if(!this.props.user.socialMediaData) return;

        const linkedin = this.props.user.socialMediaData.linkedin ? this.props.user.socialMediaData.linkedin.username : '';
        const behance = this.props.user.socialMediaData.behance ? this.props.user.socialMediaData.behance.username : '';

        this.setState({
            linkedin,
            behance,
        })
        
    }

    handleInputs = (e) => {
        const { name, value } = e.target

        this.setState({[name]: value})
    }

    handleSubmit = (socialMedia) => () => {
        const { fetchSocialMediaData: getSocialMediaData } = this.props;
        const username = this.state[socialMedia];

        this.setState({ submitting: true, submittingInput: socialMedia })

        getSocialMediaData({username, socialMedia})
            .then(res=>{
                console.log('social familia');
                this.setState({submitting: false, submittingInput: ''})
            })

    }
    
    render() {
        return (
            <div className={`ContainerPerfil ${this.props.menu && 'open'}`}>
                <div className="topSessao">
                <h2>Meu perfil</h2>
                    <button className="bRoxoRedondo"><Link to="/editarPerfil"><i><FiEdit/></i>Editar perfil</Link></button> 
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
                        <div className="socialmedia-header">
                            <h3>Linkedin</h3>
                            {this.props.user.socialMediaData?.linkedin && <div className="socialmedia-input">
                                <input name="linkedin" value={this.state.linkedin} onChange={this.handleInputs} />
                                <button 
                                    onClick={this.handleSubmit('linkedin')}
                                    disabled={this.state.submitting}
                                >
                                    OK
                                    {this.state.submittingInput == 'linkedin' && <MdAutorenew className="load-icon" />}
                                </button>
                            </div>}

                        </div>
                        <div >
                            {
                                this.props.user.plan.socialMediaLink ? (
                                    <div className="socialmedia-content">
                                        { this.props.user.socialMediaData?.linkedin? (
                                            <div className="linkedin-container">
                                                {
                                                    this.props.user.socialMediaData?.linkedin.data.map((i, index)=>(
                                                        <div key={index} className="linkedin-post">
                                                            <p><strong>{i.title}</strong></p>
                                                            <p>{i.company} - {i.employmentType}</p>
                                                            <span>
                                                                {i.startDate === 'Invalid date' ? '' : <Moment format="MMM" locale="pt-br">{i.startDate}</Moment>}
                                                                {' '}de{' '}
                                                                {i.startDate === 'Invalid date' ? '' : <Moment format="Y" locale="pt-br">{i.startDate}</Moment>}
                                                                {' - '}
                                                                {i.endDate === 'Invalid date' ? '' : <Moment format="MMM" locale="pt-br">{i.endDate}</Moment>}
                                                                {' '}de{' '}
                                                                {i.endDate === 'Invalid date' ? '' : <Moment format="Y" locale="pt-br">{i.endDate}</Moment>}
                                                            </span>

                                                            <span>{i.location?.city}, {i.location?.province} - {i.location?.country}</span>

                                                            <p>{i.description}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ) : (
                                            <div className="no-linkedin-data">
                                                <p>Vincule suas experiências de trabalho a partir de seu perfil do LinkedIn!</p>

                                                <div className="socialmedia-input">
                                                    <span>linkedin.com/in/ </span>
                                                    <input name="linkedin" value={this.state.linkedin} onChange={this.handleInputs} placeholder="Nome de usuário" />
                                                    <button 
                                                        onClick={this.handleSubmit('linkedin')}
                                                        disabled={this.state.submitting}
                                                    >
                                                        OK
                                                        {this.state.submittingInput == 'linkedin' && <MdAutorenew className="load-icon" />}
                                                    </button>
                                                </div>
                                                
                                            </div>
                                        ) }
                                    </div>
                                ) : 
                                (
                                    <p className="no-premium">Você não tem acesso a essa funcionalidade, para liberala adiquira o plano Premium!</p>
                                )
                            }
                        </div>
                    </div>

                    <div className="sectionBehance">
                        <div className="socialmedia-header">
                            <h3>Behance</h3>
                            {this.props.user.socialMediaData?.behance && <div className="socialmedia-input">
                                <input name="behance" value={this.state.behance} onChange={this.handleInputs} />
                                <button 
                                    onClick={this.handleSubmit('behance')}
                                    disabled={this.state.submitting}
                                >
                                    OK
                                    {this.state.submittingInput == 'behance' && <MdAutorenew className="load-icon" />}
                                </button>
                            </div>}

                        </div>
                        <div >
                            {
                                this.props.user.plan.socialMediaLink ? (
                                    <div className="socialmedia-content">
                                        { this.props.user.socialMediaData?.behance? (
                                            <div className="behance-container">
                                                {
                                                    this.props.user.socialMediaData?.behance.data.posts.map((post) => (
                                                        
                                                        <div key={post.link} className="behance-post">
                                                            <img src={post.cover} alt={post.title} />
                                                            <div className="behance-link">
                                                                <a href={post.link}>{post.title}</a>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ) : (
                                            <div className="no-behance-data">
                                                <p>Vincule seus projetos a partir de seu perfil do Behance!</p>

                                                <div className="socialmedia-input">
                                                    <span>behance.net/ </span>
                                                    <input name="behance" value={this.state.behance} onChange={this.handleInputs} placeholder="Nome de usuário" />
                                                    <button 
                                                        onClick={this.handleSubmit('behance')}
                                                        disabled={this.state.submitting}
                                                    >
                                                        OK
                                                        {this.state.submittingInput == 'behance' && <MdAutorenew className="load-icon" />}
                                                    </button>
                                                </div>
                                                
                                            </div>
                                        ) }
                                    </div>
                                ) : 
                                (
                                    <p className="no-premium">Você não tem acesso a essa funcionalidade, para liberala adiquira o plano Premium!</p>
                                )
                            }
                        </div>
                    </div>

                    {/* <div className="sectionBehance">
                    <h3>Behance</h3>
                    <p>Aqui vai oq for possível apresentar dos projetos do Behance</p>
                    </div> */}

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
                            <input type="radio" disabled checked/>
                            <input type="radio" disabled checked/>
                            <input type="radio" disabled checked/>
                            <input type="radio" disabled checked/>
                            <input type="radio" disabled checked/>
                            </td>
                        </tr>
                        <tr className="linhaIdioma">
                            <td className="textLang">Inglês</td>
                            <td className="LangCheck">
                            <input type="radio" disabled checked/>
                            <input type="radio" disabled checked/>
                            <input type="radio" disabled checked/>
                            <input type="radio" disabled />
                            <input type="radio" disabled />
                            </td>
                        </tr>
                        <tr className="linhaIdioma">
                            <td className="textLang">Espanhol</td>
                            <td className="LangCheck">
                            <input type="radio" disabled checked/>
                            <input type="radio" disabled checked/>
                            <input type="radio" disabled />
                            <input type="radio" disabled />
                            <input type="radio" disabled />
                            
                            </td>
                        </tr>
                        <tr className="linhaIdioma">
                            <td className="textLang">Japonês</td>
                            <td className="LangCheck">
                            <input type="radio" disabled checked/>
                            <input type="radio" disabled checked/>
                            <input type="radio" disabled />
                            <input type="radio" disabled />
                            <input type="radio" disabled />
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

const mapDispatchToProps = { fetchSocialMediaData }
export default connect(mapStateToPros, mapDispatchToProps)(ContainerPerfil);

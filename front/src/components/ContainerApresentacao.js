import React, { Component } from 'react';
import '../components/ContainerApresentacao.css';
import {AiOutlineUserAdd,AiOutlineCheck} from "react-icons/ai";
import logo from "../images/logoF.svg";
import { BiX } from "react-icons/bi";
import womanHome from '../images/womanHome.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import acompanhamento from '../images/acompanhamento.svg';
import triagem from '../images/triagem.svg';
import gerencia from '../images/gerencia.svg';
import autonomia from '../images/autonomia.svg';

export class ContainerApresentacao extends Component {
    render() {
        return (
            <div className="bodyContainer" id="sobre">
                {/* <section className="apresentacao1">
                    <div className="descricao"
                    >
                        <h2>Gerencie seus projetos e seus clientes em um só lugar</h2>
                        <p>Somos uma ferramenta de gestão desenvolvida exclusivamente para designers freelancers. Com a JoUp você pode gerenciar, agilizar e refinar seu fluxo de projeto e clientes. Gerenciamento de clientes e projetos em um só lugar.</p>
                        <button>Experimente como funciona</button>
                    </div>
                    <div className="ilutracao">
                        <img src={womanHome}/>
                    </div>
                </section>

                <section className="apresentacao2">
                    <div className="ilutracao">
                    <iframe width="500" height="280" src="https://www.youtube.com/embed/9ZdNnQPhW-g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="descricao"
                    >
                        <h2>Praticidade, autonomia e <br/>transparência nos processos</h2>
                        <p>O gerenciamento de projetos não precisa ser difícil. JoUp é uma <br/>ferramenta para automarizar e facilitar a gestão do trabalho, com preços acessíveis e que permitem o acompanhamento dos projetos a partir da perspectiva dos seus clientes. Uma gestão eficiente começa aqui!</p>
                    </div>

                </section>

                <section className="apresentacao3" id="funcionalidades">
                    <h1>Proporcinamos uma experiência única para você e <br/> os seus cliente</h1>
                    <div className="funcionalidades">
                    <div className="descricao">
                        <img src={acompanhamento}/>
                        <h2>Acompanhamento</h2>
                        <p>Possibilite aos seus clientes fazer o acompanhamento do projeto de forma rápida e prática.</p>
                    </div>
                    <div className="descricao">
                        <img src={triagem}/>
                        <h2>Triagem de clientes</h2>
                        <p>Gerencie seus projetos e clientes ganhando tempo e praticidade na <br/> etapa de análise de documentos e contratação de serviços.</p>
                    </div>
                    <div className="descricao">
                    <img src={gerencia}/>
                        <h2>Fluxo de processos</h2>
                        <p>Automatize a sua gestão de projetos a fim de acelerar, facilitar e centralizar a comunicação entre você e seus clientes.</p>
                    </div>
                    <div className="descricao">
                    <img src={autonomia}/>
                        <h2>Autonomia</h2>
                        <p>Tenha autonomia para customizar os seus projetos de acordo com a <br/>sua individualidade profissional.</p>
                    </div>
                    </div>
                </section>

                <section className="apresentacao4" id="planos">
                    <div className="planos">
                    <div className="plano1"
                    >
                        <label>Plano Básico</label>
                        <h2>R$ 39,99</h2>
                        <strong><legend>Acompanhamento de até 3 projetos por mês</legend></strong>
                        <p><i className="ativado"><AiOutlineCheck/></i>Apresentações ilimitadas de serviços ofertados.</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Sessões ilimitadas de detalhamento do projeto.</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Checklist de fases de desenvolvimento.</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Link compartilhável de cada projeto.</p>
                        <p><i className="desativado"><AiOutlineCheck/></i>Agenda integrada com o Google. </p>
                        <p><i className="desativado"><AiOutlineCheck/></i>Vinculação de portfólio do Behance e currículo do LinkedIn no seu perfil profissional.</p>
                        <p><i className="desativado"><AiOutlineCheck/></i>Avaliação com os clientes.</p>
                        <button>Contratar esse plano</button><br/>
                        <a href="">Faça um teste gratis</a>
                    </div>
                    <div className="plano2"
                    >
                        <label>Plano Completo</label>
                        <h2>R$ 45,99</h2>
                        <strong><legend>Acompanhamento de até 10 projetos por mês</legend></strong>
                        <p><i className="ativado"><AiOutlineCheck/></i>Apresentações ilimitadas de serviços ofertados.</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Sessões ilimitadas de detalhamento do projeto.</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Checklist de fases de desenvolvimento.</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Link compartilhável de cada projeto.</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Agenda integrada com o Google. </p>
                        <p><i className="desativado"><AiOutlineCheck/></i>Vinculação de portfólio do Behance e currículo do LinkedIn no seu perfil profissional.</p>
                        <p><i className="desativado"><AiOutlineCheck/></i>Avaliação com os clientes.</p>
                        <button>Contratar esse plano</button><br/>
                        <a href="">Faça um teste gratis</a>
                    </div>
                    <div className="plano3"
                    >
                        <label>Plano Premium</label>
                        <h2>R$ 68,99</h2>
                        <strong><legend>Acompanhamento ilimitado de projetos por mês</legend></strong>
                        <p><i className="ativado"><AiOutlineCheck/></i>Apresentações ilimitadas de serviços ofertados.</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Sessões ilimitadas de detalhamento do projeto.</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Checklist de fases de desenvolvimento.</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Link compartilhável de cada projeto.</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Agenda integrada com o Google. </p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Vinculação de portfólio do Behance e currículo do LinkedIn no seu perfil profissional.</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Avaliação com os clientes.</p>
                        <button>Contratar esse plano</button><br/>
                        <a href="">Faça um teste gratis</a>
                    </div>
                    </div>
                </section>

                <section className="apresentacao5" id="contato">
                    <div className="descricao">
                        <h2>Entre em contato conosco</h2>
                        <p>Qualquer dúvida estamos por aqui!</p>
                    </div>
                    <div className="formContato">
                        <form><ul>
                            <li className="column1"><input type="text" placeholder="Nome"></input>
                            <input type="text" placeholder="Seu telefone"></input></li>
                            <li className="column2"><input type="text" placeholder="Seu E-mail"></input></li>
                            <li className="column3"><textarea placeholder="Sua mensagem"></textarea></li>
                            <li className="column4"><button>Enviar</button></li>
                            </ul>
                        </form>
                    </div>
                </section>
                <footer>
                    <img src={logo}/>
                    <p>© JoUp 2021 - Todos os direitos reservados | <a href="">Termos de Uso</a> | <a href="">Política de Privacidade</a></p>
                    <i><FaFacebook/></i>
                    <i><FaInstagram/></i>
                    <i><FaTwitter/></i>
                    <i><FaWhatsapp/></i>
                    <i><FaLinkedin/></i>
                </footer> */}
                <section className="apresentacao">
                <div className="texto1">
                <h2>Gerencie seus projetos e seus clientes em um só lugar</h2>
                <p>Somos uma ferramenta de gestão desenvolvida exclusivamente para designers freelancers. Com a JoUp você pode gerenciar, agilizar e refinar seu fluxo de projeto e clientes. Gerenciamento de clientes e projetos em um só lugar.</p>
                <button className="BotaoAmarelo">Experimente como funciona</button>
                </div>
                <div className="imagem">
                <img src={womanHome}/>
                </div>
                </section>
                <section className="competencias">
                    <div className="video">
                        <iframe width="450" height="250" src="https://www.youtube.com/embed/9ZdNnQPhW-g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="texto2">
                        <h2>Praticidade, autonomia e transparência nos processos</h2>
                        <p>O gerenciamento de projetos não precisa ser difícil. JoUp é uma ferramenta para automarizar e facilitar a gestão do trabalho, com preços acessíveis e que permitem o acompanhamento dos projetos a partir da perspectiva dos seus clientes. Uma gestão eficiente começa aqui!</p>
                    </div>
                </section>
                <section className="funcionalidades" id="funcionalidades">
                    <h2>Proporcinamos uma experiência única para você e <br/> os seus cliente</h2>
                    <div className="texto3">
                        <div>
                            <img src={acompanhamento}/>
                            <h3>Acompanhamento</h3>
                            <p>Possibilite aos seus clientes fazer o acompanhamento do projeto de forma rápida e prática.</p>
                        </div>
                        <div>
                            <img src={triagem}/>
                            <h3>Triagem de clientes</h3>
                            <p>Gerencie seus projetos e clientes ganhando tempo e praticidade na <br/> etapa de análise de documentos e contratação de serviços.</p>
                        </div>
                        <div>
                            <img src={gerencia}/>
                            <h3>Fluxo de processos</h3>
                            <p>Automatize a sua gestão de projetos a fim de acelerar, facilitar e centralizar a comunicação entre você e seus clientes.</p>
                        </div>
                        <div>
                            <img src={autonomia}/>
                            <h3>Autonomia</h3>
                            <p>Tenha autonomia para customizar os seus projetos de acordo com a <br/>sua individualidade profissional.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ContainerApresentacao

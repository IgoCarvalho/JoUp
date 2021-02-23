import React, { Component } from 'react';
import '../components/ContainerApresentacao.css';
import {AiOutlineUserAdd,AiOutlineCheck} from "react-icons/ai";
import womanHome from '../images/womanHome.png';

export class ContainerApresentacao extends Component {
    render() {
        return (
            <div className="mainContainer" id="sobre">
                <section className="apresentacao1">
                    <div className="descricao"
                    >
                        <h2>Sodales ut eu seeypo integer vitae justo eget magna fermentum iaculis eu non diam</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Faucibus a pellentesque sit amet porttitor eget dolor. Eu nisl nunc mi ipsum faucibus vitae aliquet nec.</p>
                        <button>Experimente como funciona</button>
                    </div>
                    <div className="ilutracao">
                        <img src={womanHome}/>
                    </div>
                </section>

                <section className="apresentacao2">
                    <div className="ilutracao">
                        <h3>Vídeo</h3>
                    </div>
                    <div className="descricao"
                    >
                        <h2>Felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Faucibus a pellentesque sit amet porttitor eget dolor. Eu nisl nunc mi ipsum faucibus vitae aliquet nec.</p>
                    </div>

                </section>

                <section className="apresentacao3" id="funcionalidades">
                    <h1>Funcionalidades</h1>
                    <div className="funcionalidades">
                    <div className="descricao"
                    >
                        <h2>Funcionalidade 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Faucibus a pellentesque sit amet porttitor eget dolor. Eu nisl nunc mi ipsum faucibus vitae aliquet nec.</p>
                    </div>
                    <div className="descricao"
                    >
                        <h2>Funcionalidade 2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Faucibus a pellentesque sit amet porttitor eget dolor. Eu nisl nunc mi ipsum faucibus vitae aliquet nec.</p>
                    </div>
                    <div className="descricao"
                    >
                        <h2>Funcionalidade 3</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Faucibus a pellentesque sit amet porttitor eget dolor. Eu nisl nunc mi ipsum faucibus vitae aliquet nec.</p>
                    </div>
                    </div>
                </section>

                <section className="apresentacao4" id="planos">
                    <h1>Planos</h1>
                    <div className="planos">
                    <div className="plano1"
                    >
                        <label>Básico</label>
                        <h2>R$ 39,99</h2>
                        <p><i className="ativado"><AiOutlineCheck/></i>Curabitur gravida arcu ac tortor dignissim convallis aenean</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Eget aliquet nibh praesent</p>
                        <p><i className="desativado"><AiOutlineCheck/></i>sagittis vitae et leo duis ut diam quam feugiat vivamus</p>
                        <p><i className="desativado"><AiOutlineCheck/></i>Curabitur gravida arcu ac tortor dignissim convallis aenean</p>
                        <p><i className="desativado"><AiOutlineCheck/></i>Eget aliquet nibh praesent </p>
                        <button>Contratar esse plano</button>
                        <a href="">Faça um teste gratis</a>
                    </div>
                    <div className="plano2"
                    >
                        <label>Completo</label>
                        <h2>R$ 45,99</h2>
                        <p><i className="ativado"><AiOutlineCheck/></i>Curabitur gravida arcu ac tortor dignissim convallis aenean</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Eget aliquet nibh praesent</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>sagittis vitae et leo duis ut diam quam feugiat vivamus</p>
                        <p><i className="desativado"><AiOutlineCheck/></i>Curabitur gravida arcu ac tortor dignissim convallis aenean</p>
                        <p><i className="desativado"><AiOutlineCheck/></i>Eget aliquet nibh praesent </p>
                        <button>Contratar esse plano</button>
                        <a href="">Faça um teste gratis</a>
                    </div>
                    <div className="plano3"
                    >
                        <label>Premium</label>
                        <h2>R$ 68,99</h2>
                        <p><i className="ativado"><AiOutlineCheck/></i>Curabitur gravida arcu ac tortor dignissim convallis aenean</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Eget aliquet nibh praesent</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>sagittis vitae et leo duis ut diam quam feugiat vivamus</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Curabitur gravida arcu ac tortor dignissim convallis aenean</p>
                        <p><i className="ativado"><AiOutlineCheck/></i>Eget aliquet nibh praesent </p>
                        <button>Contratar esse plano</button>
                        <a href="">Faça um teste gratis</a>
                    </div>
                    </div>
                </section>

                <section className="apresentacao5" id="contato">
                    <div className="descricao">
                        <h2>Entre em contato conosco</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Faucibus a pellentesque sit amet porttitor eget dolor. Eu nisl nunc mi ipsum faucibus vitae aliquet nec.</p>
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
            </div>
        )
    }
}

export default ContainerApresentacao

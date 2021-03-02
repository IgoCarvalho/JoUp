import React, { Component } from 'react';
import '../commons/Rodape.css';
import Logo from './Logo';
import RLogo from './RLogo';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin} from "react-icons/fa";

export class Rodape extends Component {
    render() {
        return (
            <footer className="rodape">
                <RLogo/>
                <p>© JoUp 2021 - Todos os direitos reservados |<a href="" target="_blank"> Termos de uso </a>|<a href="" target="_blank"> Política de Privacidade</a></p>
                <ul>
                    <li><a href="" target="_blank"><i><FaFacebook/></i></a></li>
                    <li><a href="" target="_blank"><i><FaInstagram/></i></a></li>
                    <li><a href="" target="_blank"><i><FaWhatsapp/></i></a></li>
                    <li><a href="" target="_blank"><i><FaTwitter/></i></a></li>
                    <li><a href="" target="_blank"><i><FaLinkedin/></i></a></li>
                </ul>
            </footer>
        )
    }
}

export default Rodape

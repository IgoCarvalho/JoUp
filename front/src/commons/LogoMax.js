import React, { Component } from 'react'
import logo from '../images/logo.svg';
import '../commons/Logo.css';

export class LogoMax extends Component {
    render() {
        return (
            <div className="containerLogoMax">
                 <a href="/"><img src={logo} className="logoMax"/></a>
            </div>
        )
    }
}

export default LogoMax

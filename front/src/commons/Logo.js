import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../commons/Logo.css';

export class Logo extends Component {
    render() {
        return (
            <div className="containerLogo">
                 <a href="/"><img src={logo} className="logo"/></a>
            </div>
        )
    }
}

export default Logo

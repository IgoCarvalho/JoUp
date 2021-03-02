import React, { Component } from 'react'
import logo from '../images/logoF.svg';
import '../commons/Logo.css';
import { Link } from 'react-router-dom';

export class RLogo extends Component {
    render() {
        return (
            <div className="containerLogo">
                 <Link><img src={logo} className="logo"/></Link>
            </div>
        )
    }
}

export default RLogo

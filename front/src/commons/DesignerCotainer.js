import React, { Component } from 'react';
import '../commons/DesignerCotainer.css';
import ilustracao from '../images/designerlogin.svg';

export class DesignerCotainer extends Component {
    render() {
        return (
            <div className="DesignerCotainer">
                <img src={ilustracao}/>
            </div>
        )
    }
}

export default DesignerCotainer

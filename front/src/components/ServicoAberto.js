import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AsideMenu from '../commons/AsideMenu';
import ContainerServico from '../commons/ContainerServico';
import DetalhesServico from '../commons/DetalhesServico';
import '../components/Servicos.css';
import NavPerfil from './NavPerfil';

import { fetchGetOneService } from '../store/actions/servicesActions';

export class ServicoAberto extends Component {
    state= {
        menu: false,
        service: {}
    };

    abreMenu=()=>{
        this.setState({menu:!this.state.menu});
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const { fetchGetOneService: getOneService } = this.props;

        getOneService(id)
            .then((response) => {
                console.log('foi familia__',response);
                this.setState({ service: response })
            })
    }
    
    render() {
        console.log(this.props.match.params);
        return (
            <div className="servicos">
                <NavPerfil abrirMenu={this.abreMenu}/>
                <AsideMenu page="servicos" menu={this.state.menu}/>
                <DetalhesServico service={this.state.service}/>
            </div>
        )
    }
}

const mapDispatchToProps = { fetchGetOneService };

export default withRouter(connect(undefined, mapDispatchToProps)(ServicoAberto))

import React, { Component } from 'react';
import '../commons/ContainerServico.css';
import { FaPlus } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import '../commons/BotaoRoxo.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NoServiceIMG from '../images/NoServiceIMG.svg'
import { FiMoreHorizontal } from "react-icons/fi";

import { fetchGetAllService } from '../store/actions/servicesActions'
import PageLoading from '../components/PageLoading';

export class ContainerServico extends Component { 
    state = {
        loading: true
    }
    
    componentDidMount() {
        const { fetchGetAllService: getAllService } = this.props;

        getAllService()
            .then(() => {
                console.log('pegou tudo');
            })
            .finally(() => {
                this.setState({loading: false})
            })
    }

    navigateToSolicitacao = (id) => (e) => {
        e.stopPropagation();

        const { history } = this.props;

        history.push('/criarsolicitacao', {id});
        
    }
    
    render() {

        if(this.state.loading) {
            return <PageLoading />
        }

        return (
            <div className={`ContainerServico ${this.props.menu && 'open'}`}>
                <div className="topSessao">
                    <h2>Serviços ofertados</h2>
                    <button className="bRoxoRedondo"><Link to="adicionarservico"><i><FaPlus/></i>Adicionar serviço</Link></button>
                </div>
                <div className="CardsContainer">
                    <ul className="listaServicos">
                            {/* <li onClick={this.handleCreateService}>
                                <h3>Criação de interface para sites e aplicativos</h3>
                                <div><label>Design</label><label>UX</label><label>IHC</label></div>
                                
                            </li> */}
                        {
                            this.props.services.length > 0 ?
                            this.props.services.map((service) => (
                                <li key={service._id}>
                                    <Link to={`detalheservico/${service._id}`}>

                                    <div className="topServico">
                                    <h3>{service.titulo}</h3>
                                    </div>
                                        <div className="labelsSection">
                                            {
                                                service.filtros.map(filtro => (<label key={filtro}>{filtro}</label>))
                                            }
                                            {/* <label>Design</label><label>UX</label><label>IHC</label> */}
                                        </div>
                                    </Link>
                                    <div className="dropdownServico">
                                        <button><i><FiMoreHorizontal/></i></button>
                                        <div className="dropdownServicoContent">
                                            <span onClick={(e) => {
                                                e.stopPropagation()

                                                console.log('alô');
                                            }}>Excluir</span>
                                            <span>Gerar PDF</span>
                                            <span>Copiar Link</span>
                                            <span onClick={this.navigateToSolicitacao(service._id)}>Solicitar</span>
                                        </div>
                                    </div>
                                </li>
                            )) : 
                            <div className="noservice">
                                <img src={NoServiceIMG} alt="sem serviços" />
                                <p>Você ainda não possui nenhum serviço criado.</p>
                            </div>
                        }
                            
                        </ul>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        services: state.services
    }
}

const mapDispatchToProps = { fetchGetAllService };


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContainerServico))

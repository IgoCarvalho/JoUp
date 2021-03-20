import React, { Component } from 'react';
import '../commons/ContainerServico.css';
import { FaPlus } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import '../commons/BotaoRoxo.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NoServiceIMG from '../images/NoServiceIMG.svg'

import { fetchCreateService, fetchGetAllService } from '../store/actions/servicesActions'

export class ContainerServico extends Component { 
    componentDidMount() {
        const { fetchGetAllService: getAllService } = this.props;

        getAllService()
            .then(() => {
                console.log('pegou tudo');
            })
    }
    
    render() {
        console.log(this.props);
        return (
            <div className="ContainerServico">
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
                                        <h3>{service.titulo}</h3>
                                        <div>
                                            {
                                                service.filtros.map(filtro => (<label key={filtro}>{filtro}</label>))
                                            }
                                            {/* <label>Design</label><label>UX</label><label>IHC</label> */}
                                        </div>
                                    </Link>
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

const mapDispatchToProps = { fetchCreateService, fetchGetAllService };


export default connect(mapStateToProps, mapDispatchToProps)(ContainerServico)

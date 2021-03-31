import React, { Component } from 'react';
import '../commons/ContainerProjeto.css';
import { FaCaretDown } from "react-icons/fa";
import '../commons/BotaoRoxo.css';
import { connect } from 'react-redux';
import { fetchGetAllProjetos } from '../store/actions/projetosActions';
import NoServiceIMG from '../images/NoServiceIMG.svg'

import ProjetoCard from './ProjetoCard';
import PageLoading from '../components/PageLoading';

export class ContainerProjeto extends Component {

    state = {
        loading: true
    }
    
    componentDidMount() {
        const { fetchGetAllProjetos: getAllProjetos } = this.props;

        getAllProjetos()
            .then(res => {
                console.log('pegou tudo tropinha');
            })
            .finally(() => {
                this.setState({loading: false})
            })
    }

    filterProjetos = () => {
        const { projetos, finalizado: pageFinalizado } = this.props;

        const result = projetos.filter((projeto) => {
            const numCompletos = projeto.fases_projeto.filter((fase) => fase.completo);

            const isFinalizado = numCompletos.length === projeto.fases_projeto.length;

            if(Boolean(pageFinalizado)) {
                return isFinalizado;
            }
            
            return !isFinalizado;
        })

        console.log(Boolean(pageFinalizado));

        return result;
    }

    render() {

        if(this.state.loading) {
            return <PageLoading />
        }
        
        const projetos = this.filterProjetos();

        return (
            <div className={`ContainerProjeto projeto ${this.props.menu && 'open'}`}>
                <div className="topSessao">
                    <h2> {this.props.finalizado ? 'Projetos finalizados' : 'Projetos em andamento'} </h2>
                    <div className="opcoesProjetoBotao">
                        <div className="dropdown">
                            <button className="dropdownbutton">Classificar por: Nome <FaCaretDown/></button>
                            <div className="dropdowncontent">
                                <span>Nome</span>
                                <span>Prazo</span>
                            </div>    
                        </div>
                    </div>

                </div>
                <div className="CardsContainer">
                    <ul className="listaProjetos">
                        {
                            projetos.length > 0? projetos?.map((p) => (
                                <ProjetoCard key={p._id} projeto={p} />
                            )) : (
                                <div className="no-data">
                                    <img src={NoServiceIMG} alt="sem serviços" />
                                    <p>Você ainda não possui nenhum projeto ativo.</p>
                                </div>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      projetos: state.projetos
    };
  };

const mapDispatchToProps = { fetchGetAllProjetos };

export default connect(mapStateToProps, mapDispatchToProps)(ContainerProjeto);
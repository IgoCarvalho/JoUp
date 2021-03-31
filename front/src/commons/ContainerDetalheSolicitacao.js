import React, { Component } from 'react';
import '../commons/ContainerDetalheSolicitacao.css';
import '../commons/BotaoRoxo.css';
import { Link, withRouter } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { fetchGetOneSolicitacao, fetchUpdateStatus } from '../store/actions/solicitacoesActions';
import Modal from './Modal';
import DialogConfirm, { ErrorMsg, SuccessMsg } from './DialogConfirm';
import { toast, ToastContainer } from 'react-toastify';

export class DetalhesServico extends Component {

    state = {
        modal: false,
        dialog: false,
        submitting: false,
        solicitacao: null
    }
    
    componentDidMount() {
        const { fetchGetOneSolicitacao: getOneSolicitacao } = this.props;

        const { id } = this.props.match.params;
        
        getOneSolicitacao(id)
            .then((res) => {
                console.log('ZZZZZ',res);
                this.setState({ solicitacao: res })
            })
    }

    navigateToCreateProject = () => {
        const { history } = this.props;
        const { solicitacao } = this.state;

        history.push('/adicionarprojeto', { solicitacao });
    }

    navigateToSolicitacoes = () => {
        const { history } = this.props;

        history.push('/solicitacoes');
    }

    showDialog = () => {
        this.setState({
            dialog: true,
            modal: true
        })
    }
    hiddenDialog = () => {
        this.setState({
            dialog: false,
            modal: false
        })
    }
    aceitarSolicitacao = () => {

        const { fetchUpdateStatus: updateStatus } = this.props;

        const id = this.state.solicitacao._id;
        
        this.setState({submitting: true})
        
        this.setState({modal: true})
                
        toast.success(
            <SuccessMsg message="Solicitação aceita com sucesso!" />,
            {
                autoClose: 3000,
                closeButton:false,
                pauseOnHover: false,
                onClose: this.navigateToCreateProject,
            }
        )
        
        // updateStatus(id, true)
        //     .then((res) => {
        //         this.setState({submitting: false})
                
        //         console.log('ststus aceito');
        //         this.setState({modal: true})
                
        //         toast.success(
        //             <SuccessMsg message="Solicitação aceita com sucesso!" />,
        //             {
        //                 autoClose: 3000,
        //                 closeButton:false,
        //                 onClose: this.navigateToSolicitacoes,
        //             }
        //         )
        //     })
        
    }
    recusarSolicitacao = () => {

        const { fetchUpdateStatus: updateStatus } = this.props;

        const id = this.state.solicitacao._id;

        this.setState({submitting: true})
        
        updateStatus(id, false)
        .then((res) => {
            console.log('ststus recusado');

            this.setState({dialog: false, submitting: false})

            toast.error(
                <ErrorMsg message={<span>
                    <strong>Solicitação recusada</strong>
                    <br/>
                    Email de recusa enviado ao solicitante
                </span>} />,
                {
                    autoClose: 3000,
                    closeButton:false,
                    pauseOnHover: false,
                    onClose: this.navigateToSolicitacoes,
                }
            )
        })
        
    }
    
    
    render() {
        const { solicitacao } = this.state;

        if(!solicitacao) {
            console.log('naoooo');
            return 'nada aqui'
        }

        console.log('Boolean(solicitacao)');

        
        return (
            <div className={`ContainerSolicitacao detalhes ${this.props.menu && 'open'}`}>
                <div className="topSessao">
                    <h2>Solicitações /<strong>{solicitacao.service.titulo}</strong></h2>
                </div>
                <section className="SessoesSolicitacao">
                    <div className="conteudoSolicitacao">
                        <div className="infoSolicitacao">
                            <h2>Respostas dos Requisitos</h2>
                            <div>
                            <p dangerouslySetInnerHTML={{__html: solicitacao.respostas_cliente}} />
                            </div>
                        </div>
                        <div className="precosPrazos">
                            <h2>Faixa de preço do cliente</h2>
                            <table className="NunericOptions">
                                <tr className="preco">
                                    <td>
                                        <legend>No mínimo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>R$</label></td><td><input disabled defaultValue={solicitacao.faixa_de_preco.min} type="numeric" /></td>
                                        </div>
                                    </td>
                                    <td>
                                        <legend>No máximo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>R$</label></td><td><input disabled defaultValue={solicitacao.faixa_de_preco.max} type="numeric" /></td>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <h2>Faixa de tempo do cliente</h2>
                            <table className="NunericOptions">
                                <tr className="tempo">
                                    <td>
                                        <legend>No mínimo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>Semanas</label></td><td><input disabled defaultValue={solicitacao.faixa_de_tempo.min} type="numeric" /></td>
                                        </div>
                                    </td>
                                    <td>
                                        <legend>No máximo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>Semanas</label></td><td><input disabled defaultValue={solicitacao.faixa_de_tempo.max} type="numeric" /></td>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <div className="referencias">
                                <h2>Referências do cliente</h2>
                                <ul>
                                    {
                                        solicitacao.referencias_cliente.map(ref => (
                                            <li>
                                                <a href={ref.link} target="_blank" rel="noreferrer"><i><AiOutlineLink /></i> {ref.nome || ref.link} </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </div>
                        <div className="perguntasSolicitacao">
                            <div className="dadosCliente">
                                <h2>Dados do cliente</h2>
                                <div className="dados">
                                    <p><strong>Nome completo</strong></p>
                                    <p>{solicitacao.dados_cliente.nome}</p>
                                </div>
                                <div className="dados">
                                    <p><strong>Email</strong></p>
                                    <p>{solicitacao.dados_cliente.email}</p>
                                </div>
                                <div className="dados">
                                    <p><strong>Telefone</strong></p>
                                    <p>{solicitacao.dados_cliente.telefone}</p>
                                </div>
                            </div>
                            <div className="cronograma">
                                <h2>Cronograma de solicitação</h2>
                                <table className="dataSolicitacao">
                                    <tr className="datas">
                                        <td>
                                            <legend>Data de solicitação</legend>
                                            <div className="dataReposta">
                                                <td>
                                                    <label>
                                                        <Moment locale="pt-br" format="D - MMMM">
                                                            {solicitacao.solicitado.inicio}
                                                        </Moment>
                                                    </label>
                                                </td>
                                            </div>
                                        </td>
                                        <td>
                                            <legend>Prazo para resposta</legend>
                                            <div className="dataReposta">
                                                <td>
                                                    <label>
                                                        <Moment locale="pt-br" format="D - MMMM">
                                                            {solicitacao.solicitado.prazo}
                                                        </Moment>
                                                    </label>
                                                </td>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className="botoes">
                                <button disabled={this.state.submitting} onClick={this.aceitarSolicitacao} className="botaoVerde">Aceitar</button>
                                <button disabled={this.state.submitting} onClick={this.showDialog} className="botaoVermelho">Recusar</button>
                            </div>
                        </div>

                    </div>
                </section>
                <Modal open={this.state.modal} >
                    <DialogConfirm
                        open={this.state.dialog}
                        title="Recusar solicitação de projeto"
                        message="Ao recusar o solicitante recebá uma mensagem no email informando que a solicitação foi recusada."
                        successBtnText="Sim, quero recusar"
                        cancelBtnText="Cancelar"
                        onSuccess={this.recusarSolicitacao}
                        onCancel={this.hiddenDialog}
                    />
                </Modal>
                <ToastContainer />
                
            </div>
        )
    }
}

const mapDispatchToProps = { fetchGetOneSolicitacao, fetchUpdateStatus };

export default withRouter(connect(undefined, mapDispatchToProps)(DetalhesServico));

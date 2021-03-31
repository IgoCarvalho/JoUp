import React, { Component } from 'react';
import '../commons/ContainerSolicitacoes.css';
import '../commons/BotaoRoxo.css';
import '../commons/BotaoBranco.css';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { fetchGetAllSolicitacoes, fetchUpdateStatus } from '../store/actions/solicitacoesActions';
import { toast, ToastContainer } from 'react-toastify';
import NoServiceIMG from '../images/NoServiceIMG.svg'

import Modal from './Modal';
import DialogConfirm, { ErrorMsg, SuccessMsg } from './DialogConfirm';
import PageLoading from '../components/PageLoading';

export class ContainerSolicitacoes extends Component {

    state = {
        dialog: false,
        modal: false,
        serviceSelected: '',
        loading: true,
    }
    
    componentDidMount() {
        
        const { fetchGetAllSolicitacoes: getAllSolicitacoes } = this.props;

        getAllSolicitacoes()
            .then(() => {
                console.log('getAll solicitacoes familia');
            })
            .finally(() => {
                this.setState({loading: false})
            })
    }

    getNovasSolicitacoes = () => {
        const {solicitacoes} = this.props;
        console.log(solicitacoes);

        return solicitacoes.filter((solicitacao) => {
            console.log(typeof solicitacao.aceito === 'boolean');
            if(!(typeof solicitacao.aceito === 'boolean')) {
                return true;
            }

            return false;
        })

    }
    
    navigateToDetails = (id) => () => {
        const { history } = this.props;
        history.push(`/detalhesolicitacao/${id}`);
    }

    navigateToCreateProject = (id) => () => {
        const { history, solicitacoes } = this.props;

        const solicitacao = solicitacoes.find((s) => s._id === id)

        history.push('/adicionarprojeto', { solicitacao });
    }

    showDialog = (id) => (e) => {
        e.stopPropagation();
        
        this.setState({
            dialog: true,
            modal: true,
            serviceSelected: id
        })
    }
    hiddenDialog = () => {
        this.setState({
            dialog: false,
            modal: false
        })
    }
    showSuccessMessage = (id) => (e) => {
        e.stopPropagation();

        console.log('adcadpcinadon');
        
        this.setState({modal: true})

        toast.success(
            <SuccessMsg message="Solicitação aceita com sucesso!" />,
            {
                autoClose: 3000,
                closeButton:false,
                pauseOnHover: false,
                onClose: this.navigateToCreateProject(id),
            }
        );
    }
    showCancelMessage = () => {
        this.setState({dialog: false})
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
                onClose: this.hiddenDialog,
            }
        )
    }

    recusarSolicitacao = () => {

        const { fetchUpdateStatus: updateStatus } = this.props;

        const id = this.state.serviceSelected;
        
        updateStatus(id, false)
        .then((res) => {
            console.log('ststus recusado');

            this.setState({dialog: false})

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
                    onClose: this.hiddenDialog,
                }
            )
        })
        
    }

    filterPendentes = () => {
        const { pendentes: pagePendentes } = this.props;
        
        const parseData = (date) => date.slice(0,10).replace(/-/g,'/');

        const solicitacoes = this.getNovasSolicitacoes();

        const date = new Date();
        const hoje = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON();

        
        const result = solicitacoes.filter((soli) => {
            const mesmoDia = parseData(soli.solicitado.prazo) == parseData(hoje);

            const atrasado = new Date() > new Date(soli.solicitado.prazo);

            const pendente = !mesmoDia && atrasado;
            
            if(Boolean(pagePendentes)) {
                return pendente;
            }
            
            return !pendente;
        })

        return result;
        
        // if(parseData(dataEntrega) === parseData(hoje)) {
        //     return 'hoje'
        // }

        // if(new Date(dataEntrega) < new Date()) {
        //     return 'atrasado'
        // }

    }

    pasrseDateStyle = (prazo) => {
        const parseData = (date) => date.slice(0,10).replace(/-/g,'/');

        const date = new Date();
        const hoje = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON();

        console.log(prazo, hoje);

        if(parseData(prazo) === parseData(hoje)) {
            return 'hoje'
        }

        if(new Date() > new Date(prazo)) {
            return 'atrasado'
        }

        return '';
    }


    render() {

        if(this.state.loading) {
            return <PageLoading />
        }
        
        const solicitacoes = this.filterPendentes()
        
        return (
            <div className={`ContainerSolicitacao ${this.props.menu && 'open'}`}>
                <div className="topSessao">
                    <h2>{this.props.pendentes ? 'Solicitações pendentes' : 'Novas solicitações'}</h2>
                </div>
                <div className="CardsContainer">
                    <ul className="listaSolicitacao">

                        {
                            solicitacoes.length > 0 ?
                            solicitacoes.map((solicitacao) => (
                                <li key={solicitacao._id} onClick={this.navigateToDetails(solicitacao._id)}>
                                    <label className={`prazoSolicitacao ${this.pasrseDateStyle(solicitacao.solicitado.prazo)}`}>
                                        <Moment locale="pt-br" format="D MMM" >
                                            {solicitacao.solicitado.inicio}
                                        </Moment>

                                        {' - '}

                                        <Moment locale="pt-br" format="D MMM" >
                                            {solicitacao.solicitado.prazo}
                                        </Moment>
                                    </label>
                                    <h3 className="tituloSolicitacao">{solicitacao.service.titulo}</h3>
                                    <div className="infoSolicitacao">
                                        <h4>Dados do cliente</h4>
                                        <p><strong>Nome completo:</strong></p>
                                        <p>{solicitacao.dados_cliente.nome}</p>
                                    </div>
                                    <div className="infoSolicitacao">
                                        <h4>Faixa de preço do cliente</h4>
                                        <div className="valoresContainer">
                                            <div>
                                                <p className="minmax">No mínimo</p>
                                                <div className="espaco"><label>R$</label><input disabled defaultValue={solicitacao.faixa_de_preco.min}></input></div>
                                            </div>
                                            <div>
                                                <p className="minmax">No máximo</p>
                                                <div className="espaco"><label>R$</label><input disabled defaultValue={solicitacao.faixa_de_preco.max}></input></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="infoSolicitacao">
                                        <h4>Faixa de prazo do cliente</h4>
                                        <div className="valoresContainer">
                                            <div>
                                                <p className="minmax">No mínimo</p>
                                                <div className="espaco"><label>Semanas</label><input disabled defaultValue={solicitacao.faixa_de_tempo.min}></input></div>
                                            </div>
                                            <div>
                                                <p className="minmax">No máximo</p>
                                                <div className="espaco"><label>Semanas</label><input disabled defaultValue={solicitacao.faixa_de_tempo.max}></input></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="botoes">
                                        <button type="button" onClick={this.showSuccessMessage(solicitacao._id)} className="botaoVerde">Aceitar</button>
                                        <button type="button" onClick={this.showDialog(solicitacao._id)} className="botaoVermelho">Recusar</button>
                                    </div>
                                </li>
                            )) :
                            <div className="no-data">
                                <img src={NoServiceIMG} alt="sem serviços" />
                                <p>Você ainda não possui nenhuma solicitação nova.</p>
                            </div>
                        }
                        
                        {/* <li onClick={this.navigateToDetails('id')}>
                            <label className="prazoSolicitacao">13 jan -19 jan</label>
                            <h3 className="tituloSolicitacao">Titulo do novo serviço solicitado</h3>
                            <div className="infoSolicitacao">
                                <h4>Dados do cliente</h4>
                                <p><strong>Nome completo:</strong></p>
                                <p>Luana Moreira Brumado</p>
                            </div>
                            <div className="infoSolicitacao">
                                <h4>Faixa de preço do cliente</h4>
                                <div className="valoresContainer">
                                    <div>
                                        <p className="minmax">No mínimo</p>
                                        <div className="espaco"><label>R$</label><input value="2"></input></div>
                                    </div>
                                    <div>
                                        <p className="minmax">No máximo</p>
                                        <div className="espaco"><label>R$</label><input value="2"></input></div>
                                    </div>
                                </div>
                            </div>
                            <div className="infoSolicitacao">
                                <h4>Faixa de prazo do cliente</h4>
                                <div className="valoresContainer">
                                    <div>
                                        <p className="minmax">No mínimo</p>
                                        <div className="espaco"><label>Semanas</label><input value="2"></input></div>
                                    </div>
                                    <div>
                                        <p className="minmax">No máximo</p>
                                        <div className="espaco"><label>Semanas</label><input value="2"></input></div>
                                    </div>
                                </div>
                            </div>
                            <div className="botoes">
                                <button onClick={(e) => {
                                    e.stopPropagation()
                                    alert('parou')
                                }} className="botaoVerde">Aceitar</button>
                                <button className="botaoVermelho">Recusar</button>
                            </div>
                        </li>
                        
                        <li>
                            <label className="prazoSolicitacao">13 jan -19 jan</label>
                            <h3 className="tituloSolicitacao">Titulo do novo serviço solicitado</h3>
                            <div className="infoSolicitacao">
                                <h4>Dados do cliente</h4>
                                <p><strong>Nome completo:</strong></p>
                                <p>Luana Moreira Brumado</p>
                            </div>
                            <div className="infoSolicitacao">
                                <h4>Faixa de preço do cliente</h4>
                                <div className="valoresContainer">
                                    <div>
                                        <p className="minmax">No mínimo</p>
                                        <div className="espaco"><label>R$</label><input value="2"></input></div>
                                    </div>
                                    <div>
                                        <p className="minmax">No máximo</p>
                                        <div className="espaco"><label>R$</label><input value="2"></input></div>
                                    </div>
                                </div>
                            </div>
                            <div className="infoSolicitacao">
                                <h4>Faixa de prazo do cliente</h4>
                                <div className="valoresContainer">
                                    <div>
                                        <p className="minmax">No mínimo</p>
                                        <div className="espaco"><label>Semanas</label><input value="2"></input></div>
                                    </div>
                                    <div>
                                        <p className="minmax">No máximo</p>
                                        <div className="espaco"><label>Semanas</label><input value="2"></input></div>
                                    </div>
                                </div>
                            </div>
                            <div className="botoes">
                                <button className="botaoVerde">Aceitar</button>
                                <button className="botaoVermelho">Recusar</button>
                            </div>
                        </li>
                        
                        <li>
                            <label className="prazoSolicitacao">13 jan -19 jan</label>
                            <h3 className="tituloSolicitacao">Titulo do novo serviço solicitado</h3>
                            <div className="infoSolicitacao">
                                <h4>Dados do cliente</h4>
                                <p><strong>Nome completo:</strong></p>
                                <p>Luana Moreira Brumado</p>
                            </div>
                            <div className="infoSolicitacao">
                                <h4>Faixa de preço do cliente</h4>
                                <div className="valoresContainer">
                                    <div>
                                        <p className="minmax">No mínimo</p>
                                        <div className="espaco"><label>R$</label><input value="2"></input></div>
                                    </div>
                                    <div>
                                        <p className="minmax">No máximo</p>
                                        <div className="espaco"><label>R$</label><input value="2"></input></div>
                                    </div>
                                </div>
                            </div>
                            <div className="infoSolicitacao">
                                <h4>Faixa de prazo do cliente</h4>
                                <div className="valoresContainer">
                                    <div>
                                        <p className="minmax">No mínimo</p>
                                        <div className="espaco"><label>Semanas</label><input value="2"></input></div>
                                    </div>
                                    <div>
                                        <p className="minmax">No máximo</p>
                                        <div className="espaco"><label>Semanas</label><input value="2"></input></div>
                                    </div>
                                </div>
                            </div>
                            <div className="botoes">
                                <button className="botaoVerde">Aceitar</button>
                                <button className="botaoVermelho">Recusar</button>
                            </div>
                        </li> */}
                        
                        
                    </ul>

                </div>

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

const mapStateToProps = (state) => {
    return {
        solicitacoes: state.solicitacoes
    }
}

const mapDispatchToProps = { fetchGetAllSolicitacoes, fetchUpdateStatus };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContainerSolicitacoes));

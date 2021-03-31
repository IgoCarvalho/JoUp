import React, { Component } from 'react';
import '../commons/ContainerDetalhamento.css';
import '../commons/ContainerProjeto.css';
import '../commons/BotaoRoxo.css';
import { Link, withRouter } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { AiOutlineLink} from "react-icons/ai";
import { connect } from 'react-redux';
import Moment from 'react-moment'

import { fetchGetOneProjeto, fetchUpdateProjeto } from '../store/actions/projetosActions';
import { MdAutorenew } from 'react-icons/md';

class DetalhesProjeto extends Component {
    state = {
        projeto: null,
        submitting: false,
        submittingFase: null,
        submittingParcela: '',
    }
    
    componentDidMount() {
        const { id } = this.props.match.params;

        const { fetchGetOneProjeto: getOneProjeto } = this.props;

        getOneProjeto(id)
            .then(res=>{
                this.setState({ projeto: res })
            })
    }

    calculateProgress = () => {
        const { projeto } = this.state;

        const fases = projeto.fases_projeto.length;
        const completas = projeto.fases_projeto.filter(f=>f.completo).length;

        const porcentagem = Math.round((completas * 100) / fases)
        console.log(porcentagem);

        return porcentagem;
        
    }

    handleParcelas = (e) => {
        const { name } = e.target;

        const { projeto } = this.state;
        const { fetchUpdateProjeto: updateProjeto } = this.props;

        projeto.parcelas[name].pago = !projeto.parcelas[name].pago;
        
        this.setState({projeto, submittingParcela: name, submitting: true})

        updateProjeto(projeto._id, projeto)
            .then((newProjeto) => {
                this.setState({projeto: newProjeto, submittingParcela: '', submitting: false})
            })
            .catch(() => {
                projeto.parcelas[name].pago = !projeto.parcelas[name].pago;
                this.setState({projeto, submittingParcela: '', submitting: false})
            })


    }

    handleFases = (i) => () => {

        const { projeto } = this.state;
        const { fetchUpdateProjeto: updateProjeto } = this.props;

        projeto.fases_projeto[i].completo = !projeto.fases_projeto[i].completo;
        
        this.setState({projeto, submittingFase: i, submitting: true})

        updateProjeto(projeto._id, projeto)
            .then((newProjeto) => {
                this.setState({projeto: newProjeto, submittingFase: null, submitting: false})
            })
            .catch(() => {
                projeto.fases_projeto[i].completo = !projeto.fases_projeto[i].completo;
                this.setState({projeto, submittingFase: null, submitting: false})
            })




    }

    checkFaseData = (dataEntrega) => {
        const parseData = (date) => date.slice(0,10).replace(/-/g,'/');

        const date = new Date();

        const hoje = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON();

        console.log(dataEntrega, hoje);

        if(parseData(dataEntrega) === parseData(hoje)) {
            return 'hoje'
        }

        if(new Date(dataEntrega) < new Date()) {
            return 'atrasado'
        }

        return '';

    }
    
    render() {
        const { projeto } = this.state;
        
        if(!projeto) {
            return 'nao tem nada'
        }
        
        return (
            <div className={`ContainerProjeto detalhes ${this.props.menu && 'open'}`}>
                <div className="topSessao">
                    <h2>Detalhamento do projeto / <strong>{projeto.titulo}</strong></h2>
                    <button className="bRoxoRedondo"><Link to={`/editarprojeto/${projeto._id}`}><i><FiEdit/></i>Editar projeto</Link></button>
                </div>
                <section className="SessoesProjeto">
                    <div className="conteudoProjeto">
                        <div className="infoProjeto">
                            <h2>Dados do cliente</h2>
                            <strong><p>Nome completo:</p></strong>
                            <p>{projeto.dados_cliente.nome}</p>
                            <strong><p>Email:</p></strong>
                            <p>{projeto.dados_cliente.email}</p>   
                            <strong><p>Telefone:</p></strong>
                            <p>{projeto.dados_cliente.telefone}</p>
                            
                            <div className="precosPrazos">
                            <h2 className="sessionPreco">Preço pelo serviço</h2>
                            <table className="NunericOptions">
                                <tr className="preco">
                                    <td>
                                        <legend>
                                            <div className="parcelas-container">
                                                <input name="primeira" disabled={this.state.submitting} checked={this.state.projeto.parcelas.primeira.pago} onChange={this.handleParcelas} type="checkbox"/> 1ª parcela
                                                {this.state.submittingParcela === 'primeira' && <MdAutorenew className="load-icon" />}
                                            </div>
                                        </legend>
                                        <div className="InputsNumeric">
                                            <td><label>R$</label></td><td><input type="numeric" defaultValue={projeto.parcelas.primeira.valor} disabled/></td>
                                        </div>
                                    </td>
                                    <td>
                                        <legend>
                                            <div className="parcelas-container">
                                                <input name="segunda" disabled={this.state.submitting} checked={this.state.projeto.parcelas.segunda.pago} onChange={this.handleParcelas} type="checkbox"/> 2ª parcela
                                                {this.state.submittingParcela === 'segunda' && <MdAutorenew className="load-icon" />}
                                            </div>
                                        </legend>
                                        <div className="InputsNumeric">
                                            <td><label>R$</label></td><td><input type="numeric" defaultValue={projeto.parcelas.segunda.valor} disabled/></td>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <h2 className="sessionPreco">Faixa de tempo do serviço</h2>
                            <table className="NunericOptions">
                                <tr className="tempo">
                                    <td>
                                        <legend>No mínimo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>Semanas</label></td><td><input type="numeric" defaultValue={projeto.faixa_de_tempo.min} disabled/></td>
                                        </div>
                                    </td>
                                    <td>
                                        <legend>No mínimo</legend>
                                        <div className="InputsNumeric">
                                            <td><label>Semanas</label></td><td><input type="numeric" defaultValue={projeto.faixa_de_tempo.max} disabled/></td>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                                <div className="referencias">
                                    <h2>Referencias do cliente</h2>
                                    <ul>
                                        {
                                            projeto.referencias_cliente.map(ref_cli=>(
                                                <li key={ref_cli.link}><label><a href={ref_cli.link} target="_blank" rel="noreferrer"><i><AiOutlineLink/></i>{ref_cli.nome || ref_cli.link}</a></label></li>
                                            ))
                                        }
                                        {/* <li><label><a href="" target="_blank"><i><AiOutlineLink/></i>Vídeo do Youtube</a></label></li><br/> */}
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        <div className="perguntasProjeto">
                        <h2>Respostas dos requisitos</h2>
                                <p dangerouslySetInnerHTML={{__html: projeto.respostas_cliente}} />
                                <div className="filtros">
                                    <h2>Filtros</h2>
                                    <ul>
                                        {
                                            projeto.filtros.map(filtro=>(
                                                <li key={filtro}><label>{filtro}</label></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                        </div>

                    </div>
                    <div className="fasesDesenvolvimento">     
                        <h2>Fases de desenvolvimento</h2>
                        <div className="progresProj">
                            <label>{`${this.calculateProgress()}%`}</label>
                            <div className="cinza">
                                <div style={{width: `${this.calculateProgress()}%`}} className="roxo"></div>
                            </div>
                        </div>
                        <table className="fasesProjeto"> 
                                {
                                    projeto.fases_projeto.map((fase, i)=>(
                                        <React.Fragment key={`${fase.nome}-${i}`}>
                                            <tr>
                                                <td>
                                                <input disabled={this.state.submitting} checked={fase.completo} onChange={this.handleFases(i)} type="checkbox"/>
                                                </td>
                                                <td>
                                                    <h3>{`Fase ${i+1}`} {this.state.submittingFase == i && <MdAutorenew className="load-icon" />}</h3>
                                                    <p>{fase.nome}</p>
                                                </td>
                                                <td>
                                                    <label className={`prazoFases ${fase.completo? 'completo' : this.checkFaseData(fase.data.end)}`}>
                                                        <Moment format="D MMM" locale="pt-br" >{fase.data.start}</Moment>
                                                        {' - '}
                                                        <Moment format="D MMM" locale="pt-br" >{fase.data.end}</Moment>
                                                    </label>
                                                </td>
                                            </tr>
                                            <br/>
                                        </React.Fragment>
                                    ))
                                }
                                {/* <tr>
                                    <td>
                                    <input type="checkbox"/>
                                    </td>
                                    <td>
                                        <h3>Fase 2</h3>
                                        <p>Pesquisa de similares</p>
                                    </td>
                                    <td>
                                        <label className="prazoFases">13 jan - 19 jan</label>
                                    </td>
                                </tr>
                                <br/>
                                <tr>
                                    <td>
                                    <input type="checkbox"/>
                                    </td>
                                    <td>
                                        <h3>Fase 3</h3>
                                        <p>Pesquisa de concorrencia</p>
                                    </td>
                                    <td>
                                        <label className="prazoFases">13 jan - 19 jan</label>
                                    </td>
                                </tr>
                                <br/>
                                <tr>
                                    <td>
                                    <input type="checkbox"/>
                                    </td>
                                    <td>
                                        <h3>Fase 4</h3>
                                        <p>Mapa de empatia</p>
                                    </td>
                                    <td>
                                        <label className="prazoFases">13 jan - 19 jan</label>
                                    </td>
                                </tr>
                                <br/>
                                <tr>
                                    <td>
                                    <input type="checkbox"/>
                                    </td>
                                    <td>
                                        <h3>Fase 5</h3>
                                        <p>UX Canvas</p>
                                    </td>
                                    <td>
                                        <label className="prazoFases">13 jan - 19 jan</label>
                                    </td>
                                </tr>
                                <br/>
                                <tr>
                                    <td>
                                    <input type="checkbox"/>
                                    </td>
                                    <td>
                                        <h3>Fase 6</h3>
                                        <p>Apresentação</p>
                                    </td>
                                    <td>
                                        <label className="prazoFases">13 jan - 19 jan</label>
                                    </td>
                                </tr> */}

                            
                        </table>
                    </div>
                    
                </section>  
            </div> 
        ) 
    }
}

const mapDispatchToProps = { fetchGetOneProjeto, fetchUpdateProjeto };

export default withRouter(connect(undefined, mapDispatchToProps)(DetalhesProjeto))



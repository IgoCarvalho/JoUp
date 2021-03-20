import React, { Component } from 'react';
import '../commons/AddServico.css';
import { AiOutlineBold,AiOutlineOrderedList, AiOutlineUnorderedList,AiOutlineItalic,AiOutlineLink} from "react-icons/ai";
import { FaPlus, FaTrash } from "react-icons/fa";
import Select from 'react-select/creatable'

import TextEditor from './TextEditor';
import Modal from './Modal';
import DialogConfirm from './DialogConfirm';
import SuccessIcon from '../images/MsgConfirm.svg'
import ErrorIcon from '../images/MsgNegative.svg'

import { fetchCreateService, fetchGetOneService, fetchUpdateService } from '../store/actions/servicesActions';
import { connect } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import { withRouter } from 'react-router-dom';

const detalhesText = `
    <p><strong>Objetivos e benefícios do serviço:</strong></p>
    <p>Este serviço tem como objetivo contribuir para ... gerando os benefícios tais em relação ao problema a ser solucionado. Este serviço tem como objetivo contribuir para ... gerando os benefícios tais em relação ao problema a ser solucionado.</p>
`

const requisitosText = `
    <p><strong>Natureza do projeto:</strong></p>
    <ul>
    <li>Quais os objetivos básicos do projeto?</li>
    <li>Quais resultados desejáveis?</li>
    <li>Por que esse projeto tornou-se necessário?</li>
    <li>Por que agora?</li>
    </ul>
    <p><strong>Análise de mercado:</strong></p>
    <ul>
    <li>Qual o segmento e o nicho do seu negócio? (Exemplo: moda - bijuterias)</li>
    <li>Quais os seus concorrentes e/ou produtos similares?</li>
    </ul>
    <p><strong>Público-alvo:</strong></p>
    <ul>
    <li>Quem esse projeto deve atingir?</li>
    <li>Qual experiência o projeto espera proporcionar?</li>
    </ul>
`

const perguntasText = `
    <p><strong>Porquê isso é necessário para meu site?</strong></p>
    <p>Os conceitos de UI e UX geram um maravilhoso desempenho para quem for utilizar as propriedades de sua interface.</p>
    <p><br></p>
    <p><strong>Porquê isso é necessário para meu site?</strong></p>
    <p>Os conceitos de UI e UX geram um maravilhoso desempenho para quem for utilizar as propriedades de sua interface.</p>
    <p><br></p>
    <p><strong>Porquê isso é necessário para meu site?</strong></p>
    <p>Os conceitos de UI e UX geram um maravilhoso desempenho para quem for utilizar as propriedades de sua interface.</p>
    <p><br></p>
    <p><strong>Porquê isso é necessário para meu site?</strong></p>
    <p>Os conceitos de UI e UX geram um maravilhoso desempenho para quem for utilizar as propriedades de sua interface.</p>
`

const SuccessMsg = ({ message }) => (
    <div className="message-dialog success">
        <img src={SuccessIcon} alt="Icone de sucesso" />
        <p>{ message }</p>
    </div>
)
const ErrorMsg = ({ message }) => (
    <div className="message-dialog success">
        <img src={ErrorIcon} alt="Icone de erro" />
        <p>{ message }</p>
    </div>
)

export class AddServico extends Component {
    state = {
        submitting: false,
        edit: false,
        modal: false,
        dialog: false,
        dialogContent: {
            title: 'Cancelar adição de novo serviço',
            message: 'Ao cancelar você perderá todos os dados inseridos nesse arquivo, você tem certeza?',
            successMsg: 'Novo serviço adicionado com sucesso!',
            errorMsg: 'Adição de novo serviço cancelado',
        },
        titulo: '',
        detalhes: detalhesText,
        requisitos: requisitosText,
        perguntas: perguntasText,
        faixa_de_preco: {
            min: null,
            max: null,
        },
        faixa_de_tempo: {
            min: null,
            max: null,
        },
        referencias: [
        ],
        filtros: [
        ],
        filtrosOptions: [
        ],
        selectFiltros: []
    }

    componentDidMount() {
        console.log(this.props.servicesFiltros);

        const a = this.props.servicesFiltros.reduce((a, b) => {
            return [...a, ...b]
        }, [])

        console.log(a);

        this.setState({filtrosOptions: this.setDefaultFiltros(a)})
        
        
        const { id } = this.props.match.params;

        if(!id) return;

        const { fetchGetOneService: getOneService } = this.props;

        getOneService(id)
            .then((service) => {
                console.log('foi familia__', service);
                this.populateState(service);
            })
        
    }

    populateState = (service) => {
        this.setState({
            edit: true,
            dialogContent: {
                title: 'Cancelar adição de serviço',
                message: 'Ao cancelar você perderá todos os dados inseridos nesse arquivo, você tem certeza?',
                successMsg: 'Serviço editado com sucesso!',
                errorMsg: 'Edição de serviço cancelado',
            },
            titulo: service.titulo,
            detalhes: service.detalhes,
            requisitos: service.requisitos,
            perguntas: service.perguntas,
            faixa_de_preco: service.faixa_de_preco ,
            faixa_de_tempo: service.faixa_de_tempo ,
            referencias: service.referencias ,
            filtros: service.filtros,
            selectFiltros: this.setDefaultFiltros(service.filtros)
        })
    }

    navigateToSerices = () => {
        const { history } = this.props;

        history.push('/servicos');
    }

    handleInput = (e) => {
        const { name, value } = e.target;

        this.setState({[name]: value});
    }
    
    handleTexts = (name, value) => {
        this.setState({[name]: value});
    }

    handleReferenciasInputs(event, index) {
        const { name, value } = event.target;
        let referencias = [...this.state.referencias]

        referencias[index][name] = value;

        this.setState({referencias})
    }

    addReferencia = () => {
        let referencias = [...this.state.referencias];

        referencias.push({ nome: '', link: '' })

        this.setState({referencias})
    }

    removeReferencia = (index) => {
        let referencias = [...this.state.referencias];

        referencias.splice(index, 1);

        this.setState({referencias});
    }

    handleFiltrosChanges = (newValue) => {
        const filtros = newValue.map((item) => item.value)

        this.setState({filtros, selectFiltros: newValue});
    }

    setDefaultFiltros = (filtrosData) => {
        const filtros = filtrosData.map((item) => ({ value: item, label: item }))
        
        console.log(filtros);
        return filtros;
    }

    handleFaixaDePreco = (e) => {
        const { name, value } = e.target;
        const faixa_de_preco = {...this.state.faixa_de_preco};

        faixa_de_preco[name] = Number(value);

        this.setState({faixa_de_preco})
    }

    handleFaixaDeTempo = (e) => {
        const { name, value } = e.target;
        const faixa_de_tempo = {...this.state.faixa_de_tempo};

        faixa_de_tempo[name] = Number(value);

        this.setState({faixa_de_tempo})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { fetchCreateService: createService, fetchUpdateService: updateService } = this.props;

        const serviceData = {
            titulo: this.state.titulo,
            detalhes: this.state.detalhes,
            requisitos: this.state.requisitos,
            perguntas: this.state.perguntas,
            faixa_de_preco: this.state.faixa_de_preco,
            faixa_de_tempo: this.state.faixa_de_tempo,
            referencias: this.state.referencias,
            filtros: this.state.filtros,
        };

        console.log(serviceData);

        if(this.state.edit) {
            const { id } = this.props.match.params;
            
            updateService(id, serviceData)
                .then(re => {
                    this.showModal()

                    toast.success(
                        <SuccessMsg message={this.state.dialogContent.successMsg} />,
                        {
                            autoClose: 3000,
                            closeButton:false,
                            onClose: this.navigateToSerices,
                        }
                    )
                })

            return;
        }
        
        createService(serviceData)
            .then(res=>{
                console.log('foiaa_', res);

                this.showModal()

                toast.success(
                    <SuccessMsg message={this.state.dialogContent.successMsg} />,
                    {
                        autoClose: 3000,
                        closeButton:false,
                        onClose: this.navigateToSerices,
                    }
                )
                
            })
            .catch(err=>{
                console.log('moio', err);
            })
    }

    showModal = () => {
        this.setState({modal: true})
    }
    showDialog = () => {
        this.setState({dialog: true})
    }

    handleCancelEdit = () => {
        this.showModal()
        this.showDialog()
    }

    dialogCancelAction = () => {
        this.setState({ modal: false, dialog: false })
    }
    dialogSuccessAction = () => {
        this.setState({dialog: false})
        
        toast.error(
            <ErrorMsg message={this.state.dialogContent.errorMsg} />,
            {
                autoClose: 3000,
                closeButton:false,
                onClose: this.navigateToSerices,
            }
        )
    }
    
    render() {
        return (
            <section className="ContainerAddServico">
                <div className="AddServico">
                    <form onSubmit={this.handleSubmit}>
                        <div className="cabecalhoServico">
                            <input
                                type="text"
                                placeholder="Adicionar título do serviço"
                                name="titulo"
                                value={this.state.titulo}
                                onChange={this.handleInput}
                            />
                        </div>
                        <div className="detalhesServico">
                            <div className="camposTexto">
                                <h2>Detalhamento do serviço<sup>*</sup></h2>

                                <div className="TextEditorContainer">
                                    <TextEditor
                                        name="detalhes"
                                        textData={this.state.detalhes}
                                        onChange={this.handleTexts}
                                    />
                                </div>

                                <h2>Requisitos para o serviço<sup>*</sup></h2>
                                <div className="TextEditorContainer">
                                    <TextEditor
                                        name="requisitos"
                                        textData={this.state.requisitos}
                                        onChange={this.handleTexts}
                                    />
                                </div>

                                <h2>Perguntas frequentes sobre esse serviço<sup>*</sup></h2>
                                <div className="TextEditorContainer">
                                    <TextEditor
                                        name="perguntas"
                                        textData={this.state.perguntas}
                                        onChange={this.handleTexts}
                                    />
                                </div>
                                
                            </div>
                            <div className="camposPreco">
                            <h2>Faixa de preço<sup>*</sup></h2>
                                <ul className="numericInputs">
                                    <li>
                                        <legend>No mínimo</legend>
                                        <div>
                                            <label>R$</label>
                                            <input
                                                type="number"
                                                name="min"
                                                value={this.state.faixa_de_preco.min}
                                                onChange={this.handleFaixaDePreco}
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <legend>No máximo</legend>
                                        <div>
                                            <label>R$</label>
                                            <input
                                                type="number"
                                                name="max"
                                                value={this.state.faixa_de_preco.max}
                                                onChange={this.handleFaixaDePreco}
                                            />
                                        </div>
                                    </li>
                                </ul>
                            <h2>Faixa de tempo<sup>*</sup></h2>
                                <ul className="numericInputs">
                                    <li>
                                        <legend>No mínimo</legend>
                                        <div>
                                            <label>Semanas</label>
                                            <input
                                                type="number"
                                                min="1"
                                                max="8"
                                                name="min"
                                                value={this.state.faixa_de_tempo.min}
                                                onChange={this.handleFaixaDeTempo}
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <legend>No máximo</legend>
                                        <div>
                                            <label>Semanas</label>
                                            <input
                                                type="number"
                                                min="1"
                                                max="8"
                                                name="max"
                                                value={this.state.faixa_de_tempo.max}
                                                onChange={this.handleFaixaDeTempo}
                                            />
                                        </div>
                                    </li>
                                </ul>
                            <h2>Filtros<sup>*</sup></h2>
                            <div className="filtros-container">
                                <Select
                                    placeholder="Adicione filtros"
                                    // defaultValue={this.state.defaultFiltros}
                                    options={this.state.filtrosOptions}
                                    isMulti
                                    label="adcd"
                                    onChange={this.handleFiltrosChanges}
                                    value={this.state.selectFiltros}
                                />
                            </div>

                            {/* <button><i><FaPlus/></i>Adicionar filtro</button> */}
                            <h2>Referências do serviço</h2>
                            <button type="button" onClick={this.addReferencia}><i><AiOutlineLink/></i>Adicionar anexo</button>

                            <div className="referencias-container">
                            {
                                this.state.referencias.map((item, index) => (
                                    <div key={index} className="referencias-item">
                                        <input
                                            name="nome"
                                            placeholder="Nome"
                                            value={item.nome}
                                            onChange={(e) => { this.handleReferenciasInputs(e, index) }}
                                        />
                                        <input
                                            name="link"
                                            placeholder="Link"
                                            value={item.link}
                                            onChange={(e) => { this.handleReferenciasInputs(e, index) }}
                                        />
                                        <span
                                            className="delete-btn"
                                            onClick={() => this.removeReferencia(index)}
                                        >
                                            <FaTrash />
                                        </span>
                                    </div>
                                ))
                            }
                            </div>
                            </div>
                        </div>
                        <div className="SubmitOptions">
                            <button onClick={this.handleCancelEdit} type="button" className="Cancelar">Cancelar</button>
                            <button disabled={this.state.submitting} type="submit" className="Salvar">Salvar</button>
                        </div>
                    </form>
                </div>
                <Modal open={this.state.modal} >
                    <DialogConfirm
                        open={this.state.dialog}
                        title={this.state.dialogContent.title}
                        message={this.state.dialogContent.message}
                        successBtnText="Sim, quero cancelar"
                        cancelBtnText="Voltar para edição"
                        onSuccess={this.dialogSuccessAction}
                        onCancel={this.dialogCancelAction}
                    />
                </Modal>
                    <ToastContainer />
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        servicesFiltros: state.services.map(s=>s.filtros)
    }
}

const mapDispatchToProps = { fetchCreateService, fetchGetOneService, fetchUpdateService };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddServico));

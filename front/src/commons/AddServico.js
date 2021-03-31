import React, { Component } from 'react';
import '../commons/AddServico.css';
import {
  AiOutlineBold,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
  AiOutlineItalic,
  AiOutlineLink
} from 'react-icons/ai';
import { MdAutorenew, MdDelete } from 'react-icons/md';
import Select from 'react-select/creatable';

import TextEditor from './TextEditor';
import Modal from './Modal';
import DialogConfirm, { ErrorMsg, SuccessMsg } from './DialogConfirm';

import {
  fetchCreateService,
  fetchGetOneService,
  fetchUpdateService
} from '../store/actions/servicesActions';
import { connect } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import { withRouter } from 'react-router-dom';

const detalhesText = `
    <p><strong>Objetivos e benefícios do serviço:</strong></p>
    <p>Este serviço tem como objetivo contribuir para ... gerando os benefícios tais em relação ao problema a ser solucionado. Este serviço tem como objetivo contribuir para ... gerando os benefícios tais em relação ao problema a ser solucionado.</p>
`;

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
`;

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
`;

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
      errorMsg: 'Adição de novo serviço cancelado'
    },
    titulo: '',
    detalhes: detalhesText,
    requisitos: requisitosText,
    perguntas: perguntasText,
    faixa_de_preco: {
      min: null,
      max: null
    },
    faixa_de_tempo: {
      min: null,
      max: null
    },
    referencias: [],
    referencias_inputs: {
        nome: '',
        link: ''
    },
    filtros: [],
    filtrosOptions: [],
    selectFiltros: []
  };

  componentDidMount() {
    console.log(this.props.servicesFiltros);
    this.getFilters();

    const { id } = this.props.match.params;

    if (!id) return;

    const { fetchGetOneService: getOneService } = this.props;

    getOneService(id).then((service) => {
      console.log('foi familia__', service);
      this.populateState(service);
    });
  }

  populateState = (service) => {
    this.setState({
      edit: true,
      dialogContent: {
        title: 'Cancelar adição de serviço',
        message:
          'Ao cancelar você perderá todos os dados inseridos nesse arquivo, você tem certeza?',
        successMsg: 'Serviço editado com sucesso!',
        errorMsg: 'Edição de serviço cancelado'
      },
      titulo: service.titulo,
      detalhes: service.detalhes,
      requisitos: service.requisitos,
      perguntas: service.perguntas,
      faixa_de_preco: service.faixa_de_preco,
      faixa_de_tempo: service.faixa_de_tempo,
      referencias: service.referencias,
      filtros: service.filtros,
      selectFiltros: this.setDefaultFiltros(service.filtros)
    });
  };

  navigateToSerices = () => {
    const { history } = this.props;

    history.push('/servicos');
  };

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleTexts = (name, value) => {
    this.setState({ [name]: value });
  };

  handleReferenciasInputs = (event) => {
    const { name, value } = event.target;

    this.setState({ referencias_inputs: {...this.state.referencias_inputs, [name]: value} });
  }

  addReferencia = () => {
      const { nome, link } = this.state.referencias_inputs;

      console.log({ nome, link });

    this.setState({ 
        referencias: [...this.state.referencias, { nome, link }],
        referencias_inputs: {
            nome: '',
            link: '',
        }
     });

     console.log(this.state.referencias);
  };

  removeReferencia = (index) => {
    let referencias = [...this.state.referencias];

    referencias.splice(index, 1);

    this.setState({ referencias });
  };

  handleFiltrosChanges = (newValue) => {
    const filtros = newValue.map((item) => item.value);

    this.setState({ filtros, selectFiltros: newValue });
  };

  getFilters = () => {
    const { servicesFiltros } = this.props;
    const allFiltros = servicesFiltros.reduce((a, b) => {
      return [...a, ...b];
    }, []);

    const filtros = [...new Set(allFiltros)];

    console.log('fil', filtros);
    console.log('set', new Set(filtros));

    this.setState({ filtrosOptions: this.setDefaultFiltros(filtros) });
  };

  setDefaultFiltros = (filtrosData) => {
    const filtros = filtrosData.map((item) => ({ value: item, label: item }));

    console.log(filtros);
    return filtros;
  };

  handleFaixaDePreco = (e) => {
    const { name, value } = e.target;
    const faixa_de_preco = { ...this.state.faixa_de_preco };

    faixa_de_preco[name] = Number(value);

    this.setState({ faixa_de_preco });
  };

  handleFaixaDeTempo = (e) => {
    const { name, value } = e.target;
    const faixa_de_tempo = { ...this.state.faixa_de_tempo };

    faixa_de_tempo[name] = Number(value);

    this.setState({ faixa_de_tempo });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitting: true });

    const { fetchCreateService: createService, fetchUpdateService: updateService } = this.props;

    const serviceData = {
      titulo: this.state.titulo,
      detalhes: this.state.detalhes,
      requisitos: this.state.requisitos,
      perguntas: this.state.perguntas,
      faixa_de_preco: this.state.faixa_de_preco,
      faixa_de_tempo: this.state.faixa_de_tempo,
      referencias: this.state.referencias,
      filtros: this.state.filtros
    };

    console.log(serviceData);

    if (this.state.edit) {
      const { id } = this.props.match.params;

      updateService(id, serviceData)
        .then((re) => {
          this.setState({ submitting: false });

          this.showModal();

          toast.success(<SuccessMsg message={this.state.dialogContent.successMsg} />, {
            autoClose: 3000,
            closeButton: false,
            pauseOnHover: false,
            onClose: this.navigateToSerices
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ submitting: false });
        });

      return;
    }

    createService(serviceData)
      .then((res) => {
        console.log('foiaa_', res);
        this.setState({ submitting: false });

        this.showModal();

        toast.success(<SuccessMsg message={this.state.dialogContent.successMsg} />, {
          autoClose: 3000,
          closeButton: false,
          pauseOnHover: false,
          onClose: this.navigateToSerices
        });
      })
      .catch((err) => {
        console.log('moio', err);
        this.setState({ submitting: false });
      });
  };

  showModal = () => {
    this.setState({ modal: true });
  };
  showDialog = () => {
    this.setState({ dialog: true });
  };

  handleCancelEdit = () => {
    this.showModal();
    this.showDialog();
  };

  dialogCancelAction = () => {
    this.setState({ modal: false, dialog: false });
  };
  dialogSuccessAction = () => {
    this.setState({ dialog: false });

    toast.error(<ErrorMsg message={this.state.dialogContent.errorMsg} />, {
      autoClose: 3000,
      closeButton: false,
      pauseOnHover: false,
      onClose: this.navigateToSerices
    });
  };

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
                <h2>
                  Detalhamento do serviço<sup>*</sup>
                </h2>

                <div className="TextEditorContainer">
                  <TextEditor
                    name="detalhes"
                    textData={this.state.detalhes}
                    onChange={this.handleTexts}
                  />
                </div>

                <h2>
                  Requisitos para o serviço<sup>*</sup>
                </h2>
                <div className="TextEditorContainer">
                  <TextEditor
                    name="requisitos"
                    textData={this.state.requisitos}
                    onChange={this.handleTexts}
                  />
                </div>

                <h2>
                  Perguntas frequentes sobre esse serviço<sup>*</sup>
                </h2>
                <div className="TextEditorContainer">
                  <TextEditor
                    name="perguntas"
                    textData={this.state.perguntas}
                    onChange={this.handleTexts}
                  />
                </div>
              </div>
              <div className="camposPreco">
                <h2>
                  Faixa de preço<sup>*</sup>
                </h2>
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
                <h2>
                  Faixa de tempo<sup>*</sup>
                </h2>
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
                <h2>
                  Filtros<sup>*</sup>
                </h2>
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

                <div className="referencias">
                  <h2>Contrato do serviço</h2>
                  <ul>
                    {this.state.referencias.map((referencia) => (
                      <li key={referencia.link}>
                        <label>
                          <a href={referencia.link} target="_blank" rel="noreferrer">
                            <i>
                              <AiOutlineLink />
                            </i>
                            {referencia.nome || referencia.link}
                          </a>
                        </label>
                      </li>
                    ))}
                  </ul>

                  <div className="referencias-inputs">
                    <input
                      name="nome"
                      placeholder="Nome"
                      value={this.state.referencias_inputs.nome}
                      onChange={this.handleReferenciasInputs}
                    />
                    <input
                      name="link"
                      placeholder="Link"
                      value={this.state.referencias_inputs.link}
                      onChange={this.handleReferenciasInputs}
                    />
                  </div>

                  <button type="button" onClick={this.addReferencia}>
                    <i>
                      <AiOutlineLink />
                    </i>
                    Adicionar anexo
                  </button>
                </div>

                {/* NOOVO */}

                {/* <h2>Referências do serviço</h2>
                <button type="button" onClick={this.addReferencia}>
                  <i>
                    <AiOutlineLink />
                  </i>
                  Adicionar anexo
                </button>

                <div className="referencias-container">
                  {this.state.referencias.map((item, index) => (
                    <div key={index} className="referencias-item">
                      <input
                        name="nome"
                        placeholder="Nome"
                        value={item.nome}
                        onChange={(e) => {
                          this.handleReferenciasInputs(e, index);
                        }}
                      />
                      <input
                        name="link"
                        placeholder="Link"
                        value={item.link}
                        onChange={(e) => {
                          this.handleReferenciasInputs(e, index);
                        }}
                      />
                      <span className="delete-btn" onClick={() => this.removeReferencia(index)}>
                        <MdDelete />
                      </span>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
            <div className="SubmitOptions">
              <button disabled={this.state.submitting} type="submit" className="Salvar">
                Salvar
                {this.state.submitting && <MdAutorenew className="load-icon" />}
              </button>
              <button
                disabled={this.state.submitting}
                onClick={this.handleCancelEdit}
                type="button"
                className="Cancelar"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
        <Modal open={this.state.modal}>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    servicesFiltros: state.services.map((s) => s.filtros)
  };
};

const mapDispatchToProps = { fetchCreateService, fetchGetOneService, fetchUpdateService };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddServico));

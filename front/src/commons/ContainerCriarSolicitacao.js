import React, { Component } from 'react';
import '../commons/ContainerAdicionarProjeto.css';
import { AiOutlineLink } from 'react-icons/ai';
import { withRouter } from 'react-router';
import Select from 'react-select/creatable';
import Moment from 'react-moment';

import TextEditor from './TextEditor';
import { connect } from 'react-redux';
import Modal from './Modal';
import DialogConfirm, { ErrorMsg, SuccessMsg } from './DialogConfirm';
import { toast, ToastContainer } from 'react-toastify';

import { fetchCreateProjeto, fetchUpdateProjeto, fetchGetOneProjeto } from '../store/actions/projetosActions';
import AppDatePicker from './DatePicker';
import './DatePicker.css';
import axios from '../utils/axios';

class ContainerCriarSolicitacao extends Component {
  state = {
    edit: false,
    modal: false,
    dialog_message: 'Ao cancelar o arquivo voltará para solicitações e todas as novas alterações inseridas serão excluídas, você tem certeza?',
    dialog: false,
    solicitacao: null,
    submitting: false,
    titulo: '',
    respostas_cliente: '',
    parcelas: {
      primeira: {
        valor: '',
        pago: false
      },
      segunda: {
        valor: '',
        pago: false
      }
    },
    faixa_de_tempo: {
      min: '',
      max: ''
    },
    faixa_de_preco: {
      min: '',
      max: ''
    },
    referencias_cliente: [],
    referencias_designer: [],
    referencias_designer_inputs: {
      nome: '',
      link: ''
    },
    filtros: [],
    selectFiltros: [],
    filtrosOptions: [],
    contrato: [],
    contrato_inputs: {
      nome: '',
      link: ''
    },
    fases_projeto: [],
    fases_projeto_inputs: {
      nome: '',
      data: {
        start: null,
        end: null
      }
    },
    dados_cliente: {
        nome: '',
        email: '',
        telefone: ''
    }
  };

  handleDadosCliente = (e) => {
    const {name, value} = e.target;

    console.log({name, value});

    this.setState({dados_cliente: {...this.state.dados_cliente, [name]: value}})
  }

  componentDidMount() {
    console.log(this.props);
    this.getFilters();

    // const { id } = this.props.match.params;

    // if(id) {
    //   const { fetchGetOneProjeto: getOneProjeto } = this.props;

    //   getOneProjeto(id)
    //     .then(projeto=>{
    //       console.log(projeto);

    //       this.setState({
    //         edit: true,
    //         ...projeto,
    //         selectFiltros: this.setDefaultFiltros(projeto.filtros),
    //         dialog_message: 'Ao cancelar todas as novas alterações inseridas serão excluídas, você tem certeza?',
    //       })
          
    //     });
      
    //   return;
    // }

    const { id } = this.props.location.state;

    // this.populateState(solicitacao);
  }

  populateState = (solicitacao) => {

    this.setState({
      solicitacao,
      respostas_cliente: solicitacao.respostas_cliente,
      referencias_designer: solicitacao.service.referencias,
      filtros: solicitacao.service.filtros,
      selectFiltros: this.setDefaultFiltros(solicitacao.service.filtros)
    });
  };

  handleTextEditor = (name, value) => {
    this.setState({ [name]: value });
  };

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleParcelas = (e) => {
    const { name, value } = e.target;

    const [parcelaNum, campo] = String(name).split('.');

    const parcelas = { ...this.state.parcelas };

    if (campo === 'pago') {
      parcelas[parcelaNum][campo] = !parcelas[parcelaNum][campo];

      this.setState({ parcelas });
      return;
    }

    parcelas[parcelaNum][campo] = Number(value);

    this.setState({ parcelas });
  };

  handleFaixaDeTempo = (e) => {
    const { name, value } = e.target;
    const faixa_de_tempo = { ...this.state.faixa_de_tempo };

    faixa_de_tempo[name] = Number(value);

    this.setState({ faixa_de_tempo });
  };
  handleFaixaDePreco = (e) => {
    const { name, value } = e.target;
    const faixa_de_preco = { ...this.state.faixa_de_preco };

    faixa_de_preco[name] = Number(value);

    this.setState({ faixa_de_preco });
  };

  handleReferenciasDesignerInputs = (e) => {
    const { name, value } = e.target;
    const referencias_designer_inputs = { ...this.state.referencias_designer_inputs };

    referencias_designer_inputs[name] = value;

    this.setState({ referencias_designer_inputs });
  };
  addReferenciasDesignerInputs = () => {
    const { nome, link } = this.state.referencias_designer_inputs;

    this.setState({
      referencias_designer: [...this.state.referencias_designer, { nome, link }],
      referencias_designer_inputs: {
        nome: '',
        link: ''
      }
    });
  };

  handleFiltrosChanges = (newValue) => {
    const filtros = newValue.map((item) => item.value)

    this.setState({filtros, selectFiltros: newValue});
  }

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

  handleContratosInputs = (e) => {
    const { name, value } = e.target;
    const contrato_inputs = { ...this.state.contrato_inputs };

    contrato_inputs[name] = value;

    this.setState({ contrato_inputs });
  };

  addContratosInputs = () => {
    const { nome, link } = this.state.contrato_inputs;

    this.setState({
      contrato: [...this.state.contrato, { nome, link }],
      contrato_inputs: {
        nome: '',
        link: ''
      }
    });
  };

  handleDate = (dates) => {
    const [start, end] = dates;

    const fases_projeto_inputs = { ...this.state.fases_projeto_inputs };

    fases_projeto_inputs.data = { start, end };

    this.setState({ fases_projeto_inputs });

    // console.log(a);
  };

  handleFasesDoProjetoInputs = (e) => {
    const { name, value } = e.target;
    const fases_projeto_inputs = { ...this.state.fases_projeto_inputs };

    fases_projeto_inputs[name] = value;

    this.setState({ fases_projeto_inputs });
  };
  addFasesDoProjetoInputs = () => {
    const { nome, data } = this.state.fases_projeto_inputs;

    this.setState({
      fases_projeto: [...this.state.fases_projeto, { nome, data, completo: false }],
      fases_projeto_inputs: {
        nome: '',
        data: {
          start: null,
          end: null
        }
      }
    });
  };

  navigateToProjetoDetalhes = (id) => () => {
    const { history } = this.props;

    history.push(`/detalheprojeto/${id}`);
  };

  navigateToProjetoSolicitacoes = () => {
    const { history } = this.props;

    history.push(`/solicitacoes`);
  };

  showDialog = () => {
    this.setState({
      dialog: true,
      modal: true
    });
  };

  hiddenDialog = () => {
    this.setState({
      dialog: false,
      modal: false
    });
  };

  cancelarCriacao = () => {
    this.setState({ dialog: false });
    toast.error(
      <ErrorMsg
        message={
          this.state.edit?
          (
          <span>
            <strong>Edição de projeto cancelada</strong>
            <br />Nada foi alterado
          </span>
          ) : 
          (
          <span>
            <strong>Criação de novo projeto cancelada</strong>
            <br />O arquivo voltou para solicitações
          </span>
          )
        }
      />,
      {
        autoClose: 3000,
        closeButton: false,
        pauseOnHover: false,
        onClose: this.state.edit? this.navigateToProjetoDetalhes(this.state._id) : this.navigateToProjetoSolicitacoes
      }
    );
  };

  handleFasesDoProjeto = (i) => () => {

    const { fases_projeto } = this.state;
    
    fases_projeto[i].completo = !fases_projeto[i].completo;

    this.setState({fases_projeto})

  }

  criarProjeto = () => {

    const { id } = this.props.location.state;
      
    let projetoData = {
        user: this.props.user._id,
        service: id,
      dados_cliente: this.state.dados_cliente,
      referencias_cliente: this.state.referencias_designer,
      respostas_cliente: this.state.respostas_cliente,
      faixa_de_tempo: this.state.faixa_de_tempo,
      faixa_de_preco: this.state.faixa_de_preco,
        
    };

    console.log(projetoData);

    axios.post('/solicitacoes', projetoData)
        .then(() => {
            console.log('cripou famiia !!');
            this.setState({modal: true})
            
            toast.success(<SuccessMsg message="Solicitação criada" />, {
                    autoClose: 3000,
                    closeButton: false,
                    pauseOnHover: false,
                    onClose: this.navigateToProjetoSolicitacoes
                  });
        })

    const { fetchCreateProjeto: createProjeto, fetchUpdateProjeto: updateProjeto } = this.props;

    // if(this.state.edit) {
    //   // updateProjeto
    //   // projetoData = {
    //   //   titulo: this.state.titulo,
    //   //   service: this.state.solicitacao.service,
    //   //   solicitacao: this.state.solicitacao._id,
    //   //   dados_cliente: this.state.solicitacao.dados_cliente,
    //   //   referencias_cliente: this.state.solicitacao.referencias_cliente,
    //   //   respostas_cliente: this.state.respostas_cliente,
    //   //   contrato: this.state.contrato,
    //   //   fases_projeto: this.state.fases_projeto,
    //   //   parcelas: this.state.parcelas,
    //   //   faixa_de_tempo: this.state.faixa_de_tempo,
    //   //   filtros: this.state.filtros,
    //   //   referencias_designer: this.state.referencias_designer
    //   // };

    //   console.log(projetoData);

    //   updateProjeto(this.state._id, projetoData)
    //     .then(res=>{
    //       console.log('atualixou familia', res);

    //       this.setState({ modal: true });

    //       toast.success(<SuccessMsg message="Projeto editado com sucesso!" />, {
    //         autoClose: 3000,
    //         closeButton: false,
    //         onClose: this.navigateToProjetoDetalhes(this.state._id)
    //       });
          
    //     })
      
    //   return;
    // }

    // createProjeto(projetoData).then((res) => {
    //   console.log('criou familia', res);
    //   this.setState({ modal: true });

    //   toast.success(<SuccessMsg message="O projeto está em andamento" />, {
    //     autoClose: 3000,
    //     closeButton: false,
    //     onClose: this.navigateToProjetoDetalhes(res._id)
    //   });
    // });

    // console.log(projetoData);
  };

  render() {
    const { solicitacao } = this.state;

    console.log(this.state);
    
    // if (!solicitacao) {
    //   return 'nada aqui';
    // }

    return (
      <section className="ContainerAddProjeto">
        <div className="SessaoProjeto">
          <form>
            <div className="cabecalhoProjeto">
              {/* <input
                name="titulo"
                value={this.state.titulo}
                onChange={this.handleInput}
                type="text"
                placeholder="Adicionar título do projeto"
              /> */}
            </div>

            <div className="detalhesProjeto">
              <div className="camposPreco">
                <h2>Dados do cliente</h2>
                <p>
                  <strong>Nome completo</strong>
                </p>
                <input name="nome" style={{width: '90%'}} value={this.state.dados_cliente.nome} onChange={this.handleDadosCliente} />
                <br />
                <p>
                  <strong>E-mail</strong>
                </p>
                <input name="email" style={{width: '90%'}} value={this.state.dados_cliente.email} onChange={this.handleDadosCliente} />
                <br />
                <p>
                  <strong>Telefone</strong>
                </p>
                <input name="telefone" style={{width: '90%'}} value={this.state.dados_cliente.telefone} onChange={this.handleDadosCliente} />
                <br />
                <h2>Faixa de preço</h2>
                <ul className="numericInputs">
                  <li>
                    <div className="selectPreco">
                      {this.state.edit && (
                        <input
                          type="checkbox"
                          name="primeira.pago"
                          checked={this.state.parcelas.primeira.pago}
                          onChange={this.handleParcelas}
                        />
                      )}
                      <legend>No mínimo</legend>
                    </div>
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
                    <div className="selectPreco">
                      {this.state.edit && (
                        <input
                          type="checkbox"
                          name="segunda.pago"
                          checked={this.state.parcelas.segunda.pago}
                          onChange={this.handleParcelas}
                        />
                      )}
                      <legend>No máximo</legend>
                    </div>
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
                <h2>Faixa de tempo</h2>
                <ul className="numericInputs">
                  <li>
                    <legend>No mínimo</legend>
                    <div>
                      <label>Semanas</label>
                      <input
                        type="number"
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
                        name="max"
                        value={this.state.faixa_de_tempo.max}
                        onChange={this.handleFaixaDeTempo}
                      />
                    </div>
                  </li>
                </ul>

                <div className="referencias">
                  <h2>Referências do cliente</h2>
                  <ul>
                    {this.state.referencias_designer.map((ref_des) => (
                      <li key={ref_des.link}>
                        <label>
                          <a href={ref_des.link} target="_blank" rel="noreferrer">
                            <i>
                              <AiOutlineLink />
                            </i>
                            {ref_des.nome || ref_des.link}
                          </a>
                        </label>
                      </li>
                    ))}
                    {/* <li><label><a href="" target="_blank"><i><AiOutlineLink/></i>Vídeo do Youtube</a></label></li><br/>
                                    <li><label><a href="" target="_blank"><i><AiOutlineLink/></i>https://determined-no...</a></label></li> */}
                  </ul>

                  <div className="referencias-inputs">
                    <input
                      name="nome"
                      placeholder="Nome"
                      value={this.state.referencias_designer_inputs.nome}
                      onChange={this.handleReferenciasDesignerInputs}
                    />
                    <input
                      name="link"
                      placeholder="Link"
                      value={this.state.referencias_designer_inputs.link}
                      onChange={this.handleReferenciasDesignerInputs}
                    />
                  </div>

                  <button type="button" onClick={this.addReferenciasDesignerInputs}>
                    <i>
                      <AiOutlineLink />
                    </i>
                    Adicionar anexo
                  </button>
                </div>


                {/* <h2>Contrato do serviço</h2>
                            <button><i><AiOutlineLink/></i>Adicionar anexo</button> */}
              </div>
              <div className="camposTexto">
                <h2>Respostas dos requisitos</h2>
                <TextEditor
                  name="respostas_cliente"
                  textData={this.state.respostas_cliente}
                  onChange={this.handleTextEditor}
                />

              </div>
            </div>
            <div className="SubmitOptions">
              <button type="button" className="Salvar" onClick={this.criarProjeto}>
                Salvar
              </button>
              <button type="button" className="Cancelar" onClick={this.showDialog}>
                Cancelar
              </button>
            </div>
          </form>
        </div>

        <Modal open={this.state.modal}>
          <DialogConfirm
            open={this.state.dialog}
            title="Cancelar edição do projeto"
            message={this.state.dialog_message}
            successBtnText="Sim, quero cancelar"
            cancelBtnText="Voltar para edição"
            onSuccess={this.navigateToProjetoSolicitacoes}
            onCancel={this.hiddenDialog}
          />
        </Modal>
        <ToastContainer />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    servicesFiltros: state.services.map((s) => s.filtros),
    user: state.user,
  };
};

const mapDispatchToProps = { fetchCreateProjeto, fetchUpdateProjeto, fetchGetOneProjeto };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContainerCriarSolicitacao));

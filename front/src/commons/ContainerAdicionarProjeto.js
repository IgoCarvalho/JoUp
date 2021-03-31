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

export class ContainerAdicionarProjeto extends Component {
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
    }
  };

  componentDidMount() {
    console.log(this.props);
    this.getFilters();

    const { id } = this.props.match.params;

    if(id) {
      const { fetchGetOneProjeto: getOneProjeto } = this.props;

      getOneProjeto(id)
        .then(projeto=>{
          console.log(projeto);

          this.setState({
            edit: true,
            ...projeto,
            selectFiltros: this.setDefaultFiltros(projeto.filtros),
            dialog_message: 'Ao cancelar todas as novas alterações inseridas serão excluídas, você tem certeza?',
          })
          
        });
      
      return;
    }

    const { solicitacao } = this.props.location.state;

    this.populateState(solicitacao);
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
    let projetoData = {
      titulo: this.state.titulo,
      service: this.state.solicitacao.service,
      solicitacao: this.state.solicitacao._id,
      dados_cliente: this.state.solicitacao.dados_cliente,
      referencias_cliente: this.state.solicitacao.referencias_cliente,
      respostas_cliente: this.state.respostas_cliente,
      contrato: this.state.contrato,
      fases_projeto: this.state.fases_projeto,
      parcelas: this.state.parcelas,
      faixa_de_tempo: this.state.faixa_de_tempo,
      filtros: this.state.filtros,
      referencias_designer: this.state.referencias_designer
    };

    const { fetchCreateProjeto: createProjeto, fetchUpdateProjeto: updateProjeto } = this.props;

    if(this.state.edit) {
      // updateProjeto
      // projetoData = {
      //   titulo: this.state.titulo,
      //   service: this.state.solicitacao.service,
      //   solicitacao: this.state.solicitacao._id,
      //   dados_cliente: this.state.solicitacao.dados_cliente,
      //   referencias_cliente: this.state.solicitacao.referencias_cliente,
      //   respostas_cliente: this.state.respostas_cliente,
      //   contrato: this.state.contrato,
      //   fases_projeto: this.state.fases_projeto,
      //   parcelas: this.state.parcelas,
      //   faixa_de_tempo: this.state.faixa_de_tempo,
      //   filtros: this.state.filtros,
      //   referencias_designer: this.state.referencias_designer
      // };

      console.log(projetoData);

      updateProjeto(this.state._id, projetoData)
        .then(res=>{
          console.log('atualixou familia', res);

          this.setState({ modal: true });

          toast.success(<SuccessMsg message="Projeto editado com sucesso!" />, {
            autoClose: 3000,
            closeButton: false,
            pauseOnHover: false,
            onClose: this.navigateToProjetoDetalhes(this.state._id)
          });
          
        })
      
      return;
    }

    createProjeto(projetoData).then((res) => {
      console.log('criou familia', res);
      this.setState({ modal: true });

      toast.success(<SuccessMsg message="O projeto está em andamento" />, {
        autoClose: 3000,
        closeButton: false,
        pauseOnHover: false,
        onClose: this.navigateToProjetoDetalhes(res._id)
      });
    });

    console.log(projetoData);
  };

  render() {
    const { solicitacao } = this.state;

    console.log(this.state);
    
    if (!solicitacao) {
      return 'nada aqui';
    }

    return (
      <section className="ContainerAddProjeto">
        <div className="SessaoProjeto">
          <form>
            <div className="cabecalhoProjeto">
              <input
                name="titulo"
                value={this.state.titulo}
                onChange={this.handleInput}
                type="text"
                placeholder="Adicionar título do projeto"
              />
            </div>

            <div className="detalhesProjeto">
              <div className="camposPreco">
                <h2>Dados do cliente</h2>
                <p>
                  <strong>Nome completo</strong>
                </p>
                <p>{this.state.solicitacao.dados_cliente.nome}</p>
                <br />
                <p>
                  <strong>E-mail</strong>
                </p>
                <p>{this.state.solicitacao.dados_cliente.email}</p>
                <br />
                <p>
                  <strong>Telefone</strong>
                </p>
                <p>{this.state.solicitacao.dados_cliente.telefone}</p>
                <br />
                <h2>Preço do projeto</h2>
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
                      <legend>1ª parcela</legend>
                    </div>
                    <div>
                      <label>R$</label>
                      <input
                        type="number"
                        name="primeira.valor"
                        value={this.state.parcelas.primeira.valor}
                        onChange={this.handleParcelas}
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
                      <legend>2ª parcela</legend>
                    </div>
                    <div>
                      <label>R$</label>
                      <input
                        type="number"
                        name="segunda.valor"
                        value={this.state.parcelas.segunda.valor}
                        onChange={this.handleParcelas}
                      />
                    </div>
                  </li>
                </ul>
                <h2>Faixa de tempo do projeto</h2>
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
                  <h2>Referencias do cliente</h2>
                  <ul>
                    {this.state.solicitacao.referencias_cliente.map((ref_cli) => (
                      <li key={ref_cli.link}>
                        <label>
                          <a href={ref_cli.link} target="_blank" rel="noreferrer">
                            <i>
                              <AiOutlineLink />
                            </i>
                            {ref_cli.name || ref_cli.link}
                          </a>
                        </label>
                      </li>
                    ))}
                    {/* <li><label><a href="" target="_blank"><i><AiOutlineLink/></i>Vídeo do Youtube</a></label></li><br/>
                                    <li><label><a href="" target="_blank"><i><AiOutlineLink/></i>https://determined-no...</a></label></li> */}
                  </ul>
                </div>

                <div className="referencias">
                  <h2>Referências do designer</h2>
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

                <h2>Filtros do projeto</h2>
                {/* <button><i><FaPlus/></i>Adicionar filtro</button> */}
                <div className="select-container">
                  <Select
                    placeholder="Adicione filtros"
                    options={this.state.filtrosOptions}
                    isMulti
                    onChange={this.handleFiltrosChanges}
                    value={this.state.selectFiltros}
                  />
                </div>

                <div className="referencias">
                  <h2>Contrato do serviço</h2>
                  <ul>
                    {this.state.contrato.map((contrato) => (
                      <li key={contrato.link}>
                        <label>
                          <a href={contrato.link} target="_blank" rel="noreferrer">
                            <i>
                              <AiOutlineLink />
                            </i>
                            {contrato.nome || contrato.link}
                          </a>
                        </label>
                      </li>
                    ))}
                  </ul>

                  <div className="referencias-inputs">
                    <input
                      name="nome"
                      placeholder="Nome"
                      value={this.state.contrato_inputs.nome}
                      onChange={this.handleContratosInputs}
                    />
                    <input
                      name="link"
                      placeholder="Link"
                      value={this.state.contrato_inputs.link}
                      onChange={this.handleContratosInputs}
                    />
                  </div>

                  <button type="button" onClick={this.addContratosInputs}>
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

                <div className="fasesDesenvolvimentoProj">
                  <h2>Fases de desenvolvimento</h2>
                  {/* <div className="progresProj">
                                        <label>69%</label>
                                        <div className="cinza">
                                            <div className="roxo"></div>
                                        </div>
                                    </div> */}
                  <table className="fasesProjeto">
                    {this.state.fases_projeto.map((fase, i) => (
                      <React.Fragment key={`${fase.nome}-${i}`}>
                        <tr>
                          <td>{this.state.edit && <input checked={fase.completo} onChange={this.handleFasesDoProjeto(i)} type="checkbox" />}</td>
                          <td>
                            <h3>{`Fase ${i + 1}`}</h3>
                            <p>{fase.nome}</p>
                          </td>
                          <td>
                            <label className="prazoFases">
                              <Moment format="D MMM" locale="pt-br">
                                {fase.data.start}
                              </Moment>
                              {' - '}
                              <Moment format="D MMM" locale="pt-br">
                                {fase.data.end}
                              </Moment>
                            </label>
                          </td>
                        </tr>
                        <br />
                      </React.Fragment>
                    ))}
                  </table>
                  <div className="adicionarFase">
                    {/* <input className="nomeFase" placeholder="Nome da fase"></input> */}
                    <div className="referencias-inputs app-calendario">
                      <input
                        name="nome"
                        placeholder="Nome"
                        value={this.state.fases_projeto_inputs.nome}
                        onChange={this.handleFasesDoProjetoInputs}
                      />
                      {/* <input
                                                name="link"
                                                placeholder="Link"
                                                value={this.state.contrato_inputs.link}
                                                onChange={this.handleContratosInputs}
                                            /> */}
                      <AppDatePicker
                        selected={this.state.fases_projeto_inputs.data.start}
                        onChange={this.handleDate}
                        startDate={this.state.fases_projeto_inputs.data.start}
                        endDate={this.state.fases_projeto_inputs.data.end}
                        selectsRange
                        shouldCloseOnSelect={false}
                      />
                      {/* <Oi /> */}
                    </div>
                    {/* <input className="prazoFase" placeholder="Prazo da fase"></input> */}
                    <button
                      type="button"
                      onClick={this.addFasesDoProjetoInputs}
                      className="botaoCinzaRedondo verde"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
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
            onSuccess={this.cancelarCriacao}
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
    servicesFiltros: state.services.map((s) => s.filtros)
  };
};

const mapDispatchToProps = { fetchCreateProjeto, fetchUpdateProjeto, fetchGetOneProjeto };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContainerAdicionarProjeto));

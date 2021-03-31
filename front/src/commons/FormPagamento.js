import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import InputMask from 'react-input-mask';

import '../commons/FormCadastro.css';
import '../commons/BotaoRoxo.css';
import { connect } from 'react-redux';
import { fetchPlan } from '../store/actions/userActions';

export class FormPagamento extends Component {
  state = {
    form: {
      titular: '',
      cpf: '',
      numCartao: '',
      dataValidade: '',
      cvv: '',
      formaPagamento: ''
    },
    submitting: false
  };

  handleInputs = (event) => {
    let { name, value } = event.target;
    const { form } = this.state;

    this.setState({ form: { ...form, [name]: value } });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.form);

    const { plan } = this.props.location.state;
    const { fetchPlan: contractPlan, history } = this.props;

    this.setState({ submitting: true });

    contractPlan({
      plan,
      ...this.state.form
    })
      .then((res) => {
        console.log('contratou clã clã');
        history.push('/visaogeral');
      })
      .catch(() => {
        this.setState({ submitting: false });
      });
  };

  render() {
    return (
      <div className="FormCadastro">
        <form onSubmit={this.handleSubmit}>
          <br />
          <input
            type="text"
            value={this.state.form.titular}
            onChange={this.handleInputs}
            name="titular"
            placeholder="Nome do titular"
          />
          <InputMask
            mask="999.999.999-99"
            type="text"
            value={this.state.form.cpf}
            onChange={this.handleInputs}
            name="cpf"
            placeholder="CPF"
          />
          <InputMask
            mask="9999-9999-9999-9999"
            value={this.state.form.numCartao}
            onChange={this.handleInputs}
            name="numCartao"
            placeholder="Número do cartão"
          />

          <InputMask
            mask="99/99"
            type="text"
            value={this.state.form.dataValidade}
            onChange={this.handleInputs}
            name="dataValidade"
            placeholder="Data de validade"
          />
          <InputMask
            mask="9999"
            type="text"
            value={this.state.form.cvv}
            onChange={this.handleInputs}
            name="cvv"
            placeholder="Código de segurança (CVV)"
          />
          <legend>
            <strong className="formapagamento">Forma de pagamento</strong>
          </legend>
          <table className="seletorFormaPagamento">
            <tr>
              <td>
                <input
                  type="radio"
                  id="credito"
                  onChange={this.handleInputs}
                  name="formaPagamento"
                  value="credito"
                />
              </td>
              <td>
                <label htmlFor="credito">Crédito</label>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="radio"
                  id="debito"
                  onChange={this.handleInputs}
                  name="formaPagamento"
                  value="debito"
                />
              </td>
              <td>
                <label htmlFor="debito">Débito</label>
              </td>
            </tr>
          </table>

          <br />
          <button disabled={this.state.submitting} className="bRoxoRedondo">
            Próximo
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { fetchPlan };

export default withRouter(connect(undefined, mapDispatchToProps)(FormPagamento));

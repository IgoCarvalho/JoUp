import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../commons/FormCadastro.css';
import { MdVisibilityOff } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { connect } from 'react-redux';

import { fetchSignup } from '../store/actions/userActions';

export class FormCadastro extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    submitting: false
  };

  handleForm = (e) => {
    const { name, value } = e.target;

    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, submitting: true });

    const { fetchSignup: signup, history } = this.props;
    const { name, email, password } = this.state;

    signup({ name, email, password })
      .then(() => {
        console.log('cadastrado');
        history.push('opcoescadastro');
      })
      .catch((errorMessage) => {
        this.setState({ submitting: false });
        console.log(errorMessage);
      });

    console.log(this.props);
  };

  render() {
    return (
      <div className="FormCadastro">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Nome de usuário"
            name="name"
            value={this.state.name}
            onChange={this.handleForm}
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={this.state.email}
            onChange={this.handleForm}
          />
          <div className="senha">
            <input
              type="password"
              placeholder="Digite sua senha"
              name="password"
              value={this.state.password}
              onChange={this.handleForm}
            />
            <button>
              <MdVisibilityOff />
            </button>
          </div>
          <div className="senha">
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              name="repeatPassword"
              value={this.state.repeatPassword}
              onChange={this.handleForm}
            />
            <button>
              <MdVisibilityOff />
            </button>
          </div>
          <br />
          <button disabled={this.state.submitting} className="bRoxoRedondo">
            Confirmar
          </button>
          <fieldset>
            <legend>ou</legend>
            <button className="bRoxoRedondo">
              <i>
                <FcGoogle />
              </i>
              Cadastre-se com o Google
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { fetchSignup };

export default withRouter(connect(undefined, mapDispatchToProps)(FormCadastro));

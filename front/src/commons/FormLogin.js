import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../commons/BotaoRoxo.css';
import '../commons/FormLogin.css';
import { FcGoogle } from 'react-icons/fc';
import { MdVisibilityOff } from 'react-icons/md';
import { connect } from 'react-redux';

import { fetchLogin } from '../store/actions/userActions';

export class FormLogin extends Component {
  state = {
    credential: '',
    password: '',
    submitting: false
  };

  handleForm = (e) => {
    const { name, value } = e.target;

    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitting: true });

    const { fetchLogin: login, history } = this.props;
    const { credential, password } = this.state;

    login(credential, password)
      .then(() => {
        console.log('logado');
        history.push('visaogeral');
      })
      .catch((errorMessage) => {
        this.setState({ submitting: false });
        console.log(errorMessage);
      });

    console.log(this.props);
  };

  render() {
    return (
      <div className="FormLogin">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Nome ou e-mail"
            name="credential"
            value={this.state.credential}
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
          <label>
            Esqueceu a sua senha? <Link to="redefinirsenha">Redefinir</Link>
          </label>
          <br />
          <button disabled={this.state.submitting} className="bRoxoRedondo">
            Entrar
          </button>
          <fieldset>
            <legend>ou</legend>
            <button className="bRoxoRedondo">
              <i>
                <FcGoogle />
              </i>{' '}
              Entrar com o Google
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { fetchLogin };

export default withRouter(connect(undefined, mapDispatchToProps)(FormLogin));

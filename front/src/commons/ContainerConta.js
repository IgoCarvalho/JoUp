import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../commons/ContainerConta.css';
import { FiEdit } from "react-icons/fi";
import { MdDone} from "react-icons/md";
import cardicon from '../images/mastercard.svg';
import { connect } from 'react-redux';
import { PlanoBasico, PlanoCompleto, PlanoPremium } from './PlanosGenericos';

class ContainerConta extends Component {
    renderPlanData = () => {
        const { user } = this.props;

        switch (user.plan.name) {
            case 'Básico':
                return <PlanoBasico />;
            case 'Completo':
                return <PlanoCompleto />;
            case 'Premium':
                return <PlanoPremium />;

            default:
                return <p>foi mal, compra um plano aê!</p>
        }

    }

    parseCartaoNum = (numCartao) => {
        return numCartao.split('-')[3]
    }
    
    render() {
        const { user } = this.props;
        
        return (
            <section className="ContainerConta">
             <div className="topSessao">
                <h2>Minha conta</h2>
                    <button className="bRoxoRedondo"><Link to=""><i><FiEdit/></i>Editar conta</Link></button> 
                </div>
                <div className="MainSectionConta">
                    <div className="dadosBasicos">
                        <div className="primary">
                            <h3>Acesso e segurança</h3>
                            <p><strong>Email</strong></p>
                            <p>{user.email}</p>
                            <p><strong>Nome de usuário</strong></p>
                            <p>{user.username}</p>
                            <p><strong>Senha</strong></p>
                            <p>**************</p>
                            <p><strong>Validação de identidade</strong></p>
                            <p>Não validado</p>
                        </div>
                        <div className="secundary">
                        <h3>Dados pessoais</h3>
                            <p><strong>Nome completo</strong></p>
                            <p>{user.name}</p>
                            <p><strong>Data de Nascimento</strong></p>
                            <p>28/09/1998</p>
                            <p><strong>Telefone</strong></p>
                            <p>(88) 9 9782 1078</p>
                        </div>
                    </div>
                    <div className="dadosPlano">
                    <h3>Plano atual</h3>
                    <table className="planoAtual">
                        {
                            this.renderPlanData()
                        }
                    </table>
                    <br/>
                    {user.creditCard && <div className="primary">
                            <h3>Dados de Pagamento</h3>
                            <p><strong>Nome do titular</strong></p>
                            <p>{user.creditCard.titular}</p>
                            <p><strong>CPF</strong></p>
                            <p>{user.creditCard.cpf}</p>
                            <p><strong>Número do cartão</strong></p>
                            <div className="card">
                            <img src={cardicon}/><p>**** **** **** {this.parseCartaoNum(user.creditCard.numCartao)}</p>
                            </div>
                            <p><strong>Data de validade</strong></p>
                            <p>{user.creditCard.dataValidade}</p>
                            <p><strong>Código de segurança (CVV)</strong></p>
                            <p>****</p>
                            <p><strong>Forma de pagamento</strong></p>
                            <ul className="pagamentos">
                            <li><input defaultChecked={user.creditCard.formaPagamento === 'credito'} disabled type="radio" id="credito" name="pag" value="credito"/>
                            <label for="male">Crédito</label></li>
                            <li><input defaultChecked={user.creditCard.formaPagamento === 'debito'} disabled type="radio" id="debito" name="pag" value="debito"/>
                            <label for="female">Débito</label></li>
                            </ul>
                    </div>}
                    <span></span>
                    </div>
                </div> 
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }    
}

export default connect(mapStateToProps)(ContainerConta);

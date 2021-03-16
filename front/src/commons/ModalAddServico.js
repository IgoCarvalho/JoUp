import React, { Component } from 'react';
import '../commons/ModalAddServico.css';
import { AiOutlineBold,AiOutlineOrderedList, AiOutlineUnorderedList,AiOutlineItalic,AiOutlineLink} from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

export class ModalAddServico extends Component {
    render() {
        return (
            <section className="ContainerModalServico">
                <div className="ModalServico">
                    <form>
                        <div className="cabecalhoServico">
                            <input type="text" placeholder="Adicionar título do serviço"/>
                        </div>
                        <div className="detalhesServico">
                            <div className="camposTexto">
                                <h2>Detalhamento do serviço<sup>*</sup></h2>
                                <div className="editTextoOptions">
                                <button><AiOutlineBold/></button>
                                <button><AiOutlineItalic/></button>
                                <button><AiOutlineOrderedList/></button>
                                <button><AiOutlineUnorderedList/></button>
                                </div>
                                <textarea className="textarea1">
                                Objetivos e benefícios do serviço:
                                Este serviço tem como objetivo contribuir para ...  gerando os benefícios tais em relação ao problema a ser solucionado.
                                </textarea>
                                <h2>Requisitos para o serviço<sup>*</sup></h2>
                                <div className="editTextoOptions">
                                <button><AiOutlineBold/></button>
                                <button><AiOutlineItalic/></button>
                                <button><AiOutlineOrderedList/></button>
                                <button><AiOutlineUnorderedList/></button>
                                </div>
                                <textarea className="textarea2">
                                Natureza do projeto:
                                * Quais os objetivos básicos do projeto?
                                * Quais resultados desejáveis?
                                * Por que esse projeto tornou-se necessário? Por que agora?
                                Análise de mercado:
                                * Qual o segmento e o nicho do seu negócio? (Exemplo: moda - bijuterias)
                                * Quais os seus concorrentes e/ou produtos similares?
                                Público-alvo:
                                * Quem esse projeto deve atingir?
                                * Qual experiência o projeto espera proporcionar?
                                </textarea>
                                <h2>Perguntas frequentes sobre esse serviço<sup>*</sup></h2>
                                <div className="editTextoOptions">
                                <button><AiOutlineBold/></button>
                                <button><AiOutlineItalic/></button>
                                <button><AiOutlineOrderedList/></button>
                                <button><AiOutlineUnorderedList/></button>
                                </div>
                                <textarea className="textarea3">
                                Pergunta 1?
                                Resposta da pergunta 1
                                Pergunta 2?
                                Resposta da pergunta 2
                                Pergunta 3?
                                Resposta da pergunta 3
                                Pergunta 4?
                                Resposta da pergunta 4
                                Pergunta 5?
                                Resposta da pergunta 5
                                </textarea>
                            </div>
                            <div className="camposPreco">
                            <h2>Faixa de preço<sup>*</sup></h2>
                                <ul className="numericInputs">
                                    <li><legend>No mínimo</legend>
                                    <div><label>R$</label><input type="number" min="1" max="8"/></div></li>
                                    <li><legend>No máximo</legend>
                                    <div><label>R$</label><input type="number" min="1" max="8"/></div></li>
                                </ul>
                            <h2>Faixa de tempo<sup>*</sup></h2>
                                <ul className="numericInputs">
                                    <li><legend>No mínimo</legend>
                                    <div><label>Semanas</label><input type="number" min="1" max="8"/></div></li>
                                    <li><legend>No máximo</legend>
                                    <div><label>Semanas</label><input type="number" min="1" max="8"/></div></li>
                                </ul>
                            <h2>Filtros<sup>*</sup></h2>
                            <button><i><FaPlus/></i>Adicionar filtro</button>
                            <h2>Referências do serviço</h2>
                            <button><i><AiOutlineLink/></i>Adicionar anexo</button>
                            </div>
                        </div>
                        <div className="SubmitOptions">
                            <button type="submit" className="Salvar">Salvar</button>
                            <button className="Cancelar">Cancelar</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default ModalAddServico

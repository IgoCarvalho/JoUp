import React, { Component } from 'react';
import '../commons/ContainerAdicionarProjeto.css';
import { AiOutlineBold,AiOutlineOrderedList, AiOutlineUnorderedList,AiOutlineItalic,AiOutlineLink} from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

export class ContainerAdicionarProjeto extends Component {
    render() {
        return (
            <section className="ContainerAddProjeto"> 
                <div className="SessaoProjeto">
                    <form>
                        <div className="cabecalhoProjeto">
                            <input type="text" placeholder="Adicionar título do projeto"/>
                        </div>
                        <div className="detalhesProjeto">
                            <div className="camposTexto">
                                <h2>Detalhamento do projeto</h2>
                                <div className="editTextoOptions">
                                <button><AiOutlineBold/></button>
                                <button><AiOutlineItalic/></button>
                                <button><AiOutlineOrderedList/></button>
                                <button><AiOutlineUnorderedList/></button>
                                </div>
                                <textarea className="textarea1">
                                Objetivos do projeto:
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
                                <h2>Dados do cliente</h2>
                                <div className="editTextoOptions">
                                <button><AiOutlineBold/></button>
                                <button><AiOutlineItalic/></button>
                                <button><AiOutlineOrderedList/></button>
                                <button><AiOutlineUnorderedList/></button>
                                </div>
                                <textarea className="textarea2">
                               
                                </textarea>
                               
                            </div>
                            <div className="camposPreco">
                            <h2>Preço</h2>
                                <ul className="numericInputs">
                                    <li><div className="labelcheckbox"><input className="checkbox" type="checkbox"></input><legend>1ª parcela</legend></div>
                                    <div><label>R$</label><input type="number" min="1" max="8"/></div></li>
                                    
                                    <li><div className="labelcheckbox"><input type="checkbox"></input><legend>2ª parcela</legend></div>
                                    <div><label>R$</label><input type="number" min="1" max="8"/></div></li>
                                </ul>
                            <h2>Faixa de tempo</h2>
                                <ul className="numericInputs">
                                    <li><legend>No mínimo</legend>
                                    <div><label>Semanas</label><input type="number" min="1" max="8"/></div></li>
                                    <li><legend>No máximo</legend>
                                    <div><label>Semanas</label><input type="number" min="1" max="8"/></div></li>
                                </ul>
                            <h2>Filtros</h2>
                            <button><i><FaPlus/></i>Adicionar filtro</button>
                            <h2>Referências</h2>
                            <button><i><AiOutlineLink/></i>Adicionar anexo</button>
                            <h2>Contrato do serviço</h2>
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

export default ContainerAdicionarProjeto;
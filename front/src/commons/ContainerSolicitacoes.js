import React, { Component } from 'react';
import '../commons/ContainerSolicitacoes.css';
import '../commons/BotaoRoxo.css';
import '../commons/BotaoBranco.css';

export class ContainerSolicitacoes extends Component {
    render() {
        return (
            <div className={`ContainerSolicitacao ${this.props.menu && 'open'}`}>
                <div className="topSessao">
                    <h2>Novas solicitações</h2>
                </div>
                <div className="CardsContainer">
                    <ul className="listaSolicitacao">
                        <li>
                            <label className="prazoSolicitacao">13 jan -19 jan</label>
                            <h3 className="tituloSolicitacao">Titulo do novo serviço solicitado</h3>
                            <div className="infoSolicitacao">
                                <h4>Dados do cliente</h4>
                                <p><strong>Nome completo:</strong></p>
                                <p>Luana Moreira Brumado</p>
                            </div>
                            <div className="infoSolicitacao">
                                <h4>Faixa de preço do cliente</h4>
                                <div className="valoresContainer">
                                    <div>
                                        <p className="minmax">No mínimo</p>
                                        <div className="espaco"><label>R$</label><input value="2"></input></div>
                                    </div>
                                    <div>
                                        <p className="minmax">No máximo</p>
                                        <div className="espaco"><label>R$</label><input value="2"></input></div>
                                    </div>
                                </div>
                            </div>
                            <div className="infoSolicitacao">
                                <h4>Faixa de prazo do cliente</h4>
                                <div className="valoresContainer">
                                    <div>
                                        <p className="minmax">No mínimo</p>
                                        <div className="espaco"><label>Semanas</label><input value="2"></input></div>
                                    </div>
                                    <div>
                                        <p className="minmax">No máximo</p>
                                        <div className="espaco"><label>Semanas</label><input value="2"></input></div>
                                    </div>
                                </div>
                            </div>
                            <div className="botoes">
                                <button className="botaoVerde">Aceitar</button>
                                <button className="botaoVermelho">Recusar</button>
                            </div>
                        </li>
                        
                        <li>
                            <label className="prazoSolicitacao">13 jan -19 jan</label>
                            <h3 className="tituloSolicitacao">Titulo do novo serviço solicitado</h3>
                            <div className="infoSolicitacao">
                                <h4>Dados do cliente</h4>
                                <p><strong>Nome completo:</strong></p>
                                <p>Luana Moreira Brumado</p>
                            </div>
                            <div className="infoSolicitacao">
                                <h4>Faixa de preço do cliente</h4>
                                <div className="valoresContainer">
                                    <div>
                                        <p className="minmax">No mínimo</p>
                                        <div className="espaco"><label>R$</label><input value="2"></input></div>
                                    </div>
                                    <div>
                                        <p className="minmax">No máximo</p>
                                        <div className="espaco"><label>R$</label><input value="2"></input></div>
                                    </div>
                                </div>
                            </div>
                            <div className="infoSolicitacao">
                                <h4>Faixa de prazo do cliente</h4>
                                <div className="valoresContainer">
                                    <div>
                                        <p className="minmax">No mínimo</p>
                                        <div className="espaco"><label>Semanas</label><input value="2"></input></div>
                                    </div>
                                    <div>
                                        <p className="minmax">No máximo</p>
                                        <div className="espaco"><label>Semanas</label><input value="2"></input></div>
                                    </div>
                                </div>
                            </div>
                            <div className="botoes">
                                <button className="botaoVerde">Aceitar</button>
                                <button className="botaoVermelho">Recusar</button>
                            </div>
                        </li>
                        
                        <li>
                            <label className="prazoSolicitacao">13 jan -19 jan</label>
                            <h3 className="tituloSolicitacao">Titulo do novo serviço solicitado</h3>
                            <div className="infoSolicitacao">
                                <h4>Dados do cliente</h4>
                                <p><strong>Nome completo:</strong></p>
                                <p>Luana Moreira Brumado</p>
                            </div>
                            <div className="infoSolicitacao">
                                <h4>Faixa de preço do cliente</h4>
                                <div className="valoresContainer">
                                    <div>
                                        <p className="minmax">No mínimo</p>
                                        <div className="espaco"><label>R$</label><input value="2"></input></div>
                                    </div>
                                    <div>
                                        <p className="minmax">No máximo</p>
                                        <div className="espaco"><label>R$</label><input value="2"></input></div>
                                    </div>
                                </div>
                            </div>
                            <div className="infoSolicitacao">
                                <h4>Faixa de prazo do cliente</h4>
                                <div className="valoresContainer">
                                    <div>
                                        <p className="minmax">No mínimo</p>
                                        <div className="espaco"><label>Semanas</label><input value="2"></input></div>
                                    </div>
                                    <div>
                                        <p className="minmax">No máximo</p>
                                        <div className="espaco"><label>Semanas</label><input value="2"></input></div>
                                    </div>
                                </div>
                            </div>
                            <div className="botoes">
                                <button className="botaoVerde">Aceitar</button>
                                <button className="botaoVermelho">Recusar</button>
                            </div>
                        </li>
                        
                        
                    </ul>

                </div>

            </div>
        )
    }
}

export default ContainerSolicitacoes;

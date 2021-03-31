import React, { Component } from 'react';
import '../commons/ContainerProjeto.css';
import '../commons/BotaoRoxo.css';
import '../commons/ContainerVisaoGeral.css';

import { connect } from 'react-redux';
import { fetchGetAllProjetos } from '../store/actions/projetosActions';
import NoServiceIMG from '../images/NoServiceIMG.svg'

import ProjetoCard from './ProjetoCard';
import AppDatePicker from './DatePicker';
import PageLoading from '../components/PageLoading';

export class ContainerVisaoGeral extends Component {
    state = {
        startDate: new Date(),
        datasFases: [],
        atividades: [],
        loading: true,
    }

    componentDidMount() {
        const {fetchGetAllProjetos: getAllProjetos} = this.props;

        getAllProjetos()
            .then(res=>{
                console.log('pegamo clan clan');
                this.getDatasFases();
                this.filterDatas(this.state.startDate)
            })
            .finally(() => {
                this.setState({loading: false})
            })
    }

    getDatasFases = () => {
        const projetos = this.filterProjetos();
        
        const datasFases = projetos.reduce((base, projeto) => {
            const datasProjetos = projeto.fases_projeto.map((fase) => ({projeto: projeto.titulo, fase: fase.nome, data: fase.data.end}));

            return [...base, ...datasProjetos];
        }, []);

        this.setState({datasFases})
    }

    filterDatas = (startDate) => {
        const parseData = (date) => date.slice(0,10).replace(/-/g,'/');
        const { datasFases } = this.state;

        const date = new Date(startDate)
        const datas = datasFases.filter((item) => {
            // console.log(item.data, new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON());
            return parseData(item.data) == parseData(new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON())
        })

        this.setState({atividades: datas})
    }

    handleCalendar = (date) => {
        this.setState({startDate: date})
        this.filterDatas(date)
    }

    filterProjetos = () => {
        const { projetos } = this.props;

        const result = projetos.filter((projeto) => {
            const numCompletos = projeto.fases_projeto.filter((fase) => fase.completo);

            const isFinalizado = numCompletos.length === projeto.fases_projeto.length;

            return !isFinalizado;
        })

        // console.log(Boolean(pageFinalizado));

        return result;
    }
    
    render() {
        
        if(this.state.loading) {
            return <PageLoading />
        }

        const projetos = this.filterProjetos();
        
        return (
            <div className={`ContainerVisaoGeral ${this.props.menu && 'open'}`}>
                <div className="CardsContainer"> 
                <h2>Projetos em andamento {process.env.REACT_APP_LINK_SECRETO}</h2>
                    <ul className="listaProjetos">

                        {
                            projetos.length > 0 ? projetos.map(projeto=>(

                                <ProjetoCard key={projeto._id} projeto={projeto} />
                                // <li key={projeto._id} onClick={this.navigateToDetalhes(projeto._id)}>
                                //     <h3 className="tituloProjeto">{projeto.titulo}</h3>
                                //     <span><i><BsCheckBox/></i>1/5 Finalização dos esboços desenvolvidos</span>
                                //     <span><i><AiOutlineCalendar/></i>12 de Janeiro - 20 de Fevereiro</span>
                                //     <div className="tagsProjetos">
                                //         {
                                //             projeto.filtros.map(f=>(
                                //                 <label>{f}</label>
                                //             ))
                                //         }
                                //         {/* <label>UX</label><label>IHC</label> */}
                                //     </div>
                                //     <div className="progresProj">
                                //         <div className="cinza">
                                //             <div className="roxo"></div>
                                //         </div>
                                //     </div>
                                // </li>
                            )) : (
                                <div className="no-data">
                                    <img src={NoServiceIMG} alt="sem serviços" />
                                    <p>Você ainda não possui nenhum projeto ativo.</p>
                                </div>
                            )
                        }
                        
                    </ul>
                </div>
                <div className="CalendarContainer">
                <h2>Atividades do dia</h2>
                    <div className="Calendário">
                        {/* {this.getDatasFases()} */}
                        {/* {`${this.state.startDate}`} */}
                        {/* {this.filterDatas()} */}
                        <AppDatePicker
                            selected={this.state.startDate}
                            onChange={this.handleCalendar}
                            inline
                            disabledKeyboardNavigation
                            todayButton="Hoje"
                            highlightDates={[{"react-datepicker__day--highlighted-joup": this.state.datasFases.map(item=>new Date(item.data))}]}
                        />
                        {/* <img src={fakeCalendar}/> */}
                    {this.state.atividades.length > 0 && <hr />}
                    <div className="app-atividades">
                        {
                            this.state.atividades.map((a, i)=>(
                                <div key={i} className="itens-list">
                                    <p>{a.projeto}</p>
                                    <span>{a.fase}</span>
                                </div>
                            ))
                        }
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      projetos: state.projetos
    };
  };

const mapDispatchToProps = { fetchGetAllProjetos };

export default connect(mapStateToProps, mapDispatchToProps)(ContainerVisaoGeral);

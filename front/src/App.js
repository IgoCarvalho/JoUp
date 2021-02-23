import './App.css';
import {BiMenu, BiBell,BiSearch, BiUser, BiShow, BiTime, BiCalendar} from "react-icons/bi";
import {FaRegClipboard} from "react-icons/fa";
import {AiOutlineUserAdd} from "react-icons/ai";
import {FiUsers} from "react-icons/fi";
import {MdComputer} from "react-icons/md";
import logo from "../src/images/logo.svg";
import Apresentacao from './components/Apresentacao';
import Login from './components/Login';
import Servicos from './components/Servicos';
import Rotas from './components/Rotas';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
                    <Route exact path="/">
                         <Apresentacao/>
                    </Route>
                    <Route exact path="/login">
                         <Login/>
                    </Route>
                    <Route exact path="/servicos">
                         <Servicos/>
                    </Route>
                </BrowserRouter>
    </div>
  );
}

export default App;

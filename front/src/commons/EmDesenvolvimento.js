import React from 'react';
import { useState } from 'react';
import NavPerfil from '../components/NavPerfil';
import AsideMenu from './AsideMenu';
import Modal from './Modal';

import './EmDesenvolvimento.css';

function EmDesenvolvimento() {
  const [menu, setMenu] = useState(false);

  function abreMenu() {
    setMenu(!menu);
  }
  return (
    <div className="detalheSolicitacao">
      <NavPerfil abrirMenu={abreMenu} />
      <AsideMenu menu={menu} />
      <div className="dev">
        <Modal open>
          <div className="desenvolvimento-message">
            <h1>Pagina ainda em desenvolvimento</h1>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default EmDesenvolvimento;

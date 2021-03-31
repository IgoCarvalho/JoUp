import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";
import servicesReducer from "./reducers/servicesReducer";
import solicitacoesReducer from "./reducers/solicitacoesReducer";
import projetosReducer from "./reducers/projetosReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    services: servicesReducer,
    solicitacoes: solicitacoesReducer,
    projetos: projetosReducer,
  },
});

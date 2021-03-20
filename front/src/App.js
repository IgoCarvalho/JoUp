import "./App.css";
import { Provider } from "react-redux";
import Store from "./store";

import Rotas from "./components/Rotas";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Auth>
          <Rotas />
        </Auth>
      </Provider>
    </div>
  );
}

export default App;

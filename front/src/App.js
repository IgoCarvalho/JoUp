import "./App.css";
import { Provider } from "react-redux";
import Store from "./store";

import Rotas from "./components/Rotas";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Rotas />
      </Provider>
    </div>
  );
}

export default App;

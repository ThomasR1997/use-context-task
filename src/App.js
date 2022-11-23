import "./App.css";
import { ApiContext } from "./contextState/ApiContext";
import { useContext } from "react";

import { JokeSetup } from "./components/JokeSetup";
import { DisplayApi } from "./components/DisplayApi";

function App() {
  const { apiData, setApiData } = useContext(null);

  return (
    <ApiContext.Provider value={{ apiData, setApiData }}>
      <div className="App">
        <DisplayApi />
        <JokeSetup />
      </div>
    </ApiContext.Provider>
  );
}

export default App;

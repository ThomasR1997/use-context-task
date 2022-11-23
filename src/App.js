import "./App.css";
import { ApiContext } from "./contextState/ApiContext";
import { useState } from "react";

import { JokeSetup } from "./components/JokeSetup";
import { GetApi } from "./components/GetApi";
import { JokePunchline } from "./components/JokePunchline";

function App() {
  const [apiData, setApiData] = useState(null);

  return (
    <ApiContext.Provider value={{ apiData, setApiData }}>
      <div className="App">
        <GetApi />
        <JokeSetup />
        <JokePunchline />
      </div>
    </ApiContext.Provider>
  );
}

export default App;

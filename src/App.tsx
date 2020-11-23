import React from "react";

import Routes from "./routes";
import { ConfigContextProvider } from "./Context/taskContext";

import "./styles/global.css";

const App: React.FC = () => {
  return (
    <ConfigContextProvider>
      <Routes />
    </ConfigContextProvider>
  );
};

export default App;

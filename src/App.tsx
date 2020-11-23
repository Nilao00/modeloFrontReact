import React from "react";
import "./styles/global.css";
import Routes from "./routes";
import { ConfigContextProvider } from "./Context/taskContext";
const App: React.FC = () => {
  return (
    <ConfigContextProvider>
      <Routes />
    </ConfigContextProvider>
  );
};

export default App;

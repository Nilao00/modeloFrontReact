import * as React from "react";
import "./styles/global.css";
import Router from "./Routers";
import { ConfigContextProvider } from "./Context/taskContext";
const App: React.FC = () => {
  return (
    <ConfigContextProvider>
      <Router />
    </ConfigContextProvider>
  );
};

export default App;

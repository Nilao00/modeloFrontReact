import React from "react";

import Routes from "./routes";
import { ConfigContextProviderTask } from "./Context/taskContext";
import { ConfigContextProviderLogin } from "./Context/loginContext";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <ConfigContextProviderTask>
      <ConfigContextProviderLogin>
        <Routes />
      </ConfigContextProviderLogin>
    </ConfigContextProviderTask>
  );
};

export default App;

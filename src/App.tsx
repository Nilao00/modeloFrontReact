import React from "react";

import Routes from "./routes";
import { ConfigContextProviderTask } from "./Context/taskContext";
import { ConfigContextProviderLogin } from "./Context/loginContext";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./Store";

import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConfigContextProviderTask>
          <ConfigContextProviderLogin>
            <Routes />
          </ConfigContextProviderLogin>
        </ConfigContextProviderTask>
      </PersistGate>
    </Provider>
  );
};

export default App;

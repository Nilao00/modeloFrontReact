import React, { useState, createContext, useContext } from "react";

export interface PropsMethods {
  token: string;
  loginService(login: string, password: string): void;
}

const ConfigContextLogin = createContext<PropsMethods>({} as PropsMethods);

export const ConfigContextProviderLogin = ({ children }) => {
  const [token, setToken] = useState<string>("");

  const handleLoginService = (login: string, password: string) => {
    if (login === "") return;
    if (password === "") return;
    const tokenResponse: string = btoa(
      Math.floor(Math.random() * 9999999).toString()
    );
    setToken(tokenResponse);
    return tokenResponse;
  };

  return (
    <ConfigContextLogin.Provider
      value={{
        token,
        loginService: handleLoginService,
      }}
    >
      {children}
    </ConfigContextLogin.Provider>
  );
};
export const useConfigContext = () => {
  const context = useContext(ConfigContextLogin);
  return context;
};

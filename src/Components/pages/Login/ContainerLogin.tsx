import React from "react";
import Login from "./";
import { useConfigContext } from "../../../Context/loginContext";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const ContainerLogin: React.FC = () => {
  const { loginService } = useConfigContext();
  const history = useHistory();

  const validateForm = Yup.object().shape({
    login: Yup.string().required("Por favor preencha login"),
    password: Yup.string().required("Por favor preencha a senha"),
  });

  return (
    <Login
      submit={loginService}
      validateForm={validateForm}
      history={history}
    />
  );
};

export default ContainerLogin;

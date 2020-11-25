import React from "react";
import Login from "./";
import { useConfigContext } from "../../../Context/loginContext";
import * as Yup from "yup";
import {useHistory} from 'react-router-dom'

const ContainerLogin: React.FC = () => {
  const { loginService } = useConfigContext();
  const history = useHistory();

  function loginContainer(){
    loginService('','');
    history.push('/tasks')
  }

  const validateForm = Yup.object().shape({
    login: Yup.string().required("Por favor preencha login"),
    password: Yup.string().required("Por favor preencha a senha"),
  });

  return <Login submit={loginContainer} validateForm={validateForm} />;
};

export default ContainerLogin;

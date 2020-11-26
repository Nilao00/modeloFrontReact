import React from "react";
import { Formik, Form, Field } from "formik";

import "./style.css";

interface Props {
  submit(login: string, password: string): void;
  validateForm(): void;
  history;
}

const Login: React.FC<Props> = ({ submit, validateForm, history }) => {
  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
      }}
      validationSchema={validateForm}
      onSubmit={(values) => {
        submit(values.login, values.password);
        history.push("/tasks");
      }}
    >
      {({ errors }) => (
        <Form className="stylePositionBoxLogin">
          <Field
            name="login"
            className="inputStyleLoginInput"
            placeholder="Digite o login"
          />
          {errors.login}
          <Field
            type="password"
            name="password"
            placeholder="Digite a senha"
            className="inputStylePasswordInput"
          />
          {errors.password}
          <button type="submit" className="btnLoginStyle">
            Logar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;

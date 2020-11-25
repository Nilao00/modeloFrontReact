import React from "react";
import { Formik, Form, Field } from "formik";

import "./style.css";

interface ContainerTask {
  checkFieldNameTask(name: string): boolean;
  validateForm(): void;
}
const NewTask: React.FC<ContainerTask> = ({
  checkFieldNameTask,
  validateForm,
}) => {
  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={validateForm}
      onSubmit={(values) => {
        checkFieldNameTask(values.name);
      }}
    >
      {({ errors }) => (
        <Form className="boxInputTask">
          <h3 className="styleTitleTasks">Criar tarefa</h3>
          <div className="mainNewTaskStyle">
            <Field
              placeholder="Nova tarefa..."
              className="inputStyleNameTask"
              name="name"
              autoFocus
            />
            {errors.name}
            <button type="submit" className="btnNewTaskPlus">
              Nova Tarefa
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewTask;

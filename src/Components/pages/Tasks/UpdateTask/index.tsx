import React from "react";
import { Formik, Form, Field } from "formik";

import "./style.css";

interface TaskUpdateContainer {
  name: string;
  finish: number;
  updateTaskResponse(name: string, finish: number): void;
  validateForm(): void;
}
const UpdateTask: React.FC<TaskUpdateContainer> = ({
  name,
  finish,
  updateTaskResponse,
  validateForm,
}) => {
  return (
    <span className="boxInputTask">
      <Formik
        initialValues={{ name, finish }}
        validationSchema={validateForm}
        onSubmit={(values) => {
          updateTaskResponse(values.name, Number(values.finish));
        }}
      >
        {({ values, errors, handleChange }) => (
          <Form>
            <h3 className="styleTitleTasks">Editar tarefa</h3>
            <div className="mainNewTaskStyle">
              <Field
                value={values.name}
                name="name"
                placeholder="Nova tarefa..."
                className="inputStyleNameTask"
              />
              {errors.name}
              <Field
                className="styleInfoSelectTask"
                name="finish"
                as="select"
                onChange={handleChange}
              >
                <option value={1} selected={values.finish === 1 ? true : false}>
                  Atividade feita
                </option>
                <option value={0} selected={values.finish === 0 ? true : false}>
                  Atividade não feita
                </option>
              </Field>
              <button type="submit" className="btnNewTaskPlus">
                Salvar Tarefa
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </span>
  );
};
export default UpdateTask;

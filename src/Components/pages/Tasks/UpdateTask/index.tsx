import React from "react";
import { Formik, Form } from "formik";

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
        /*   validate={(values) => {
          const errors = { name: "", finish: "" };
          if (!values.name || values.name === "") {
            errors.name = "Por favor preencha o nome";
          }
          return errors;
        }} */
        validationSchema={validateForm}
        onSubmit={(values, { setSubmitting }) => {
          updateTaskResponse(values.name, values.finish);
          setSubmitting(false);
        }}
      >
        {({ values, setValues, errors }) => (
          <Form>
            <div>
              <h3 className="styleTitleTasks">Editar tarefa</h3>
              <div className="mainNewTaskStyle">
                <input
                  type="text"
                  value={values.name}
                  onChange={(val) => {
                    setValues({
                      name: val.target.value,
                      finish: values.finish,
                    });
                  }}
                  placeholder={"Nova tarefa..."}
                  className="inputStyleNameTask"
                />
                {errors.name}
                <select
                  className="styleInfoSelectTask"
                  onChange={(val) => {
                    setValues({
                      name: values.name,
                      finish: parseInt(val.target.value),
                    });
                  }}
                >
                  <option
                    value={1}
                    selected={values.finish === 1 ? true : false}
                  >
                    Atividade feita
                  </option>
                  <option
                    value={0}
                    selected={values.finish === 0 ? true : false}
                  >
                    Atividade não feita
                  </option>
                </select>

                <button type="submit" className="btnNewTaskPlus">
                  Salvar Tarefa
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </span>
  );
};
export default UpdateTask;

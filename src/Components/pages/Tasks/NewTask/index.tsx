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
    <div className="boxInputTask">
      <Formik
        initialValues={{ name: "" }}
        validate={(values) => {
          const errors = { name: "" };
          if (!values.name || values.name === "") {
            errors.name = "Por favor preencha o nome";
          }
          return errors;
        }}
        validationSchema={validateForm}
        onSubmit={(values, { setSubmitting }) => {
            checkFieldNameTask(values.name);
            setSubmitting(false);    
        }}
      >
        {({ values, setValues, errors, handleBlur, isSubmitting }) => (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              checkFieldNameTask(values.name);
            }}
          >
            <div>
              <h3 className="styleTitleTasks">Criar tarefa</h3>
              <div className="mainNewTaskStyle">
                <Field
                  type="text"
                  placeholder={"Nova tarefa..."}
                  className="inputStyleNameTask"
                  onChange={(val) => setValues({ name: val.target.value })}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                  autoFocus
                />
                {errors.name}
                <button
                  onClick={() => {
                    checkFieldNameTask(name);
                  }}
                  type="submit"
                  disabled={isSubmitting}
                  className="btnNewTaskPlus"
                >
                  Nova Tarefa
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewTask;

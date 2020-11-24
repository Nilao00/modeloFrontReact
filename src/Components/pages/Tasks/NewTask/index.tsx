import React, { useRef } from "react";
import { Formik } from "formik";

import "./style.css";

interface ContainerTask {
  checkFieldNameTask(name: string): boolean;
}
const NewTask: React.FC<ContainerTask> = ({ checkFieldNameTask }) => {
  const inputRef = useRef<HTMLInputElement>(null); 

  return (
    <div className="boxInputTask">
      <Formik
        initialValues={{ name: "" }}
        validate={(values) => {
          const errors = { name: "" };
          if (
            !values.name ||
            values.name === "" ||
            checkFieldNameTask(values.name) === false
          ) {
            errors.name = "Por favor preencha o nome";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            checkFieldNameTask(values.name);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          setValues,
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
        }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              checkFieldNameTask(values.name);
            }}
          >
            <div>
             <h3 className="styleTitleTasks">Criar tarefa</h3>
              <div className="mainNewTaskStyle">
                <input
                  type="text"
                  placeholder={"Nova tarefa..."}
                  className="inputStyleNameTask"
                  onChange={(val) => setValues({ name: val.target.value })}
                  onBlur={handleBlur}
                  value={values.name}
                  ref={inputRef}
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
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NewTask;

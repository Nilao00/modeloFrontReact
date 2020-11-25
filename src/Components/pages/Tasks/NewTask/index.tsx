import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

import "./style.css";

interface Description {
  description: string;
}
interface Props {
  checkFieldNameTask(
    name: string,
    waytask: Description[]
  ): boolean;
  validateForm(): void;
  initialValues: {
    name: string;
    waytask: Description[]
  };
}

const NewTask: React.FC<Props> = ({
  checkFieldNameTask,
  validateForm,
  initialValues,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateForm}
      onSubmit={(values) => {
        checkFieldNameTask(values.name, values.waytask);
      }}
    >
      {({ errors, values }) => (
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
            <FieldArray
              name="waytask"
              render={({ push, remove }) => (
                <div className="elementsMainArrayField">
                  <button
                    type="button"
                    className="btnNewTaskPlus"
                    onClick={() => push({ description: "" })}
                  >
                    Adicionar
                  </button>
                  {values.waytask.map((way, index) => (
                    <div key={index} className="displayElementInfo">
                      <div className="flexDirectionFieldAndBtnRemove">
                        <Field
                          name={`waytask[${index}].description`}
                          className="inputStyleNameTask"
                          placeholder="Nova descrição..."
                        />

                        <button
                          type="button"
                          className="btnNewTaskRemove"
                          onClick={() => remove(index)}
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            />
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

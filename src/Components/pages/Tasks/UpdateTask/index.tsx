import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

import "./style.css";

interface Description {
  description: string;
}
interface TaskUpdateContainer {
  name: string;
  finish: number;
  waytask: Description[]
  updateTaskResponse(
    name: string,
    finish: number,
    waytask: Description[]
  ): void;
  validateForm(): void;
}
const UpdateTask: React.FC<TaskUpdateContainer> = ({
  name,
  finish,
  waytask,
  updateTaskResponse,
  validateForm,
}) => {
  return (
    <span className="boxInputTask">
      <Formik
        initialValues={{ name, finish, waytask }}
        validationSchema={validateForm}
        onSubmit={(values) => {
          updateTaskResponse(
            values.name,
            Number(values.finish),
            values.waytask
          );
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
                            value={way.description}
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

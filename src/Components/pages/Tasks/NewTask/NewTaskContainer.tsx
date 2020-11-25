import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import { Task } from "../../../../Interfaces/Task";
import { useConfigContext } from "../../../../Context/taskContext";
import NewTask from "./";

interface Description {
  description: string;
}
interface initialValues {
  name: string;
  waytask: Description[];
}
const NewTaskContainer: React.FC = () => {
  const history = useHistory();

  const { createTask } = useConfigContext();

  function taskCreateResponse(name: string, waytask: Description[]) {
    const objCreateTask: Task = {
      id: Math.floor(Math.random() * 999),
      name,
      waytask,
      finish: false,
      dtCreate: new Date(),
    };
    createTask(objCreateTask);
    history.push("/");
  }

  const validateForm = Yup.object().shape({
    name: Yup.string().required("Por favor preencha o nome da tarefa"),
  });

  function checkFieldNameTask(
    name: string,
    waytask: Description[]
  ) {
    if (name === "" || !name) {
      return false;
    } else {
      taskCreateResponse(name, waytask);
      return true;
    }
  }

  const initialValues: initialValues = {
    name: "",
    waytask: [
      {
        description: "",
      }     
    ],
  };

  return (
    <NewTask
      checkFieldNameTask={checkFieldNameTask}
      validateForm={validateForm}
      initialValues={initialValues}
    />
  );
};

export default NewTaskContainer;

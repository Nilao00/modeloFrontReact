import React from "react";
import { useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";

import { Task } from "../../../../Interfaces/Task";
import { useConfigContext } from "../../../../Context/taskContext";
import UpdateTask from "./";

const UpdateTaskContainer: React.FC = () => {
  const { id }: { id: string } = useParams();
  const history = useHistory();
  const { updateTask, task } = useConfigContext();

  const taskEditedCurrent = task.find((itens) => itens.id === Number(id));

  function updateTaskResponse(name: string, finish: number) {
    if (name === "") {
      return false;
    }
    let objUp: Task = {
      id: Number(id),
      name,
      finish: finish === 1 ? true : false,
      dtCreate: new Date(),
    };
    updateTask(Number(id), objUp);
    history.push("/");
  }

  const validateForm = Yup.object().shape({
    name: Yup.string().required("Por favor, preencha o nome"),
  });

  return (
    <UpdateTask
      name={taskEditedCurrent ? taskEditedCurrent.name : ""}
      finish={taskEditedCurrent ? (taskEditedCurrent.finish ? 1 : 0) : 0}
      updateTaskResponse={updateTaskResponse}
      validateForm={validateForm}
    />
  );
};

export default UpdateTaskContainer;

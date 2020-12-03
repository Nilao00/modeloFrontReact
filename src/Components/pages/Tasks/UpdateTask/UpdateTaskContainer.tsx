import React from "react";
import { useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";

import { Task } from "../../../../Interfaces/Task";
import { useConfigContext } from "../../../../Context/taskContext";
import UpdateTask from "./";

import updateTaskRedux from "./Redux/actions";

import { listTasks } from "../LoadingTask/Redux/actions";

interface Description {
  description: string;
}
const UpdateTaskContainer: React.FC = () => {
  const { id }: { id: string } = useParams();
  const history = useHistory();
  const { updateTask } = useConfigContext();

  const taskEditedCurrent = listTasks().find(
    (itens) => itens.id === Number(id)
  );

  function updateTaskResponse(
    name: string,
    finish: number,
    waytask: Description[]
  ) {
    if (name === "") {
      return false;
    }
    let objUp: Task = {
      id: Number(id),
      name,
      waytask,
      finish: finish === 1 ? true : false,
      dtCreate: new Date(),
    };
    updateTask(Number(id), objUp);
    updateTaskRedux(objUp);
    history.push("/tasks");
  }

  const validateForm = Yup.object().shape({
    name: Yup.string().required("Por favor, preencha a tarefa"),
  });

  return (
    <UpdateTask
      name={taskEditedCurrent ? taskEditedCurrent.name : ""}
      finish={taskEditedCurrent.finish ? 1 : 0}
      waytask={taskEditedCurrent?.waytask && taskEditedCurrent?.waytask}
      updateTaskResponse={updateTaskResponse}
      validateForm={validateForm}
    />
  );
};

export default UpdateTaskContainer;

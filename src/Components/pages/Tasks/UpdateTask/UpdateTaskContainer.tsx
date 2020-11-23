import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { Task } from "../../../../Interfaces/Task";
import { useConfigContext } from "../../../../Context/taskContext";
import UpdateTask from "./";

const UpdateTaskContainer: React.FC = () => {
  const { id }: { id: string } = useParams();
  const [name, setName] = React.useState<string>("");
  const [finishTask, setFinishTask] = React.useState<number>(0);
  const history = useHistory();
  const { updateTask, task } = useConfigContext();

  function updateTaskResponse() {
    let done = finishTask === 1 ? true : false;
    let objUp: Task = {
      id: Number(id),
      name,
      finish: done,
      dtCreate: new Date(),
    };
    updateTask(Number(id), objUp);
    history.push("/");
  }

  function getTaskById() {
    let taskEditedCurrent = task.find((itens) => itens.id === Number(id));
    if (taskEditedCurrent) {
      setName(taskEditedCurrent.name);
      setFinishTask(taskEditedCurrent.finish ? 1 : 0);
    }
  }
  return (
    <UpdateTask
      name={name}
      setName={setName}
      finishTask={finishTask}
      setFinishTask={setFinishTask}
      updateTaskResponse={updateTaskResponse}
      getTaskById={getTaskById}
    />
  );
};

export default UpdateTaskContainer;

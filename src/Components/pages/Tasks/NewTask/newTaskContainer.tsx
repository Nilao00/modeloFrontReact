import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Task } from "../../../../Interfaces/Task";
import { useConfigContext } from "../../../../Context/taskContext";
import NewTask from "./";

const newTaskContainer: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState<string>("");

  const { createTask } = useConfigContext();

  function taskCreateResponse(name: string) {
    const objCreateTask: Task = {
      id: Math.floor(Math.random() * 999),
      name,
      finish: false,
      dtCreate: new Date(),
    };
    createTask(objCreateTask);
    history.push("/");
  }

  function checkFieldNameTask(name: string) {
    if (name === "" || !name) {
      //  color = "1px solid red";
      return alert("Por favor preencha o nome");
    } else {
      return taskCreateResponse(name);
    }
  }

  return (
    <NewTask
      checkFieldNameTask={checkFieldNameTask}
      name={name}
      setName={setName}
    />
  );
};

export default newTaskContainer;

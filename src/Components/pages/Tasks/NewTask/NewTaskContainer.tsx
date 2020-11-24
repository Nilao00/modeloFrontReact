import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import { Task } from "../../../../Interfaces/Task";
import { useConfigContext } from "../../../../Context/taskContext";
import NewTask from "./";

const NewTaskContainer: React.FC = () => {
  const history = useHistory();

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

  const validateForm = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').required("Required"),
  });

  function checkFieldNameTask(name: string) {
    if (name === "" || !name) {
      return false;
    } else {
      taskCreateResponse(name);
      return true;
    }
  }

  return (
    <NewTask
      checkFieldNameTask={checkFieldNameTask}
      validateForm={validateForm}
    />
  );
};

export default NewTaskContainer;

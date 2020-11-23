import React, { useRef } from "react";

import { useHistory } from "react-router-dom";

import { Task } from "../../../../Interfaces/Task";
import { useConfigContext } from "../../../../Context/taskContext";

import "./style.css";

const NewTask: React.FC = () => {
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement>(null);
  const { createTask } = useConfigContext();

  function taskCreateResponse() {
    const objCreateTask: Task = {
      id: Math.floor(Math.random() * 999),
      name: inputRef.current?.value || "",
      finish: false,
      dtCreate: new Date(),
    };
    createTask(objCreateTask);
    history.push("/");
  }

  function checkFieldNameTask() {
    if (inputRef.current?.value === "") {
      return (inputRef.current.style.border = "1px solid red");
    }
    return taskCreateResponse();
  }

  return (
    <div className="boxInputTask">
      <h3 className="styleTitleTasks">Criar tarefa</h3>
      <div className="mainNewTaskStyle">
        <input
          type="text"
          placeholder={"Nova tarefa..."}
          className="inputStyleNameTask"
          ref={inputRef}
        />
        <button onClick={checkFieldNameTask} className="btnNewTaskPlus">
          Nova Tarefa
        </button>
      </div>
    </div>
  );
};

export default NewTask;

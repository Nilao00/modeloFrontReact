import React, { useRef, useState } from "react";
import "./style.css";

interface ContainerTask {
  checkFieldNameTask(name: string): void;
  name: string;
  setName: any;
}
const NewTask: React.FC<ContainerTask> = ({
  checkFieldNameTask,
  name,
  setName,
}) => {
  return (
    <div className="boxInputTask">
      <h3 className="styleTitleTasks">Criar tarefa</h3>
      <div className="mainNewTaskStyle">
        <input
          type="text"
          placeholder={"Nova tarefa..."}
          className="inputStyleNameTask"
          value={name}
          onChange={(val) => setName(val.target.value)}        
        />
        <button
          onClick={() => {
            checkFieldNameTask(name);
          }}
          className="btnNewTaskPlus"
        >
          Nova Tarefa
        </button>
      </div>
    </div>
  );
};

export default NewTask;

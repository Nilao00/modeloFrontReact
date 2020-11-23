import React from "react";

import "./style.css";

interface TaskUpdateContainer {
  name: string;
  setName: any;
  finishTask: number;
  setFinishTask: any;
  getTaskById(): void;
  updateTaskResponse(): void;
}
const UpdateTask: React.FC<TaskUpdateContainer> = ({
  name,
  setName,
  finishTask,
  setFinishTask,
  getTaskById,
  updateTaskResponse,
}) => {
  
  React.useEffect(() => {
    getTaskById();
  }, []);

  return (
    <span className="boxInputTask">
      <h3 className="styleTitleTasks">Editar tarefa</h3>
      <div className="mainNewTaskStyle">
        <input
          type="text"
          value={name}
          onChange={(value) => setName(value.target.value)}
          placeholder={"Nova tarefa..."}
          className="inputStyleNameTask"
        />
        <select
          className="styleInfoSelectTask"
          onChange={(finish) => {
            setFinishTask(parseInt(finish.target.value));
          }}
        >
          <option value={1} selected={finishTask === 1 ? true : false}>
            Atividade feita
          </option>
          <option value={0} selected={finishTask === 0 ? true : false}>
            Atividade não feita
          </option>
        </select>

        <button onClick={updateTaskResponse} className="btnNewTaskPlus">
          Salvar Tarefa
        </button>
      </div>
    </span>
  );
};
export default UpdateTask;

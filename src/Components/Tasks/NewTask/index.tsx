import * as React from "react";
import { Task, TaskProps, PropsMethods } from "../../../Interfaces/Task";
import "./style.css";

const NewTask: React.FC<TaskProps> = ({ tasks }) => {
  const [name, setName] = React.useState<string>("");
  const [, updateState] = React.useState<{}>();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  function newTaskCreate(taskCreate: Task) {
    tasks.push(taskCreate);
    return tasks;
  }

  function checkFieldNameTask() {
    if (name === "") return alert("Preencha o campo nome");
    let objCreateTask: Task = {
      id: Math.floor(Math.random() * 999),
      name,
      finish: false,
      dtCreate: new Date(),
    };
    newTaskCreate(objCreateTask);
    forceUpdate();
    return tasks;
  }

  return (
    <div className="mainNewTaskStyle">
      <input
        type="text"
        value={name}
        onChange={(value) => setName(value.target.value)}
        placeholder={"Nova tarefa..."}
        className="inputStyleNameTask"
      />
      <button onClick={() => checkFieldNameTask()} className="btnNewTaskPlus">
        Nova Tarefa
      </button>
    </div>
  );
};
export default NewTask;

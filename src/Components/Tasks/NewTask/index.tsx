import * as React from "react";
import { Task, TaskProps } from "../../../Interfaces/Task";
import "./style.css";
import { useHistory } from "react-router-dom";

const NewTask: React.FC<TaskProps[]> = (props) => {
  //@ts-ignore
  const [task, setTask] = React.useState<Task[]>(props.location.state.task);
  const [name, setName] = React.useState<string>("");
  const history = useHistory();

  function newTaskCreate(taskCreate: Task) {
    task.push(taskCreate);
    setTask(task)
  //  setTask([...task, taskCreate]);
    //@ts-ignore
   history.goBack();
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
  }

  return (
    <span className="boxInputTask">
      <h3 className="styleTitleTasks">Criar tarefa</h3>
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
    </span>
  );
};

export default NewTask;

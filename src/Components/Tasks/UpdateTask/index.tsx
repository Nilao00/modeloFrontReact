import * as React from "react";
import { Task, TaskProps, PropsMethods } from "../../../Interfaces/Task";
import "./style.css";
import { useHistory } from "react-router-dom";

const UpdateTask: React.FC<Task> = (props) => {
  //@ts-ignore
  const [taskAny, tasks]: Task = props.location.state;
  const [name, setName] = React.useState<string>(taskAny?.taskAny.name);
  const [finishTask, setFinishTask] = React.useState<boolean>(
    taskAny.taskAny.finish
  );
  const [task, setTask] = React.useState<Task[]>(tasks?.task);
  const history = useHistory();

  function updateTask(id: Number) {
    console.log(finishTask);
    const done = parseInt(finishTask.toString()) === 1  ? true : false
    const response = task.map((elements) => {
      if (elements.id === id) {
        elements.finish = done;
        elements.name = name;
        return elements;
      }
      return elements;
    });
    setTask(response);
    //@ts-ignore
    history.goBack();
  }

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
          onChange={(value) => {
            //@ts-ignore
            setFinishTask(value.target.value);
          }}
        >
          <option value={1} selected={finishTask && true}>
            Atividade feita
          </option>
          <option value={0} selected={!finishTask && true}>
            Atividade não feita
          </option>
        </select>

        <button
          onClick={() => {
            updateTask(taskAny.taskAny.id);
          }}
          className="btnNewTaskPlus"
        >
          Salvar Tarefa
        </button>
      </div>
    </span>
  );
};
export default UpdateTask;

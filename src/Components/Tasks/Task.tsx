import * as React from "react";
import { TaskProps, Task } from "../../Interfaces/Task";
import moment from "moment";
import Repository from "../Repository/Task";
import NewTask from "./NewTask";
import "./style.css";

const Tasks: React.FC<TaskProps> = () => {
  //const [task, setTask] = React.useState(Repository);
  const [showCreateTask, setShowCreateTask] = React.useState<boolean>(false);
  const [, updateState] = React.useState<{}>();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [name, setName] = React.useState<string>("");

  function getTask() {
    forceUpdate();
    return Repository;
  }

  function newTaskCreate(taskCreate: Task) {
    Repository.push(taskCreate);
    setName('');
    return Repository;
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
    return Repository;
  }

  /*  function getTaskById(id: Number) {
    Repository.map((elements) => {
      if (elements.id === id) {
        return elements;
      }
      return task;
    });
  } */

  function updateTask(id: Number) {
    Repository.map((elements) => {
      if (elements.id === id) {
        elements.finish = !elements.finish;
      }
    });
    forceUpdate();
    return Repository;
  }

  function deleteTask(id: Number) {
    const confirmDel = confirm("Deseja excluir essa tarefa?");
    if (confirmDel) {
      Repository.map((elements) => {
        if (id === elements.id) {
          //@ts-ignore
          Repository.splice(Repository.indexOf(elements), 1);
          forceUpdate();
          return elements;
        }
        return null;
      });
    }
  }

  React.useEffect(() => {
    getTask();
  }, [Repository]);

  return (
    <div className="mainStyleViewTask">
      <span className="boxInputTask">
        {showCreateTask && (
          <div className="mainNewTaskStyle">
            <input
              type="text"
              value={name}
              onChange={(value) => setName(value.target.value)}
              placeholder={"Nova tarefa..."}
              className="inputStyleNameTask"
            />
            <button
              onClick={() => checkFieldNameTask()}
              className="btnNewTaskPlus"
            >
              Nova Tarefa
            </button>
          </div>
        )}
      </span>
      <div className="listViewStyleTasks">
        <h3 className="styleTitleTasks">Listagem de tarefas</h3>
        {Repository.length > 0
          ? Repository.map((itens, index) => {
              return (
                <div className="cardStyleTask" key={index}>
                  <span style={{ wordBreak: "break-word", maxWidth: 80 }}>
                    {itens.id + " - " + itens.name}
                  </span>
                  <span>{moment(itens.dtCreate).format("DD/MM/YYYY")}</span>
                  <button
                    onClick={() => updateTask(itens.id)}
                    className="btnNewTaskEdit"
                  >
                    {!itens.finish ? "Não feita" : "Feita"}
                  </button>
                  <button
                    onClick={() => deleteTask(itens.id)}
                    className="btnNewTaskDel"
                  >
                    Deletar
                  </button>
                </div>
              );
            })
          : "Não foram encontrados itens"}
      </div>
      <div>
        <button
          className="btnNewTask"
          onClick={() => setShowCreateTask(!showCreateTask)}
        >
          {!showCreateTask ? "Novo" : "Cancelar"}
        </button>
      </div>
    </div>
  );
};

Tasks.propTypes = {};
export default Tasks;

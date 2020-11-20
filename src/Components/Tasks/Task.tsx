import * as React from "react";
import { TaskProps, Task } from "../../Interfaces/Task";
import moment from "moment";
import "./style.css";
import { useHistory } from "react-router-dom";
import Repository from "../Repository/Task";

const Tasks: React.FC<TaskProps> = () => {
  const [task, setTask] = React.useState<Task[]>(Repository);
  const history = useHistory();

  function deleteTask(id: Number) {
    const confirmDel = confirm("Deseja excluir essa tarefa?");
    if (confirmDel) {
      const response = task.filter((elements) => {
        if (elements.id === id) {
          return false;
        }
        return true;
      });
      setTask(response);
    }
  }

  return (
    <div className="mainStyleViewTask">
      <div className="listViewStyleTasks">
        <h3 className="styleTitleTasks">Listagem de tarefas</h3>
        {task.length > 0
          ? task.map((itens, index) => {
              return (
                <div className="cardStyleTask" key={index}>
                  <span style={{ wordBreak: "break-word", maxWidth: 80 }}>
                    {itens.id +
                      " - " +
                      itens.name +
                      " - " +
                      (itens.finish ? "Atividade feita" : "Não feita")}
                  </span>
                  <span>{moment(itens.dtCreate).format("DD/MM/YYYY")}</span>
                  <button
                    onClick={() => {
                      history.push("/updateTask", [
                        { taskAny: itens },
                        { task },
                      ]);
                    }}
                    className="btnNewTaskEdit"
                  >
                    Editar
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
          onClick={() => {
            history.push("/newTask", { task });
          }}
        >
          Nova tarefa
        </button>
      </div>
    </div>
  );
};

Tasks.propTypes = {};
export default Tasks;

import * as React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { Task } from "../../Interfaces/Task";
import { useConfigContext } from "../../Context/taskContext";
import "./style.css";

const Tasks: React.FC = () => {
  const { deleteTask, task } = useConfigContext();
  const history = useHistory();

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
                      history.push(`updateTask/${itens.id}`);
                    }}
                    className="btnNewTaskEdit"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => {
                      deleteTask(itens.id);
                    }}
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

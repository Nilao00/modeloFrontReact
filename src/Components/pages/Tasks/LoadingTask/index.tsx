import React from "react";

import { useHistory } from "react-router-dom";

import formatDate from "../../../../utils";
import { useConfigContext } from "../../../../Context/taskContext";

import "../style.css";

const Tasks: React.FC = () => {
  const { deleteTask, task } = useConfigContext();
  const history = useHistory();

  function getItenForUpdate(id: number) {
    return history.push(`updateTask/${id}`);
  }

  function createNewTask() {
    return history.push("/newTask");
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
                    {itens.waytask.length > 0 &&
                      itens.waytask.map((value, i) => {
                        return (
                          <div key={i}>
                            {i < 1 && (
                              <p style={{ color: "red", fontFamily: '8px' }}>
                                Descrições:
                              </p>
                            )}
                            <div key={i}>{[value?.description].join(', ')}</div>
                          </div>
                        );
                      })}
                  </span>
                  <span>{formatDate(itens.dtCreate)}</span>
                  <button
                    onClick={() => getItenForUpdate(itens.id)}
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
        <button className="btnNewTask" onClick={createNewTask}>
          Nova tarefa
        </button>
      </div>
    </div>
  );
};

export default Tasks;

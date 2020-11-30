import React, { useEffect, useState, UIEvent } from "react";
import { Pagination } from "react-bootstrap";

import { useHistory } from "react-router-dom";

import formatDate from "../../../../utils";
import { useConfigContext } from "../../../../Context/taskContext";

import { Task } from "../../../../Interfaces/Task";
import "../style.css";

interface Props {
  chargeMoreListTask(e: any): Task[];
}

const Tasks: React.FC<Props> = ({ chargeMoreListTask }) => {
  const { deleteTask, task, limit } = useConfigContext();
  console.log(task.slice(0, limit));
  const history = useHistory();

  function getItenForUpdate(id: number) {
    return history.push(`updateTask/${id}`);
  }

  function createNewTask() {
    return history.push("/newTask");
  }

  function searchUsersGit() {
    return history.push("/gituserlists");
  }

  function searchRepositoryGit() {
    return history.push("/gitrepositorieslists");
  }

  return (
    <div className="mainStyleViewTask">
      <div className="listViewStyleTasks" onScroll={chargeMoreListTask}>
        <h3 className="styleTitleTasks">Listagem de tarefas</h3>
        {task.slice(0, limit).length > 0
          ? task.slice(0, limit).map((itens, index) => {
              return (
                <>
                  <div className="cardStyleTask" key={index}>
                    <span style={{ wordBreak: "break-word", maxWidth: 80 }}>
                      {itens.id +
                        " - " +
                        itens.name +
                        " - " +
                        (itens.finish ? "Atividade feita" : "Não feita")}
                      {itens.waytask.length > 0 &&
                        itens.waytask
                          .map((element) => element.description)
                          .join(";")}
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
                </>
              );
            })
          : "Não foram encontrados itens"}
      </div>
      <div className="styleFooterButton">
        <span>
          <button className="btnNewTask" onClick={createNewTask}>
            Nova tarefa
          </button>
        </span>
        <span>
          <button className="btnNewTask" onClick={searchUsersGit}>
            Buscar usuarios Github
          </button>
        </span>
        <span>
          <button className="btnNewTask" onClick={searchRepositoryGit}>
            Buscar repositório Github
          </button>
        </span>
      </div>
    </div>
  );
};

export default Tasks;

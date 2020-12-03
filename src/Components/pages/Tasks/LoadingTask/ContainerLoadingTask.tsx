import React, { useState, useEffect } from "react";

import LoadingView from "./";

import { deleteTask as deleteTaskRedux, listTasks } from "./Redux/actions";

import { Task } from "../../../../Interfaces/Task";

const ContainerLoadingTask: React.FC = () => {
  const [task, setTask] = useState<Task[]>(listTasks());

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tasksPerPage] = useState(5);

  let page = currentPage - 1;
  let start = page * tasksPerPage;
  let end = start + tasksPerPage;
  let currentTasks = task.slice(start, end);

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  function nextPage() {
    const totalPages = Math.ceil(task.length / 5);
    setCurrentPage(currentPage + 1);
    const lastPage = currentPage > totalPages;
    if (lastPage) {
      setCurrentPage(currentPage - 1);
    }
  }

  function prevPage() {
    setCurrentPage(currentPage - 1);
    if (currentPage < 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  function deleteTaskReduxConfirm(id: number) {
    const confirmDelTask = confirm("Deseja deletar essa tarefa?");
    if (confirmDelTask) {
      deleteTaskRedux(id);
      return id;
    }
  }

  return (
    <LoadingView
      paginate={paginate}
      currentTasks={currentTasks}
      currentPage={currentPage}
      prevPage={prevPage}
      nextPage={nextPage}
      deleteTaskReduxConfirm={deleteTaskReduxConfirm}
      task={task}
      setTask={setTask}
    />
  );
};

export default ContainerLoadingTask;

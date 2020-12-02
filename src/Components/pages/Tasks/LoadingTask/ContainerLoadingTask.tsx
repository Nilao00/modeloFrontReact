import React, { useState } from "react";
import { useSelector } from "react-redux";

import LoadingView from "./";
import { useConfigContext } from "../../../../Context/taskContext";

import { TaskStateObject } from "../../../../Interfaces/Task";

interface RootState {
  tasks: TaskStateObject;
}
const ContainerLoadingTask: React.FC = () => {
  const { task } = useConfigContext();

  const tasks = useSelector((state: RootState) => state.tasks);
  console.log(tasks);

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

  return (
    <LoadingView
      paginate={paginate}
      currentTasks={currentTasks}
      currentPage={currentPage}
      prevPage={prevPage}
      nextPage={nextPage}
    />
  );
};

export default ContainerLoadingTask;

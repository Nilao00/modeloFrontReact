import React, { useState } from "react";

import LoadingView from "./";
import { useConfigContext } from "../../../../Context/taskContext";

const ContainerLoadingTask: React.FC = () => {
  const { task } = useConfigContext();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tasksPerPage] = useState(5);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFisrtTask = indexOfLastTask - tasksPerPage;
  const currentTasks = task.slice(indexOfFisrtTask, indexOfLastTask);

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

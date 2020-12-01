import React, { useEffect, useState } from "react";

import { useConfigContext } from "../../../../Context/taskContext";

import LoadingView from "./";
import { Task } from "../../../../Interfaces/Task";

const ContainerLoadingTask: React.FC = () => {
  const { task, setTask, limit, setLimit } = useConfigContext();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [page, setPage] = useState<number>(1);
  function chargeMoreListTask(e: any): Task[] {
    let bottom =
      Math.ceil(e.target.scrollHeight - e.target.scrollTop) ==
      e.target.clientHeight;
    if (bottom && limit + 1 === task.length) {
      setLimit(limit + 2);
      task.slice(0, limit);
      return task;
    }
    return task;
  }

  function setIndexPaginateButton() {
    const pageNumbers = [];
    let countPage = Math.floor(task.length / 3);
    for (let index = 1; index < countPage; index++) {
      pageNumbers.push(index);
    }
    return pageNumbers;
  }

  const paginate = (pageNumber: number) => {
    setPage(pageNumber);
    if (pageNumber === 1) {
      setLimit(5);
      setTasks(task.slice(0, 5));
      return task;
    }
    setLimit(5 * pageNumber);
    setTasks(task.slice(limit, task.length - (5 - limit)));
    return task;
  };

  function prevPage() {
    setPage(page - 1);
    if (page === 1) {
      setLimit(5);
      setTasks(task.slice(0, 5));
      return task;
    }
    setLimit(5 * page);
    setTasks(task.slice(limit, 5 * page));
    return task;
  }

  function nextPage() {
    setPage(page + 1);
    if (page === 1) {
      setLimit(5);
      setTasks(task.slice(0, 5));
      return task;
    }
    setLimit(5 * page);
    setTasks(task.slice(limit, 5 * page));
    return task;
  }

  useEffect(() => {
    setIndexPaginateButton();
    setTasks(task);
  }, [task]);

  return (
    <LoadingView
      chargeMoreListTask={chargeMoreListTask}
      setIndexPaginateButton={setIndexPaginateButton}
      nextPage={nextPage}
      prevPage={prevPage}
      paginate={paginate}
      tasks={tasks}
    />
  );
};

export default ContainerLoadingTask;

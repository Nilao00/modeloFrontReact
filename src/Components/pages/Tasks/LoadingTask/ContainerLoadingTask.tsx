import React, { useEffect, useState } from "react";

import { useConfigContext } from "../../../../Context/taskContext";

import LoadingView from "./";
import { Task } from "../../../../Interfaces/Task";
import { element } from "prop-types";

const ContainerLoadingTask: React.FC = () => {
  const { task, limit, setLimit } = useConfigContext();
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
    let countPage = Math.floor(task.length / 2);
    for (let index = 1; index < countPage; index++) {
      if (index <= 5) {
        pageNumbers.push(index);
      }
    }
    return pageNumbers;
  }

  const paginate = (pageNumber: number) => {
    setPage(pageNumber);
    if (pageNumber === 1) {
      setLimit(5 * pageNumber);
      setTasks(task.slice(pageNumber, limit));
      return page;
    }
    setLimit(5 * pageNumber);
    setTasks(task.slice(pageNumber, limit));
    return page;
  };

  useEffect(() => {
    setIndexPaginateButton();
    setTasks(task);
  }, [task]);

  return (
    <LoadingView
      chargeMoreListTask={chargeMoreListTask}
      setIndexPaginateButton={setIndexPaginateButton}
      paginate={paginate}
      tasks={tasks}
    />
  );
};

export default ContainerLoadingTask;

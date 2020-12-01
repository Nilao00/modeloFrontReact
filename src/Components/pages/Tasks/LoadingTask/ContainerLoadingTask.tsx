import React, { useEffect, useState } from "react";

import { useConfigContext } from "../../../../Context/taskContext";

import LoadingView from "./";
import { Task, paginateTaks } from "../../../../Interfaces/Task";

const pageNumbers = [];
const ContainerLoadingTask: React.FC = () => {
  const { task, limit, setLimit, tasksListPaginate } = useConfigContext();
  const [tasks, setTasks] = useState<paginateTaks>();
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
    const countPages = tasksListPaginate(page, 5, page, page);
   for (let index = 1; index < countPages.total_pages; index++) {
      pageNumbers.push(index);
      console.log(index)
    }
    console.log(pageNumbers)
    return pageNumbers;
  }

  const paginate = (pageNumber: number) => {
    setPage(pageNumber);
    if (pageNumber === 1) {
      setLimit(5);
      //setTasks(task.slice(0, 5));
      return task;
    }
    setLimit(5 * pageNumber);
    // setTasks(task.slice(limit, task.length - limit));
    return task;
  };

  function prevPage() {
    setPage(page - 1);
    if (page === 1) {
      setLimit(5);
      // setTasks(task.slice(0, 5));
      return task;
    }
    setLimit(5 * page);
    //  setTasks(task.slice(limit, 5 * page));
    return task;
  }

  function nextPage() {
    setPage(page + 1);
    if (page === 1) {
      setLimit(5);
      //setTasks(task.slice(0, 5));
      return task;
    }
    setLimit(5 * page);
    // setTasks(task.slice(limit, 5 * page));
    return task;
  }

  useEffect(() => {
      //setTasks(tasks);
      setIndexPaginateButton();
  }, [pageNumbers]);

  return (
    <LoadingView
      chargeMoreListTask={chargeMoreListTask}
      setIndexPaginateButton={setIndexPaginateButton}
      nextPage={nextPage}
      prevPage={prevPage}
      paginate={paginate}    
      pageNumbers={pageNumbers}  
      //     tasks={tasks}
    />
  );
};

export default ContainerLoadingTask;

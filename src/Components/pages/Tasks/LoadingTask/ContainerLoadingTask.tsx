import React from "react";

import { useConfigContext } from "../../../../Context/taskContext";

import LoadingView from "./";
import { Task } from "../../../../Interfaces/Task";

const ContainerLoadingTask: React.FC = () => {
  const { task, limit, setLimit } = useConfigContext();
  function chargeMoreListTask(e: any): Task[] {
    let bottom =
      Math.ceil(e.target.scrollHeight - e.target.scrollTop) ==
      e.target.clientHeight;
      if (bottom && limit <= task.length) {
      setLimit(limit + 5);
      task.slice(0, limit);
      return task;
    }
    return task;
  }

  return <LoadingView chargeMoreListTask={chargeMoreListTask} />;
};

export default ContainerLoadingTask;

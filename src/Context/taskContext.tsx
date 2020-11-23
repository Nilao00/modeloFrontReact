import * as React from "react";
import { PropsMethods, Task } from "../Interfaces/Task";

const ConfigContext = React.createContext<PropsMethods>({} as PropsMethods);

export const ConfigContextProvider = ({ children }) => {
  const [task, setTask] = React.useState<Task[]>([]);

  const handleListTasks = (): Task[] => {
    return task;
  };

  const handleNewTaskCreate = (taskCreate: Task) => {
    setTask([...task, taskCreate]);
  };

  const handleTaskUpdate = (id: number, taskUpdate: Task) => {
    const response = task.map((elements) => {
      if (elements.id === id) {
        elements.name = taskUpdate.name;
        elements.finish = taskUpdate.finish;
        return elements;
      }
      return elements;
    });
    setTask(response);
  };

  const handleTaskDelete = (id: number) => {
    const confirmDel = confirm("Deseja excluir essa tarefa?");
    if (confirmDel) {
      const response = task.filter((elements) => {
        if (elements.id === id) {
          return false;
        }
        return true;
      });
      return setTask(response);
    }
  };

  return (
    <ConfigContext.Provider
      value={{
        task,
        getTasks: handleListTasks,
        newTaskCreate: handleNewTaskCreate,
        updateTask: handleTaskUpdate,
        deleteTask: handleTaskDelete,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
export const useConfigContext = () => {
  const context = React.useContext(ConfigContext);
  return context;
};

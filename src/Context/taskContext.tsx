import React, { useState, createContext, useContext } from "react";

import { Task } from "../Interfaces/Task";

export interface PropsMethods {
  task: Task[];
  createTask(taskCreate: Task): void;
  updateTask(id: number, taskUpdate: Task): void;
  deleteTask(id: number): void;
}

const ConfigContextTaks = createContext<PropsMethods>({} as PropsMethods);

export const ConfigContextProviderTask = ({ children }) => {
  const [task, setTask] = useState<Task[]>([]);

  const handleTaskCreate = (taskCreate: Task) => {
    setTask([...task, taskCreate]);
  };

  const handleTaskUpdate = (id: number, taskUpdate: Task) => {
    const response = task.map((elements) => {
      if (elements.id === id) {
        elements.name = taskUpdate.name;
        elements.finish = taskUpdate.finish;
        elements.waytask = taskUpdate.waytask;
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
    <ConfigContextTaks.Provider
      value={{
        task,
        createTask: handleTaskCreate,
        updateTask: handleTaskUpdate,
        deleteTask: handleTaskDelete,
      }}
    >
      {children}
    </ConfigContextTaks.Provider>
  );
};
export const useConfigContext = () => {
  const context = useContext(ConfigContextTaks);
  return context;
};

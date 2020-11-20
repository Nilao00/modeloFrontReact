import * as React from "react";
import "./styles/global.css";
import Tasks from "./Components/Tasks/Task";
import { Task, TaskProps } from "./Interfaces/Task";

const App: React.FC = () => {
  return <Tasks tasks={[]} />;
};

export default App;

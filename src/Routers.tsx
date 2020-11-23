import * as React from "react";
import * as Router from "react-router-dom";
import Tasks from "./Components/Tasks/Task";
import NewTask from "./Components/Tasks/NewTask";
import UpdateTaskView from "./Components/Tasks/UpdateTaskView";

const Routers: React.FC = () => {
  return (
    <Router.BrowserRouter>
      <Router.Switch>
        <Router.Route path="/" exact component={Tasks} />

        <Router.Route path="/newTask" component={NewTask} />

        <Router.Route path="/updateTask/:id" component={UpdateTaskView} />
      </Router.Switch>
    </Router.BrowserRouter>
  );
};

export default Routers;

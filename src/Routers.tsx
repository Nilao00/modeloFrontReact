import * as React from "react";
import * as Router from "react-router-dom";
import Tasks from "./Components/Tasks/Task";
import NewTask from "./Components/Tasks/NewTask";
import UpdateTask from "./Components/Tasks/UpdateTask";

const Routers: React.FC = () => {
  return (
    <Router.BrowserRouter>
      <Router.Switch>
        <Router.Route path="/" exact={true} component={Tasks} />

        <Router.Route path="/newTask" component={NewTask} />

        <Router.Route path="/updateTask" component={UpdateTask} />
      </Router.Switch>
    </Router.BrowserRouter>
  );
};

export default Routers;

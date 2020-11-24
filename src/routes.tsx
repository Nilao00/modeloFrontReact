import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoadingTask, NewTask, UpdateTask } from "./Components/pages/Tasks";

const Routers: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoadingTask} />

        <Route path="/newTask" component={NewTask} />

        <Route path="/updateTask/:id" component={UpdateTask} />
      </Switch>
    </Router>
  );
};

export default Routers;

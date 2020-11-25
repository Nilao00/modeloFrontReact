import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoadingTask, NewTask, UpdateTask } from "./Components/pages/Tasks";
import Login from "./Components/pages/Login/ContainerLogin";
import AuthRouter from "./AuthRouter";

const Routers: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <AuthRouter path="/" component={LoadingTask} exact={false} />
        <AuthRouter path="/tasks" component={LoadingTask} exact={false} />
        <AuthRouter path="/newTask" component={NewTask} exact={false} />
        <AuthRouter
          path="/updateTask/:id"
          component={UpdateTask}
          exact={false}
        />
      </Switch>
    </Router>
  );
};

export default Routers;

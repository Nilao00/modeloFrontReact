import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoadingTask, NewTask, UpdateTask } from "./Components/pages/Tasks";
import Login from "./Components/pages/Login/ContainerLogin";
import AuthRouter from "./AuthRouter";
import NoMatch from './AuthRouter/NoMatch';


const Routers: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <AuthRouter path="/tasks" component={LoadingTask} exact />
        <AuthRouter path="/newTask" component={NewTask} exact />
        <AuthRouter path="/updateTask/:id" component={UpdateTask} exact />
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;

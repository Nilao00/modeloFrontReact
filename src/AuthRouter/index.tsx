import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useConfigContext } from "../Context/loginContext";

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  const { token } = useConfigContext();

  return token !== '' ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};
export default PrivateRoute;

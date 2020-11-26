import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useConfigContext } from "../Context/loginContext";

interface Props {
  path: string;
  exact: boolean;
  component: React.FC;
}
const PrivateRoute: React.FC<Props> = (props) => {
  const { token } = useConfigContext();

  if (!token) return <Redirect to="/" />;

  return (
    <Route path={props.path} exact={props.exact} component={props.component} />
  );
};
export default PrivateRoute;

import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes";

const Router = () => (
  <Switch>
    {routes.map((route) => (
      <Route exact path={route.path} component={route.component} />
    ))}
    <Redirect to="/" />
  </Switch>
);
export default Router;

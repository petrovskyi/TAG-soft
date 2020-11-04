import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes";

const Router = () => (
  <Switch>
    {routes.map((route, i) => (
      <Route
        exact
        key={"route" + i}
        path={route.path}
        component={route.component}
      />
    ))}
    <Redirect to="/" />
  </Switch>
);
export default Router;

import './App.css';
import { Switch } from "react-router-dom";
import RouteWithSubRoutes from "./helper/subRoteHelper";
import routes from "./config/routesConfig";

function App() {
  return (
    <Switch>
      {/* Map through each route and will only serve the page based on its configuration */}
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={i} {...route} />;
      })}
    </Switch>
  );
}

export default App;

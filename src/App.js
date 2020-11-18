import logo from './logo.svg';
import './App.css';
import { Switch, Redirect, withRouter } from "react-router-dom";
import { Container, Col, Row } from 'reactstrap'
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

import * as React from "react";
import "./styles.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// components
import Nav from "components/Nav";
import NewOrder from "containers/NewOrder";
import Orders from "containers/Orders";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/new-order" />} />
          <Route exact path="/new-order">
            <NewOrder />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

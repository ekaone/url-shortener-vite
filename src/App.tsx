import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Home from "./home";
import Go from "./go";
import Demo from "./demo";

// basename={process.env.PUBLIC_URL}

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/demo" component={Demo} />
        <Route path="/go/:id" component={Go} />
      </Switch>
    </Router>
  );
}

export default App;

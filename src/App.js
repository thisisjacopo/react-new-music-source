import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import MainPage from "./screens/MainPage";
import "./App.css";
require("dotenv").config();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/main" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;

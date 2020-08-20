import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../container/Home/Home";
import Login from "../../container/pages/Login/Login";
import Dashboard from "../../container/pages/Dashboard/Dashboard";
// import Transaction from "../../cont ainer/pages/Transaction/Transaction";

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navigation;

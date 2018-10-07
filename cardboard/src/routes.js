import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";

export default (
  <Switch>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

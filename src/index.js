import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Dashboard from "views/admin/Dashboard.js";
import Tables from "views/admin/Tables.js";
import Login from "views/auth/Login";
import Register from "views/auth/Register";
import UnverVerification from "views/UnverVerification";
import Rejected from "views/Rejected";
import Clients from "components/Clients";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/under-verification" exact component={UnverVerification} />
      <Route path="/admin/tables" exact component={Tables} />
      <Route path="/Clients" exact component={Clients} />
      <Route path="/rejected" exact component={Rejected} />
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

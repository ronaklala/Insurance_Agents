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
import Profile from "components/Profile";
import Clients from "components/Clients";
import Checkout from "components/Checkout";
import SuccessPayment from "components/SuccessPayment";
import Txn from "components/Txn";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/under-verification" exact component={UnverVerification} />
      <Route path="/admin/tables" exact component={Tables} />
      <Route path="/Clients" exact component={Clients} />
      <Route path="/Payment-Success" exact component={SuccessPayment} />
      <Route path="/Purchase-Histroy" exact component={Txn} />
      <Route path="/Buy-Credits" exact component={Checkout} />
      <Route path="/rejected" exact component={Rejected} />
      <Route path="/Profile" component={Profile} />
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import { Layout } from "./components/";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Profile } from "./pages/profile/profile";
import { SelectedApplicants } from "./pages/selectedApplicants/selectedApplicants";
import { Dashboard } from "./pages/dashboard/dashboard";
import { RejectedApplicants } from "./pages/rejectedApplicants/rejectedApplicants";
// import { Login } from "./pages";

const LayoutRoute = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component props={props} />
        </Layout>
      )}
    />
  );
};

const Approute = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path={"/"} exact={true} component={Login} /> */}
        <LayoutRoute path={"/dashboard"} exact={true} Component={Dashboard} />
        <LayoutRoute path={"/dashboard/profile"} exact={true} Component={Profile} />
        <LayoutRoute path={"/dashboard/selectedApplicants"} exact={true} Component={SelectedApplicants} />
        <LayoutRoute path={"/dashboard/rejectedApplicants"} exact={true} Component={RejectedApplicants} />
      </Switch>
    </Router>
  );
};
export default Approute;

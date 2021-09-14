import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { fetchUser } from "../redux/actions";
import { useDispatch } from "react-redux";

import Header from "./Header";
import Landing from "./Landing";

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function SurveyNew() {
  return <h2>SurveyNew</h2>;
}

function Footer() {
  return <h2>Footer</h2>;
}

function App(props) {
  const dispatch = useDispatch();
  useEffect(
    (props) => {
      dispatch(fetchUser());
    },
    [dispatch]
  );
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route exact path="/surveys/new" component={SurveyNew} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

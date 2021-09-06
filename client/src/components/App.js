import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Header from "./Header";

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function SurveyNew() {
  return <h2>SurveyNew</h2>;
}

function Landing() {
  return <h2>Landing</h2>;
}

function Footer() {
  return <h2>Footer</h2>;
}

function App() {
  return (
    <Container disableGutters={true}>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
          <Footer />
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;

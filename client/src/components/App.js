import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function Header() {
  return <h2>Header</h2>;
}

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
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

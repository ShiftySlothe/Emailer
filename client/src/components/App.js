import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { fetchUser } from "../redux/actions";
import { useDispatch } from "react-redux";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import Footer from "./Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Box height="100vh">
        <Header />
        <Box minH="100%">
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
          <Footer />
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;

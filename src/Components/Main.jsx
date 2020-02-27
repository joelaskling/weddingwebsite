import React from "react";

import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import WeddingPage from "./WeddingPage/WeddingPage";
import FindPage from "./FindPage/FindPage";
import InfoPage from "./InfoPage/InfoPage";

const Main = () => (
  <switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/wedding" component={WeddingPage} />
    <Route exact path="/find" component={FindPage} />
    <Route exact path="/info" component={InfoPage} />
  </switch>
);

export default Main;

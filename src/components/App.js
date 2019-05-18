import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home"
import Agreements from "../pages/Agreements";

function App() {
  return(
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/agreements" component={Agreements}/>
            <Route exact path="/badges/new" component={BadgeNew}/>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </Layout>
      </BrowserRouter>
  );
}
export default App;
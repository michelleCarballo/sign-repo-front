import React from 'react'
import { Switch, Route } from "react-router";
import MyApp from '../components/Pdf';
import Home from '../components/Home'

const Router = () => {
    return (

        <Switch>
          <Route exact path="/pdf">
            <Home />
          </Route>
          <Route exact path="/app">
            <MyApp />
          </Route>
        </Switch>
    );
  };
  
  export default Router;
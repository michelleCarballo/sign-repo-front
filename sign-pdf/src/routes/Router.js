import React from 'react'
import { Switch, Route } from "react-router";
import MyApp from '../components/Pdf';

const Router = () => {
    return (

        <Switch>
          <Route exact path="/">
            <MyApp />
          </Route>
        </Switch>
    );
  };
  
  export default Router;
import React, { useEffect, useState, useHistory } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Movies from "./pages/Movies/Movies";
import Detail from "./pages/Detail/Detail";
import Favorites from "./pages/Favorites/Favorites";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact component={Movies}/>
          <Route path='/detail' component={Detail}/>
          <Route path='/favorites' component={Favorites}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Movies from "./pages/Movies/Movies";
import Detail from "./pages/Detail/Detail";
import Favorites from "./pages/Favorites/Favorites";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={Movies}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/favorites" component={Favorites}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Movies from "./pages/movies/Movies";
import Detail from "./pages/detail/Detail";
import Favorites from "./pages/favorites/Favorites";

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
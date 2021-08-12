import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Films from "./Components/Films";
import FilmInfo from "./Components/FilmInfo";
import WatchList from "./Components/WatchList";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app ">
        <header className="row centered">
          <Link to="/">
            <span className="link">Main</span>
          </Link>
          <Link to="/films">
            <span className="link">Films</span>
          </Link>
          <Link to="/watchList">
            <span className="link">Watch List</span>
          </Link>
        </header>
        <div className="decor"></div>

        <Switch>
          <Route exact path="/"></Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/filmInfo/:token">
            <FilmInfo />
          </Route>
          <Route path="/watchList">
            <WatchList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

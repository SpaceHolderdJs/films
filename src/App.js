import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Films from "./Components/Films";
import FilmInfo from "./Components/FilmInfo";
import WatchList from "./Components/WatchList";

import "./App.css";

const App = () => {
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList")
      ? JSON.parse(localStorage.getItem("watchList"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  const addToWatchList = (obj) => {
    setWatchList([...watchList, obj]);
  };

  const removeFromWatchList = (film) => {
    const filtered = watchList.filter((f) => f.id !== film.id);
    setWatchList(filtered);
  };

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
          <Route exact path="/">
            <div className="column centered text-wrapper">
              <h1>Imdb API</h1>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/238px-IMDB_Logo_2016.svg.png"
                alt=""
              />
              <p>
                IMDb is the world's most popular and authoritative source for
                movie, TV and celebrity content. Find ratings and reviews for
                the newest movie and TV shows.
              </p>
              <p>
                The movie and talent pages of IMDb are accessible to all
                internet users, but a registration process is necessary to
                contribute information to the site. Most data in the database is
                provided by volunteer contributors. The site enables registered
                users to submit new material and edits to existing entries.
                Users with a proven track record of submitting data are given
                instant approval for additions or corrections to cast, credits,
                and other demographics of media product and personalities.
                However, image, name, character name, plot summaries, and title
                changes are supposedly screened before publication, and usually
                take between 24 and 72 hours to appear. All registered users can
                choose their own site name, and most operate anonymously. They
                have a profile page which shows how long a registered user has
                been a member, as well as personal movie ratings (should the
                user decide to display them) and, since 2015, "badges" are added
                representing how many contributions a particular registered user
                has submitted. These badges range from total contributions made
                to independent categories such as photos, trivia, bios, etc. If
                a registered user or visitor is in the entertainment industry
                and has an IMDb page, then that user/visitor can add photos to
                that page by enrolling in IMDbPRO. There is no single index of
                contributors, no index on each profile page of the items
                contributed, and (except for plot synopses and biographies) no
                identification of contributors to each product's or person's
                data pages. Users are also invited to rate any film or TV series
                on a scale of 1 to 10, and the totals are converted into a
                weighted mean-rating that is displayed beside each title, with
                online filters employed to deter ballot-stuffing. In January
                2019, IMDb launched a free movie streaming platform called
                Freedive, an ad-supported service offering Hollywood movie
                titles and TV shows. Many Freedive titles are licensed from Sony
                Pictures. Subsequently, in June 2019, Freedive was rebranded as
                IMDbTV, during the launch of which, the amount of content
                contained on the platform was tripled.
              </p>
            </div>
          </Route>
          <Route path="/films">
            <Films
              addToWatchList={addToWatchList}
              removeFromWatchList={removeFromWatchList}
            />
          </Route>
          <Route path="/filmInfo/:token">
            <FilmInfo />
          </Route>
          <Route path="/watchList">
            <WatchList
              addToWatchList={addToWatchList}
              removeFromWatchList={removeFromWatchList}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

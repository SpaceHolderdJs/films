import React, { useState } from "react";
import Film from "./Film";
import { Link } from "react-router-dom";

const WatchList = ({ addToWatchList, removeFromWatchList }) => {
  const [list, setList] = useState(
    localStorage.getItem("watchList")
      ? JSON.parse(localStorage.getItem("watchList"))
      : []
  );

  const [randomFilm, setRandomFilm] = useState();

  const clearList = (f) => {
    setList(list.filter((film) => film.id !== f.id));
  };

  return (
    <div className="watchList column centered">
      <h1>Watch List</h1>
      <div className="row films-wrapper">
        {list.length < 1 ? (
          <h1>Nothing is here yet</h1>
        ) : (
          list.map((film, i) => (
            <Film
              key={i}
              film={film}
              addToWatchList={addToWatchList}
              removeFromWatchList={removeFromWatchList}
              clearList={clearList}
            />
          ))
        )}
      </div>
      {list.length > 1 && (
        <div className="column centered rand-film-wrapper">
          <h4>Random film to watch</h4>
          <button
            onClick={() =>
              setRandomFilm(list[Math.floor(Math.random() * (list.length - 1))])
            }>
            Select
          </button>
          {randomFilm && (
            <div className="row">
              <img src={randomFilm.i.imageUrl} alt={randomFilm.title} />
              <div className="column">
                <h3>{randomFilm.l}</h3>
                <span>Acrors: {randomFilm.s}</span>
                <span>Year: {randomFilm.y}</span>
                <span>Raiting: {randomFilm.rank}</span>
                <Link to={`/filmInfo/${randomFilm.id}`}>
                  <span className="link">More</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WatchList;

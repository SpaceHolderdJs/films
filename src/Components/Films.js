import React, { useEffect, useState } from "react";

import Film from "./Film";

import SearchIcon from "@material-ui/icons/Search";

const Films = ({ addToWatchList, removeFromWatchList }) => {
  const [searchVal, setSearchVal] = useState("");
  const [films, setFilms] = useState([]);

  const [loading, setLoading] = useState(false);

  const getFilmsByRequest = (req) => {
    setLoading(true);
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${req}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFilms(data.d);
        setLoading(false);
      });
  };

  return (
    <div className="films column centered">
      <h3>Films</h3>
      <div className="row centered">
        <input type="text" onChange={(e) => setSearchVal(e.target.value)} />
        <span className="icon" onClick={() => getFilmsByRequest(searchVal)}>
          Search
          <SearchIcon />
        </span>
      </div>
      <div className="films-wrapper row centered">
        {loading && <h1>Loading...</h1>}
        {films.map((film, i) => (
          <Film
            key={i}
            film={film}
            addToWatchList={addToWatchList}
            removeFromWatchList={removeFromWatchList}
          />
        ))}
      </div>
    </div>
  );
};

export default Films;

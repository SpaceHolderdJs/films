import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/RemoveRedEye";

const Film = ({ film, addToWatchList, removeFromWatchList, clearList }) => {
  const { l, q, i, s, y, rank, id } = film;

  const [more, setMore] = useState(false);

  const [added, setAdded] = useState(
    localStorage.getItem("watchList")
      ? JSON.parse(localStorage.getItem("watchList")).find((e) => e.id === id)
      : false
  );

  return (
    <div className="film column" style={{ background: `url(${i.imageUrl})` }}>
      <div className="line column">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <h4>{l}</h4>
          <div className="row centered">
            {!added ? (
              <span
                className="icon"
                onClick={() => {
                  addToWatchList(film);
                  setAdded(true);
                }}>
                <AddIcon />
              </span>
            ) : (
              <span
                className="icon"
                onClick={() => {
                  removeFromWatchList(film);
                  !clearList && setAdded(false);
                  clearList && clearList(film);
                }}>
                <RemoveIcon />
              </span>
            )}
            <span className="icon" onClick={() => setMore(!more)}>
              {more ? <CloseIcon /> : <InfoIcon />}
            </span>
          </div>
        </div>
        <span>Genre: {q}</span>
        {more && (
          <>
            <span>Actors: {s}</span>
            <div className="row raiting-wrapper">
              <span>Rank</span>
              <div
                className="rank row centered"
                style={{
                  width: `${Math.trunc(+rank) / 80}px`,
                  background: `rgb(${Math.trunc(+rank / 10)},${Math.trunc(
                    +rank / 100
                  )},${70})`,
                }}>
                {rank}
              </div>
            </div>
            <span>Year: {y}</span>
            <Link to={`/filmInfo/${id}`}>
              <span className="link">More</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Film;

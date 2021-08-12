import React, { useState, useEffect } from "react";
import Film from "./Film";

const WatchList = () => {
  const [list, setList] = useState(
    localStorage.getItem("watchList")
      ? JSON.parse(localStorage.getItem("watchList"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(list));
  }, [list]);

  return (
    <div className="watchList column centered">
      {list.length < 1 ? (
        <h1>Nothing is here yet</h1>
      ) : (
        list.map((film) => <Film film={film} />)
      )}
    </div>
  );
};

export default WatchList;

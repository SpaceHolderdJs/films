import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const FilmInfo = () => {
  const { token } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://imdb8.p.rapidapi.com/title/get-details?tconst=${token}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="film-info column centered">
      <div className="decor"></div>
      {data ? (
        <div className="row">
          <img src={data.image.url} alt={data.title} />
          <div className="column">
            <h1>{data.title}</h1>
            <h3>Genre: {data.titleType}</h3>
            <span>Duration : {data.runningTimeInMinutes} mins</span>
            <span>Episodes : {data.numberOfEpisodes}</span>
            <span>
              Years: {data.seriesStartYear} - {data.seriesEndYear}
            </span>
            {data.nextEpisode && (
              <Link to={`/filmInfo/:${data.nextEpisode.split("/")[2]}`}>
                <span className="link">Next episode</span>
              </Link>
            )}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default FilmInfo;

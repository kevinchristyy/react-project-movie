import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function MovieInfo() {
  const [movieId, setMovieId] = useState();
  const { id } = useParams();

  async function getMovie() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5972b76292067c64f204c909b96a79f0&language=en-US`
    );
    setMovieId(data);
    console.log(data);
  }

  const API_IMG = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movies__body">
      <main id="movies__main">
        <section>
          <div className="movies__container--full">
            <div className="row">
              <div className="movies__header">
                <h2
                  className="section__title movies__header--title"
                  data-aos="fade-in"
                  data-aos-delay="500"
                >
                  <Link
                    to="/"
                    className="arrow__left"
                    data-aos="fade-in"
                    data-aos-delay="750"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
                  </Link>
                  Back to Discover
                </h2>
              </div>
              <div className="movie__selected">
                <figure className="movie__selected--figure">
                  <img
                    src={API_IMG + movieId?.poster_path}
                    alt=""
                    className="movie__selected--img"
                  />
                </figure>
                <div className="movie__selected--description">
                  <h2 className="movie__selected--title">
                    {movieId?.original_title}
                  </h2>
                  <div className="movie__details--movieinfo">
                    <div className="movie__runtime">
                      <FontAwesomeIcon icon="fa-solid fa-clock" />
                      {`${movieId?.runtime} min`}
                    </div>
                    <div className="movie__language--movieinfo">
                      {movieId?.original_language}
                    </div>
                    <div className="movie__info">
                      <div className="movie__year">
                        <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                        {movieId?.release_date.slice(0, 4) || "N/A"}
                      </div>
                      <div className="movie__genre">{movieId?.genre}</div>
                    </div>
                  </div>
                  <div className="movie__tagline">"{movieId?.tagline}"</div>
                  <div className="movie__summary">
                    <h3>Overview</h3>
                    <p className="movie__summary--para">{movieId?.overview}</p>
                  </div>
                  <div className="movie__actions">
                    <button className="btn__play">Play</button>
                    <button className="btn__trailer">Trailer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MovieInfo;

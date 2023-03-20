import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const API_IMG = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

  return (
    <div className="movie">
      <Link to={`/movie/${movie.id}`}>
        <figure>
          <img
            src={API_IMG + movie.poster_path}
            className="movie__img"
            alt=""
          />
        </figure>
        <div className="movie__title">
          <div className="movie__title--link">
            {movie.title}
            <div className="movie__details">
              <div className="movie__language">{movie.original_language}</div>
              <div className="ranking">
                <div className="thumb">
                  <FontAwesomeIcon icon="fa-thumbs-up" />
                </div>
                <div className="movie__vote">{movie.vote_average}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;

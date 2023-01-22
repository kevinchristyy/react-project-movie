import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Popular() {
  const [popMovies, setPopMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [duplicate] = useState('')

  const API_IMG = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

  useEffect(() => {
    async function fetchPopularMovies() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=5972b76292067c64f204c909b96a79f0&language=en-US&page=1`
      );
      setPopMovies(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 500)
    }
    fetchPopularMovies();
  }, []);

  return (
    <>
      <div className="movies__body">
        <main id="movies__main">
          <section>
            <div className="movies__container">
              <div className="row">
                <div className="movies__header">
                  <h2 className="section__title movies__header--title">
                    Popular Movies
                  </h2>
                </div>
                <div className="movies">
                  {loading
                    ? new Array(20).fill(0).map((_, index) => (
                        <div className="movie" key={index}>
                          <img
                            src="https://wallpapers.ispazio.net/wp-content/uploads/2021/04/solid-gray.png"
                            className="movie__img--skeleton skeleton"
                            alt=""
                          />
                          <div className="movie__title">
                            <div className="movie__title--link-skeleton"></div>
                            <div className="movie__details--skeleton"></div>
                          </div>
                        </div>
                      ))
                    : popMovies.map((movie, index) => {
                        return (
                          <div className="movie" key={index}>
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
                                  <div className="movie__language">
                                    {movie.original_language}
                                  </div>
                                  <div className="ranking">
                                    <div className="thumb">
                                      <FontAwesomeIcon icon="fa-thumbs-up" />
                                    </div>
                                    <div className="movie__vote">
                                      {movie.vote_average}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Popular;
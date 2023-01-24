import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function MovieSearch() {
    const [resultMovies, setResultMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { searchMovie } = useParams();
  
    const API_IMG = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  
    useEffect(() => {
      async function fetchSearchMovies() {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=5972b76292067c64f204c909b96a79f0&include_adult=false&query=${searchMovie}&page=1`
        );
        setResultMovies(data.results);
        setTimeout(() => {
          setLoading(false);
        }, 500)
      }
      fetchSearchMovies();
    }, []);
  
    return (
      <>
        <div className="movies__body">
          <main id="movies__main">
            <section>
              <div className="movies__container">
                <div className="row">
                  <div className="movies__header">
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
                      : resultMovies.map((movie, index) => {
                          return (
                            <div className="movie" key={index} movie={movie}>
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

export default MovieSearch
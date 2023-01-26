import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomSkeleton from "../components/CustomSkeleton";
import MovieCard from "../components/MovieCard";

function Popular() {
  const [popMovies, setPopMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPopularMovies() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=5972b76292067c64f204c909b96a79f0&language=en-US&page=1`
      );
      setPopMovies(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 500);
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
                    <Link to="/" className="arrow__left">
                      <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
                    </Link>
                    Popular Movies
                  </h2>
                </div>
                <div className="movies">
                  {loading ? (
                    <CustomSkeleton skeletonCount={20} />
                  ) : (
                    popMovies.map((movie, index) => {
                      return <MovieCard key={index} {...movie} movie={movie} />;
                    })
                  )}
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

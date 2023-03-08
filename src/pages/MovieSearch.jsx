import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CustomSkeleton from "../components/CustomSkeleton";
import MovieCard from "../components/MovieCard";

function MovieSearch() {
  const [resultMovies, setResultMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchMovie } = useParams();

  useEffect(() => {
    async function fetchSearchMovies() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=5972b76292067c64f204c909b96a79f0&include_adult=false&query=${searchMovie}&page=1`
      );
      setResultMovies(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 500);
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
                  <h2
                    className="section__title movies__header--title"
                    data-aos="fade-in"
                    data-aos-delay="500"
                  >
                    <Link to="/" className="arrow__left">
                      <FontAwesomeIcon
                        icon="fa-solid fa-arrow-left-long"
                        data-aos="fade-in"
                        data-aos-delay="750"
                      />
                    </Link>
                    SearchResults for{" "}
                    <span className="purple">{searchMovie}</span>
                  </h2>
                </div>
                <div className="movies">
                  {loading
                    ? new Array(20)
                        .fill(0)
                        .map((_, index) => (
                          <CustomSkeleton skeletonCount={20} key={index} />
                        ))
                    : resultMovies.map((movie, index) => {
                        return <MovieCard movie={movie} key={index} />;
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

export default MovieSearch;

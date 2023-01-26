import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomSkeleton from "../components/CustomSkeleton";
import MovieCard from "../components/MovieCard";

function Latest() {
  const [latestMovie, setLatestMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestMovies() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/latest?api_key=5972b76292067c64f204c909b96a79f0&language=en-US`
      );
      setLatestMovies(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
    fetchLatestMovies();
  }, []);

  return (
    <>
      <div className="movies__body">
        <main id="movies__main">
          <section>
            <div className="movies__container--latest">
              <div className="row">
                <div className="movies__header">
                  <h2 className="section__title movies__header--title">
                    <Link to="/" className="arrow__left">
                      <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
                    </Link>
                    Latest Movies
                  </h2>
                </div>
                <div className="movies">
                  {" "}
                  {loading ? (
                    <CustomSkeleton skeletonCount={1} />
                  ) : (
                    <MovieCard movie={latestMovie} />
                  )}{" "}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Latest;

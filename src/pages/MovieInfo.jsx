import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";

function MovieInfo() {
  const { id } = useParams;
  return (
    <>
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
                    Movies
                  </h2>
                </div>
                <div className="movie__selected">
                  <figure className="movie__selected--figure">
                    <img src="" alt="" className="movie__selected--img" />
                  </figure>
                  <div className="book__selected--description">
                    <h3 className="movie__selected--title">Harry potter</h3>
                  </div>
                  <div className="movie__info">Language, year</div>
                  <div className="movie__summary"></div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default MovieInfo;

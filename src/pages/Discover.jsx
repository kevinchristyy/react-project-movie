import { Link } from "react-router-dom";
import CinemaSeat from "../assets/cinemaseat.svg";
import "aos/dist/aos.css";

function Discover() {
  return (
    <section id="search">
      <div className="search__page">
        <div className="header__container">
          <div className="header__description">
            <h1 className="" data-aos="fade-in" data-aos-delay="500">
              Lots of <span className="purple">Strym</span>'s to discover.
              <br />
              <div className="header__description sub-description">
                <h2 data-aos="fade-in" data-aos-delay="750">
                  What are you waiting for? Start{" "}
                  <span className="purple">Strym</span>-ing
                </h2>
              </div>
              <div data-aos="fade-in" data-aos-delay="1000">
                <Link to="/popular" className="categories__description">
                  <span>Popular</span>
                </Link>
                <Link to="/latest" className="categories__description">
                  <span>Latest</span>
                </Link>
              </div>
            </h1>
          </div>
          <figure className="header__img--wrapper">
            <img
              src={CinemaSeat}
              alt=""
              className="cinema__img"
              data-aos="fade-up"
              data-aos-delay="1000"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Discover;

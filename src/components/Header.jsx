import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StrymLogo from "../assets/Strym.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const { id } = useParams();

  function onSearch() {
    fetchMovies(searchMovie);
    navigate("/search");
  }

  async function fetchMovies() {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5972b76292067c64f204c909b96a79f0&include_adult=false&query=${id}&page=1`);
    setMovies(data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, []);



  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img className="logo" src={StrymLogo} alt="" />
        </Link>
        <div className="search__field">
          <form action="">
            <input
              type="text"
              placeholder="Search Movies..."
              className="search__input"
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
            />
            <button onClick={() => onSearch()} className="search__button">
              <FontAwesomeIcon icon="magnifying-glass" className="glass" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;

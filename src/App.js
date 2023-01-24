import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Popular from "./pages/Popular";
import Home from "./pages/Home";
import Latest from "./pages/Latest";
import MovieSearch from "./pages/MovieSearch";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/search" element={<MovieSearch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

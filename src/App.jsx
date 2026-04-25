import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Add this for Card component

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HeroInfo from './components/HeroInfo';
import MoviesFilter from './components/MoviesFilter';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import DetailPage from './components/DetailPage';
import NewsLetter from './components/NewsLetter';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  return null;
};

// Home Component
function Home({ currentPage, setCurrentPage, triggerSearch }) {
  const [resetFilters, setResetFilters] = useState(false);
  const [filters, setFilters] = useState({
    quality: '',
    genre: '',
    rating: '',
    limit: '30',
    sort_by: ''
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <>
      <HeroInfo />
      <MoviesFilter
        onFilterChange={handleFilterChange}
        resetFilters={resetFilters}
        setResetFilters={setResetFilters}
      />
      <Movies
        searchVal={triggerSearch}
        currentPage={currentPage}
        filters={filters}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <NewsLetter />
    </>
  );
}

// Main App Component
function App() {
  const [triggerSearch, setTriggerSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (value) => {
    setTriggerSearch(value);
    setCurrentPage(1);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar onSearch={handleSearch} />
      <main className="bg-[#02021C] min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                triggerSearch={triggerSearch}
              />
            }
          />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
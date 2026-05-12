import HeroInfo from "../components/HeroInfo";
import MoviesFilter from "../components/MoviesFilter";
import Movies from "../components/Movies";
import Pagination from "../components/Pagination";

function Home() {


  return (
    <>
      <HeroInfo />
      <MoviesFilter />
      <Movies/>
     <Pagination/>
    </>
  );
}

export default Home;

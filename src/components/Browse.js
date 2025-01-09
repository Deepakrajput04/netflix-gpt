import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';


const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />
      {/* 
        mainContainer
          - videoBackground
          - videoTittle
        secondryContainer
          - movieList * n
            - cards * n 
      */}
    </div>
  );
};

export default Browse;

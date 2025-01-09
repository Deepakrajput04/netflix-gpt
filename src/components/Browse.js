import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();

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

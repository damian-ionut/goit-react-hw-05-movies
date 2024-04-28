import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as apiMovie from 'service/apiMovies';
import { Title } from 'pages/Home/Home.styled';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setStatus('pending');

    async function getMovies() {
      try {
        const { results } = await apiMovie.getMovie();
        if (!results.length) {
          console.log('Oooh oh, there are no results.');
          return;
        }
        setMovies([...results]);
        setStatus('resolved');
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    }
    getMovies();
  }, []);

  return (
    <>
      {status === 'rejected' && <h3>{error}</h3>}
      <Title>Trending today</Title>
      <MovieList data={movies} url="movies/" location={location} />
    </>
  );
};

Home.propTypes = {
  movies: PropTypes.array,
  error: PropTypes.any,
  status: PropTypes.string,
};

export default Home;
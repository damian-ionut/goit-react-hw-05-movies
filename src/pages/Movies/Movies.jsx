import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as apiMovies from 'service/apiMovies';
import { Form, Input, Button } from './Movies.styled';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [titles, setTitles] = useState([]);
  const [status, setStatus] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }

    setStatus('pending');

    async function getMovies() {
      try {
        const { results } = await apiMovies.getMoviesByQuery(query);

        setTitles([...results]);
        if (results.length > 0) {
          setStatus('resolved');
          return;
        }
        setStatus('empty');
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    }
    getMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
    setTitles([]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" />
        <Button type="submit">Search</Button>
      </Form>
      {status === 'empty' && <p>No matches for your query..</p>}
      {titles && <MovieList data={titles} url="" location={location} />}
    </>
  );
};

Movies.propTypes = {
  titles: PropTypes.array,
  error: PropTypes.any,
  status: PropTypes.string,
  searchParams: PropTypes.object,
};

export default Movies;

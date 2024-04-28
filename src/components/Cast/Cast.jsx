import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as apiMovies from 'service/apiMovies';
import { List, Item, Image, CardTitle, Character, NoCast } from '../Cast/Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const { cast } = await apiMovies.getCastById(movieId);
        setCast(cast);
        setStatus('resolved');
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    }

    fetchCast();

    return () => {
      setStatus('pending');
      setError(null);
    };
  }, [movieId]);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'rejected') {
    return <h3>{error}</h3>;
  }

  return (
    <>
      <List>
        {cast.map(({ id, name, profile_path, character }) => (
          <Item key={id}>
            {profile_path && (
              <Image src={`http://image.tmdb.org/t/p/w780/${profile_path}`} alt="foto" />
            )}
            <CardTitle>{name}</CardTitle>
            <Character>Character: {character}</Character>
          </Item>
        ))}
      </List>
      {cast.length === 0 && <NoCast>We don't have any cast for this movie</NoCast>}
    </>
  );
};

export default Cast;

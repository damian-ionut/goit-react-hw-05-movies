import React from 'react';
import PropTypes from 'prop-types';
import { BsFillPlayFill } from 'react-icons/bs';
import { StyledList, StyledItem, StyledLink } from './MovieList.styled'; 

const MovieList = ({ data, url = '', location }) => {
  return (
    <StyledList>
      {Array.isArray(data) &&
        data.map(({ id, title }) => (
          <StyledItem key={id}>
            <BsFillPlayFill />
            <StyledLink to={`${url}${id}`} state={{ from: location }}>
              {title}
            </StyledLink>
          </StyledItem>
        ))}
    </StyledList>
  );
};

MovieList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  url: PropTypes.string,
  location: PropTypes.object.isRequired,
};

export default MovieList;

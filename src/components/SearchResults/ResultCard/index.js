import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import StyledCard from './style';

const MovieCard = ({
  title,
  description,
  release_date,
  id,
  image,
  media_type
}) => {
  return (
    <StyledCard>
      <img
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        alt={`${title} poster`}
      />
      <div>
        <h3>{title}</h3>
        <h6>{release_date}</h6>
        <p>{description}</p>
      </div>
      <Route>
        <NavLink className="link" to={`/${media_type}/${id}-${title}`}>
          Read More ...
        </NavLink>
      </Route>
    </StyledCard>
  );
};

export default MovieCard;

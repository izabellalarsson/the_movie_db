import React from 'react';
import { Wrapper, Info, Actors, ActorsCard } from './style';

const Content = ({ info, actors, year, title }) => {
  return (
    <Wrapper>
      <Info>
        <img
          src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
          alt="poster"
        />
        <div>
          <h2>
            {title} ({year})
          </h2>
          <h4>Overview</h4>
          <p>{info.overview}</p>
        </div>
      </Info>
      <Actors>
        <h3>Top actors</h3>
        <section>
          {actors.map((actor, i) => (
            <ActorsCard key={i}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={`${info.title} poster`}
              />
              <h4>{actor.name}</h4>
              <h6>As {actor.character}</h6>
            </ActorsCard>
          ))}
          {/* mappa ut actors med ev bild och namn */}
        </section>
      </Actors>
    </Wrapper>
  );
};

export default Content;

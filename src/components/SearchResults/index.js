import React, { useState, useEffect } from 'react';
import ResultCard from './ResultCard';
import { Redirect } from 'react-router-dom';
import Layout from '../Layout';
import Navbar from '../Navbar';

const SearchResults = ({ match }) => {
  const [searchValue] = useState(match.params.id);
  const [result, setResult] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const handleSearchResults = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchValue}&page=1&include_adult=false`
      );

      let data = await response.json();

      if (data.total_results === 0) {
        setRedirect(true);
      } else {
        let tvShows = data.results.filter(tvShow => {
          return tvShow.media_type === 'tv';
        });

        let movies = data.results.filter(movie => {
          return movie.media_type === 'movie';
        });

        setResult(data.results[0].media_type === 'tv' ? tvShows : movies);
      }
    };
    handleSearchResults();
  }, []);

  const getExcerpted = (str, limit) => {
    let fullText = str;
    let shortText = str;
    shortText = shortText.substr(0, shortText.lastIndexOf(' ', limit)) + '...';
    let returnString = {
      fullText: fullText,
      shortText: shortText
    };
    return returnString;
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <Navbar />
      {result.map((r, i) => (
        <ResultCard
          key={i}
          title={r.original_name === undefined ? r.title : r.original_name}
          release_date={
            r.release_date === undefined ? r.first_air_date : r.release_date
          }
          description={getExcerpted(r.overview, 200).shortText}
          id={r.id}
          image={r.poster_path}
          media_type={r.media_type}
        />
      ))}
    </Layout>
  );
};

export default SearchResults;

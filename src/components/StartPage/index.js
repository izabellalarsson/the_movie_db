import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchFiled from './style';
import Layout from '../Layout';

const StartPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <Layout>
      <SearchFiled>
        <h2>Find your new favorite movie</h2>
        <input
          type="text"
          placeholder="Seach for a movie"
          onChange={handleChange}
          value={inputValue}
        />
        <Link to={`results/${inputValue}`}>
          <button type="submit">Find movie</button>
        </Link>
      </SearchFiled>
    </Layout>
  );
};

export default StartPage;

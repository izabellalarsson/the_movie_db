import React, { useState, useEffect } from 'react';
import Content from './Content';
import Layout from '../Layout';
import Navbar from '../Navbar';

const MoreInfo = ({ match }) => {
  const [idValue] = useState(match.params.id);
  const [resultActors, setResultActors] = useState([]);
  const [resultInfo, setResultInfo] = useState([]);
  const [type] = useState(match.params.type);
  const [year, setyear] = useState(null);
  const [title, settitle] = useState(null);

  useEffect(() => {
    const handleFetchInfo = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${idValue}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US`
      );

      let data = await response.json();

      let date =
        data.release_date === undefined
          ? data.first_air_date.split('-')
          : data.release_date.split('-');
      let year = date[0];

      let title = data.title === undefined ? data.original_name : data.title;

      setResultInfo(data);
      setyear(year);
      settitle(title);
    };

    const handleFetchActors = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${idValue}/credits?api_key=${
          process.env.REACT_APP_API_KEY
        }`
      );

      let data = await response.json();

      setResultActors(data.cast.slice(0, 14));
    };

    handleFetchInfo();
    handleFetchActors();
  }, [idValue, type]);

  return (
    <Layout>
      <Navbar />
      <Content
        title={title}
        actors={resultActors}
        year={year}
        info={resultInfo}
      />
    </Layout>
  );
};

export default MoreInfo;

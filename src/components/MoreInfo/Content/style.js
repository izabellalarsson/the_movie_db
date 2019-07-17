import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Info = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    width: 40%;
    padding-left: 30%;
    object-fit: cover;
  }

  p {
    padding-right: 30%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: none;
    p,
    h2,
    h4 {
      padding-left: 20px;
    }

    p {
      width: 80%;
      padding-right: 20px;
    }

    img {
      width: 80%;
      padding: 20px;
      justify-self: center;
    }
  }
`;

export const Actors = styled.div`
  width: 100%;
  margin: 10vh 0;
  background: #fefbf6;
  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 10px;
    padding: 20px;
  }

  h3 {
    grid-column-start: 1;
    grid-column-end: five;
    padding: 10px;
  }
`;

export const ActorsCard = styled.div`
  padding: 10px;
  img {
    object-fit: cover;
    width: 100%;
    margin-bottom: 10px;
  }

  h4,
  h6 {
    margin: 0;
  }
`;

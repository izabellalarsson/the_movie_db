import styled from 'styled-components';

const StyledCard = styled.div`
  background: #fefbf6;
  width: 80%;
  margin: 2vh 5%;
  display: grid;
  grid-template-columns: 20% 1fr 10%;
  padding: 20px;

  img {
    width: 80%;
    object-fit: cover;
  }

  .link {
    align-self: flex-end;
  }

  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr auto auto;
    grid-template-columns: 100%;

    img {
      width: 100%;
    }

    .link {
      justify-self: flex-end;
    }
  }
`;

export default StyledCard;

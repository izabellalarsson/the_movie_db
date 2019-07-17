import styled from 'styled-components';

const SearchFiled = styled.form`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: #000;
    font-size: 32pt;
    font-family: 'Rubik', sans-serif;
    text-align: center;
    margin-top: 0;
  }

  input {
    width: 60%;
    height: 3vh;
    font-size: 14pt;
    margin-bottom: 14px;
  }

  /* knappen ska göras större i mobil */
  button,
  button:visited {
    font-family: 'Rubik', sans-serif;
    font-size: 14pt;
    background-color: #fb3b49;
    padding: 10px 20px;
    border: 3px solid #fb3b49;
    box-shadow: -5px 4px #fcd1d2;
    transition: 0.15s;
    text-decoration: none;
    color: #fff;
  }

  button:hover {
    box-shadow: 0 0 #fcd1d2;
    transform: translateY(3px);
  }

  button:active {
    background-color: #fcd1d2;
  }

  @media screen and (max-width: 768px) {
    input {
      width: 80%;
    }
  }
`;

export default SearchFiled;

import styled from 'styled-components';

const StyledNavbar = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Ruda', sans-serif;
  position: fixed;
  top: 0;

  .link {
    padding: 0 30px;
  }

  h1 {
    margin: 15px 0;
    padding: 0 30px;
    font-weight: 700;
    font-size: 14pt;
  }
`;

export default StyledNavbar;

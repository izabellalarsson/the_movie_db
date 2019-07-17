import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;

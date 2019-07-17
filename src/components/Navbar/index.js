import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import StyledNavbar from './style';
const Navbar = props => {
  return (
    <StyledNavbar>
      <nav>
        <Route>
          <NavLink className="link" to="/">
            <i className="fas fa-chevron-left" /> Back to search
          </NavLink>
        </Route>
      </nav>
      <h1>The Movie DB</h1>
    </StyledNavbar>
  );
};

export default Navbar;

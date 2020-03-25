import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 16px;
`


function Nav(){
  return(
    <div>
      <NavBarLink to='/about'> About </NavBarLink>
      <NavBarLink to='/skills'> Skills </NavBarLink>
      <NavBarLink to='/contact'> Contact </NavBarLink>
    </div>
  )
}

export default Nav;
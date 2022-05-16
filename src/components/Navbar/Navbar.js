import React from 'react';
import { NavbarButton, NavbarLogo, NavbarSection } from './Styled.Navbar';

function Navbar({themeToggler}) {

  const logo = '{TB}';

  return (
    <NavbarSection>
      <NavbarLogo to='/'>{logo}</NavbarLogo>
      <NavbarButton onClick={themeToggler} aria-label='Theme'></NavbarButton>
    </NavbarSection>
  )
}

export default Navbar
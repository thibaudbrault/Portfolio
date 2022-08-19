import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { NavbarButton, NavbarLogo, NavbarSection } from './Styled.Navbar';

function Navbar({ themeToggler, theme }) {
	const logo = '{TB}';

	return (
		<NavbarSection>
			<NavbarLogo to='/'>{logo}</NavbarLogo>
			<NavbarButton onClick={themeToggler} aria-label='Theme'>
				{theme === 'dark' ? <BsSun /> : <BsMoon />}
			</NavbarButton>
		</NavbarSection>
	);
}

export default Navbar;

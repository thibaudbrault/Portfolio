import React from 'react';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { NavbarButton, NavbarLogo, NavbarSection } from './Styled.Navbar';

function Navbar({ themeToggler, theme }) {
	const logo = '{TB}';

	return (
		<NavbarSection>
			<NavbarLogo passHref href={'/'}>
				<a>{logo}</a>
			</NavbarLogo>
			<NavbarButton onClick={themeToggler} aria-label='Theme'>
				{theme === 'dark' ? <BsSun /> : <BsMoonStars />}
			</NavbarButton>
		</NavbarSection>
	);
}

export default Navbar;

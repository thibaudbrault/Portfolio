import React from 'react';

import CgMoon from '@meronex/icons/cg/CgMoon';
import CgSun from '@meronex/icons/cg/CgSun';

import { NavbarButton, NavbarLogo, NavbarSection } from './Styled.Navbar';

function Navbar({ themeToggler, theme }) {
	const logo = '{TB}';

	return (
		<NavbarSection>
			<NavbarLogo passHref href={'/'}>
				<a>{logo}</a>
			</NavbarLogo>
			<NavbarButton onClick={themeToggler} aria-label='Theme'>
				{theme === 'dark' ? <CgSun /> : <CgMoon />}
			</NavbarButton>
		</NavbarSection>
	);
}

export default Navbar;

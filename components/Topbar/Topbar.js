import React from 'react';

import CgMoon from '@meronex/icons/cg/CgMoon';
import CgSun from '@meronex/icons/cg/CgSun';

import { TopbarButton, TopbarLogo, TopbarSection } from './Styled.Topbar';

function Topbar({ themeToggler, theme }) {
	const logo = '{TB}';

	return (
		<TopbarSection>
			<TopbarLogo passHref href={'/'}>
				<a>{logo}</a>
			</TopbarLogo>
			<TopbarButton onClick={themeToggler} aria-label='Theme'>
				{theme === 'dark' ? <CgSun /> : <CgMoon />}
			</TopbarButton>
		</TopbarSection>
	);
}

export default Topbar;

import React from 'react';

import { TopbarButton, TopbarLogo, TopbarSection } from './Styled.Topbar';

function Topbar({ themeToggler, theme }) {
	const logo = '{TB}';

	return (
		<TopbarSection>
			<TopbarLogo passHref href={'/'}>
				<a>{logo}</a>
			</TopbarLogo>
			<TopbarButton onClick={themeToggler} aria-label='Theme'>
				{theme === 'dark' ? <img src="/assets/sun.svg" alt="Light" /> : <img src="/assets/evil-moon.svg" alt="Dark" />}
			</TopbarButton>
		</TopbarSection>
	);
}

export default Topbar;

import React from 'react';
import Image from 'next/future/image';

import { TopbarButton, TopbarImg, TopbarLogo, TopbarSection } from './Styled.Topbar';
import Link from 'next/link';

function Topbar({ themeToggler, theme }) {
	const logo = '{TB}';

	return (
		<TopbarSection>
			<TopbarLogo>
				<Link href={'/'}>{logo}</Link>
				<TopbarImg>
					{theme === 'dark' ? (
						<Image src="/assets/overlord-helm.svg" fill alt="" />
					) : (
						<Image src="/assets/brutal-helm.svg" fill alt="" />
					)}
				</TopbarImg>
			</TopbarLogo>
			<TopbarButton onClick={themeToggler} aria-label='Theme'>
				{theme === 'dark' ? (
					<Image src="/assets/sun.svg" fill alt="Light" />
				) : (
					<Image src="/assets/evil-moon.svg" fill alt="Dark" />
				)}
			</TopbarButton>
		</TopbarSection>
	);
}

export default Topbar;

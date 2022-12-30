import React from 'react';
import Image from 'next/future/image';

import {
	TopbarButton,
	TopbarImg,
	TopbarLogo,
	TopbarSection,
} from './Styled.Topbar';
import Link from 'next/link';

import GiOverlordHelm from '@meronex/icons/gi/GiOverlordHelm';
import GiBrutalHelm from '@meronex/icons/gi/GiBrutalHelm';
import GiSun from '@meronex/icons/gi/GiSun';
import GiEvilMoon from '@meronex/icons/gi/GiEvilMoon';

function Topbar({ themeToggler, theme }) {
	const logo = '{TB}';

	return (
		<TopbarSection>
			<TopbarLogo>
				<Link href={'/'}>{logo}</Link>
				<TopbarImg>
					{theme === 'dark' ? <GiOverlordHelm /> : <GiBrutalHelm />}
				</TopbarImg>
			</TopbarLogo>
			<TopbarButton onClick={themeToggler} aria-label='Theme'>
				{theme === 'dark' ? <GiSun /> : <GiEvilMoon />}
			</TopbarButton>
		</TopbarSection>
	);
}

export default Topbar;

import React, { useState } from 'react';
import Link from 'next/link';

import CgMoon from '@meronex/icons/cg/CgMoon';
import CgSun from '@meronex/icons/cg/CgSun';
import BisChevronDown from '@meronex/icons/bi/BisChevronDown';
import BisChevronUp from '@meronex/icons/bi/BisChevronUp';

import { NavbarButton, NavbarDropdown, NavbarLinks, NavbarLogo, NavbarSection } from './Styled.Navbar';

function Navbar({ themeToggler, theme }) {
	const logo = '{TB}';

	const [open, setOpen] = useState(false);
	const [btnValue, setBtnValue] = useState('Page')

	const handleOpen = () => {
		setOpen(!open)
	}

	return (
		<NavbarSection>
			<NavbarLogo passHref href={'/'}>
				<a>{logo}</a>
			</NavbarLogo>
			<NavbarLinks>
				<NavbarDropdown>
					<button onClick={handleOpen}>
						{btnValue}
						{open ? <BisChevronUp /> : <BisChevronDown />}
					</button>
					{open &&
						<ul>
							<li>
								<Link href="/" onClick={() => {
									setBtnValue('Home')
								}}>
									/
								</Link>
							</li>
							<li>
								<Link href="/" onClick={() => {
									setBtnValue('About')
								}}>
									/about
								</Link>
							</li>
						</ul>
					}
				</NavbarDropdown>
				<NavbarButton onClick={themeToggler} aria-label='Theme'>
					{theme === 'dark' ? <CgSun /> : <CgMoon />}
				</NavbarButton>
			</NavbarLinks>
		</NavbarSection>
	);
}

export default Navbar;

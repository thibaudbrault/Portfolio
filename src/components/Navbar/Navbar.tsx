import React from 'react';
import Link from 'next/link';

import { NavbarContainer } from './Styled.Navbar';
import GiSaloon from '@meronex/icons/gi/GiSaloon';
import GiBackpack from '@meronex/icons/gi/GiBackpack';

function Navbar() {
	return (
		<NavbarContainer>
			<Link href='/' passHref>
				<a>
					<GiSaloon />
					<span>Accueil</span>
				</a>
			</Link>
			<Link href='/#projects' passHref>
				<a>
					<GiBackpack />
					<span>Travail</span>
				</a>
			</Link>
		</NavbarContainer>
	);
}

export default Navbar;

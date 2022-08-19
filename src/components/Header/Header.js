import React from 'react';
import { Link } from 'gatsby';

import {
	HeaderContainer,
	HeaderSection,
	HeaderSubtitle,
	HeaderTitle,
	LinksSection,
} from './Styled.Header';

function Header() {
	return (
		<>
			<HeaderSection>
				<HeaderContainer
					initial={{ opacity: 0 }}
					transition={{ duration: 1 }}
					animate={{ opacity: 1 }}
				>
					<HeaderTitle>Thibaud Brault</HeaderTitle>
					<HeaderSubtitle>Développeur front-end nantais</HeaderSubtitle>
				</HeaderContainer>
			</HeaderSection>
			<LinksSection
				initial={{ opacity: 0 }}
				transition={{ duration: 2 }}
				animate={{ opacity: 1 }}
			>
				<Link to='/pokeref'>PokéRef</Link>
				<Link>Portfolio</Link>
			</LinksSection>
		</>
	);
}

export default Header;

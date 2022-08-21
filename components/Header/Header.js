import React from 'react';
import Link from 'next/link';

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
					<HeaderSubtitle>Développeur front-end</HeaderSubtitle>
				</HeaderContainer>
			</HeaderSection>
			<LinksSection
				initial={{ opacity: 0 }}
				transition={{ duration: 2 }}
				animate={{ opacity: 1 }}
			>
				<Link passHref href={'/pokeref'}>
					<a>
						PokéRef
					</a>	
				</Link>
				<Link href={'/'}>Portfolio</Link>
			</LinksSection>
		</>
	);
}

export default Header;

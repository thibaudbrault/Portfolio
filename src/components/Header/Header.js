import React from 'react';
import {
	HeaderContainer,
	HeaderSection,
	HeaderSubtitle,
	HeaderTitle,
} from './Styled.Header';

function Header() {
	return (
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
	);
}

export default Header;

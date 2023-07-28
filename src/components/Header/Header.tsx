import React from 'react';
import {
	HeaderContainer,
	HeaderSection,
	HeaderSocials,
	HeaderSubtitle,
	HeaderTitle,
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
					<HeaderSocials>
						<a
							href='https://www.linkedin.com/in/thibaud-brault/'
							target='_blank'
							rel='noreferrer'
						>
							Github
						</a>
						<a
							href='https://github.com/thibaudbrault'
							target='_blank'
							rel='noreferrer'
						>
							Linkedin
						</a>
						<a
							href='/assets/Thibaud Brault - Développeur front - CV.pdf'
							download
						>
							CV
						</a>
					</HeaderSocials>
				</HeaderContainer>
			</HeaderSection>
		</>
	);
}

export default Header;

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../components/BaseStyles/GlobalStyles';
import { lightTheme, darkTheme } from '../components/BaseStyles/Themes';

import Frame from '../components/Frame/Frame';
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';

export const SiteMain = styled.main`
	height: 100vh;
	overflow: hidden;
	background: ${({ theme }) => theme.main};
	color: ${({ theme }) => theme.secondary};
	font-family: 'Karla', sans-serif;
	transition: 0.3s ease-in-out;
`;

export const ProjectMain = styled(SiteMain)`
	height: auto;
	overflow: auto;
`

function Layout({ children }) {
	const [theme, setTheme] = useState('dark');

	const setMode = (mode) => {
		window.localStorage.setItem('theme', mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		theme === 'dark' ? setMode('light') : setMode('dark');
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		localTheme && setTheme(localTheme);
	}, []);

	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<meta
					name='description'
					content="Salut ! Moi c'est Thibaud, développeur front-end nantais"
				/>

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap'
					rel='stylesheet'
				/>

				<title>Thibaud Brault | Développeur front-end</title>
			</Helmet>
			<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
				<GlobalStyles />
				<SiteMain>
					<Navbar themeToggler={themeToggler} theme={theme}/>
					<Header />
					<Projects themeToggler={themeToggler} theme={theme} />
					<Socials />
					<Footer />
					<Frame />
				</SiteMain>
			</ThemeProvider>
		</>
	);
}

export default Layout;

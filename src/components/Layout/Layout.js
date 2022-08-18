import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../BaseStyles/GlobalStyles';
import { lightTheme, darkTheme } from '../BaseStyles/Themes';

import Navbar from '../Navbar/Navbar';
import Frame from '../Frame/Frame';

const Main = styled.main`
	background: ${({ theme }) => theme.main};
	color: ${({ theme }) => theme.secondary};
	font-family: 'Karla', sans-serif;
	transition: 0.3s ease-in-out;
`;

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
				<link 
					href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;700&display=swap" 
					rel="stylesheet" 
				/>

				<title>Thibaud Brault | Développeur front-end</title>
			</Helmet>
			<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
				<GlobalStyles />
                    <Main>
                        <Navbar themeToggler={themeToggler} theme={theme}/>
                        {children}
                        <Frame />
                    </Main>
			</ThemeProvider>
		</>
	);
}

export default Layout;

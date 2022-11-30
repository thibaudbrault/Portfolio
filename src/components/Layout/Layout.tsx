import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../BaseStyles/GlobalStyles';
import { lightTheme, darkTheme } from '../BaseStyles/Themes';

import Frame from '../Frame/Frame';
import Topbar from '../Topbar/Topbar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Image from 'next/future/image';

export const Main = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.main};
	color: ${({ theme }) => theme.secondary};
	font-family: 'Karla', sans-serif;
	transition: 0.3s ease-in-out;
`;

export const MainProject = styled.main`
	position: relative;
	width: 90%;
	min-height: 90vh;
	margin: 0 auto;
`;

const NinjaImg = styled.div`
	position: absolute;
	bottom: 40%;
	left: 20%;
	width: 4rem;
	height: 4rem;
`;

const BottomImg = styled.div`
	position: absolute;
	bottom: 1rem;
	right: 3rem;
	width: 3rem;
	height: 3rem;
`;

function Layout({ children }) {
	const [theme, setTheme] = useState<string>('dark');

	const setMode = (mode: string) => {
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
			<Head>
				<title>Thibaud Brault | Développeur front-end</title>
			</Head>
			<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
				<GlobalStyles />
				<Main>
					<Topbar themeToggler={themeToggler} theme={theme} />
					{children}
					<Navbar />
					<Footer />
					<NinjaImg>
						<Image src="/assets/running-ninja.svg" fill alt="" />
					</NinjaImg>
					<BottomImg>
						<Image src="/assets/raise-skeleton.svg" fill alt="" />
					</BottomImg>
					<Frame />
				</Main>
			</ThemeProvider>
		</>
	);
}

export default Layout;

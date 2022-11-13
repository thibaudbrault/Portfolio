import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';

export const MainPage = styled.main`
	height: 90vh;
	overflow: hidden;
`;

export const MainProject = styled.main`
	position: relative;
	width: 90%;
	min-height: 90vh;
	margin: 0 auto;
`;

function IndexPage() {
	return (
		<Layout>
			<MainPage>
				<Header />
				<Socials />
				<Footer />
			</MainPage>
		</Layout>
	);
}

export default IndexPage;

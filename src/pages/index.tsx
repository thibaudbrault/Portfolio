import React from 'react';

import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Stack from '../components/Stack/Stack';
import About from '../components/About/About';

function IndexPage() {
	return (
		<Layout>
			<main>
				<Header />
				<About />
				<Projects />
				<Stack />
			</main>
		</Layout>
	);
}

export default IndexPage;

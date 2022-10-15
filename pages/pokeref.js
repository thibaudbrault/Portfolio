import React from 'react';
import { MainProject } from '.';
import Layout from '../components/Layout/Layout';
import PokerefProject from '../components/Projects/Pokeref/PokerefProject';

function pokeref() {
	return (
		<Layout>
			<MainProject>
				<PokerefProject />
			</MainProject>
		</Layout>
	);
}

export default pokeref;

import React from 'react';
import { MainProject } from '.';
import Layout from '../components/Layout/Layout';
import PokerefProject from '../components/Projects/Pokeref/PokerefProject';

function Pokeref() {
	return (
		<Layout>
			<MainProject>
				<PokerefProject />
			</MainProject>
		</Layout>
	);
}

export default Pokeref;

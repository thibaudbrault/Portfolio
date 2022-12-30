import Link from 'next/link';
import React from 'react';
import {
	ProjectsLinks,
	ProjectsSection,
	ProjectsContainer,
	ProjectsGrid,
} from './Styled.Projects';

import FaGithubAlt from '@meronex/icons/fa/FaGithubAlt';
import FaEye from '@meronex/icons/fa/FaEye';
import FaPlus from '@meronex/icons/fa/FaPlus';

function Projects() {
	return (
		<ProjectsSection id='projects'>
			<h2>Projets</h2>
			<ProjectsGrid>
				<ProjectsContainer>
					<h3>Pokéref</h3>
					<p>La meilleure encyclopédie Pokémon</p>
					<ul>
						<li>Next JS</li>
						<li>Styled-Components</li>
						<li>Typescript</li>
					</ul>
					<ProjectsLinks>
						<a href='https://github.com/thibaudbrault/PokeRef'>
							<FaGithubAlt />
						</a>
						<a href='https://pokeref.app/'>
							<FaEye />
						</a>
						<Link href='/pokeref' passHref>
							<a>
								<FaPlus />
							</a>
						</Link>
					</ProjectsLinks>
				</ProjectsContainer>
				<ProjectsContainer>
					<h3>Wild Movies</h3>
					<p>Le meilleur moteur de recherche de films ou séries</p>
					<ul>
						<li>Vite</li>
						<li>Sass</li>
					</ul>
					<ProjectsLinks>
						<a href='https://github.com/thibaudbrault/WildMovies'>
							<FaGithubAlt />
						</a>
						<a href='https://wild-movies.netlify.app/'>
							<FaEye />
						</a>
						<Link href='/wildmovies' passHref>
							<a>
								<FaPlus />
							</a>
						</Link>
					</ProjectsLinks>
				</ProjectsContainer>
				<ProjectsContainer>
					<h3>PRBN</h3>
					<p>Pokémon Radio Broadcasting Network</p>
					<ul>
						<li>Next JS</li>
						<li>Styled-Components</li>
					</ul>
					<ProjectsLinks>
						<a href='https://github.com/thibaudbrault/PRBN'>
							<FaGithubAlt />
						</a>
						<a href='https://prbn.netlify.app/'>
							<FaEye />
						</a>
						<Link href='/prbn' passHref>
							<a>
								<FaPlus />
							</a>
						</Link>
					</ProjectsLinks>
				</ProjectsContainer>
			</ProjectsGrid>
		</ProjectsSection>
	);
}

export default Projects;

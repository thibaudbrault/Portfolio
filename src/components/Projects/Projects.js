import React from 'react';
import { ProjectsSection } from './Styled.Projects';

function Projects() {
	return (
		<ProjectsSection
			initial={{ opacity: 0 }}
			transition={{ duration: 2 }}
			animate={{ opacity: 1 }}
		>
			<a href='#pokeref'>PokéRef</a>
			<a href='#portfolio'>Portfolio</a>
		</ProjectsSection>
	);
}

export default Projects;

import React from 'react';
import { ProjectsSection } from './Styled.Projects';

function Projects() {
	return (
		<ProjectsSection
			initial={{ opacity: 0 }}
			transition={{ duration: 2 }}
			animate={{ opacity: 1 }}
		>
			<a href='#pokeinfo'>PokéInfo</a>
			<a href='#portfolio'>Portfolio</a>
			<a href='#'>🔜 Bientôt 🔜</a>
		</ProjectsSection>
	);
}

export default Projects;

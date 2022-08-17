import React from 'react';
import { Link } from 'gatsby';
import { ProjectsSection } from './Styled.Projects';

function Projects({ themeToggler, theme }) {
	return (
		<ProjectsSection
			initial={{ opacity: 0 }}
			transition={{ duration: 2 }}
			animate={{ opacity: 1 }}
		>
			<Link to='/pokeref'>PokéRef</Link>
			<Link>Portfolio</Link>
		</ProjectsSection>
	);
}

export default Projects;

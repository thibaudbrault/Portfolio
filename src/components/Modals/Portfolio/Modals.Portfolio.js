import React from 'react';
import {
	ModalsSection,
	ModalsClose,
	ModalsLink,
	ModifiedModalsTech,
} from '../Styled.Modals';

function Portfolio() {
	return (
		<ModalsSection id='portfolio'>
			<h2>Portfolio</h2>
			<h3>Présentation de mes projets</h3>
			<p>Troisième version de mon protfolio, mon but, durant la création de ce site, a été de réduire le temps de chargement et de le rendre facilement navigable en réduisant les informations présentées et en mettant en avant mes projets. <br /> Le choix des couleurs et des polices avait pour but de donner une sobriété et un style plus 'luxueux' et plus sérieux à mon portfolio tout en ajoutant la possibilité de créer dexu thèmes différents. <br /> J'ai choisi d'utiliser Gatsby afin de profiter de l'occasion de ce redesign pour apprendre à utiliser un nouveau framework et afin d'améliorer encore plus les performances. </p>
			<ModifiedModalsTech>
				<li>React JS</li>
				<li>Gatsby</li>
				<li>Styled-Components</li>
			</ModifiedModalsTech>
			<ModalsLink>
				<a href='https://github.com/thibaudbrault/Portfolio'>Github</a>
			</ModalsLink>
			<ModalsClose href='#'>&times;</ModalsClose>
		</ModalsSection>
	);
}

export default Portfolio;

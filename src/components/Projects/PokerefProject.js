import { Link } from 'gatsby';
import React from 'react';

import { SiReact, SiStyledcomponents, SiGithub } from 'react-icons/si';
import {
	TbApi,
	TbExternalLink,
	TbHome,
	TbColorPicker,
	TbList,
	TbRocket,
	TbArrowBigUpLine,
	TbLogin,
} from 'react-icons/tb';

import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectList,
	ProjectSection,
	ProjectFooter,
} from './StyledProjects';

function PokerefProject() {
	return (
		<>
			<ProjectTitle>PokéRef</ProjectTitle>
			<ProjectSubtitle>
				La meilleure encyclopédie Pokémon{' '}
				<span role='img' aria-label='pile de livres'>
					📚
				</span>
			</ProjectSubtitle>
			<ProjectList>
				<li>
					<span>
						<SiReact />
					</span>{' '}
					React JS
				</li>
				<li>
					<span>
						<SiStyledcomponents />
					</span>{' '}
					Styled-Components
				</li>
				<li>
					<span>
						<TbApi />
					</span>{' '}
					PokéAPI
				</li>
			</ProjectList>
			<ProjectSection>
				<h2>Description</h2>
			</ProjectSection>
			<ProjectSection>
				<h2>Design</h2>
				<div>
					<span>
						<TbColorPicker />
					</span>
					<p></p>
				</div>
				<div>
					<span>
						<TbList />
					</span>
					<p>
						J'ai choisi de limiter le nombre de pokémon à 4 par lignes afin de
						ne pas saturer l'utilisateur avec les information disponibles et de
						laisser le site 'respirer'.
						<br />
						Pour les autres pages, j'ai choisi de faire des listes afin de
						donner les informations principales directement sans avoir à ouvrir
						aller sur la page.
						<br />
						Enfin chaque page de details contient des informations classées des
						plus importantes aux moins importantes (avec quelques exceptions).
					</p>
				</div>
				<div>
					<span></span>
					<p></p>
				</div>
			</ProjectSection>
			<ProjectSection>
				<h2>Améliorations futures</h2>
				<div>
					<span>
						<TbRocket />
					</span>
					<p>
						Améliorer les performances et en particulier le temps de chargement
						des pages qui contiennent beucoup d'informations et qui sont donc
						longues à charger.
						<br />
						Eventuelles pistes : virtualiser les pages de listes
					</p>
				</div>
				<div>
					<span>
						<TbArrowBigUpLine />
					</span>
					<p>
						Une amélioration du design via l'ajout d'animations afin de rendre
						le site plus vivant et plus chaleureux.
						<br />
						Une amélioration du contenu par l'ajout d'une page dédiée à chaque
						endroit.
					</p>
				</div>
				<div>
					<span>
						<TbLogin />
					</span>
					<p>
						La possibilité de créer une équipe pokémon et de la sauvegarder avec
						une authentification Firebase
					</p>
				</div>
			</ProjectSection>
			<ProjectFooter>
				<a href='https://pokeref.app/' target='_blank' rel='noreferrer'>
					<span>
						<TbExternalLink />
					</span>
					Site
				</a>
				<Link to='/'>
					<span>
						<TbHome />
					</span>
				</Link>
				<a
					href='https://github.com/thibaudbrault/PokeRef'
					target='_blank'
					rel='noreferrer'
				>
					<span>
						<SiGithub />
					</span>
					Github
				</a>
			</ProjectFooter>
		</>
	);
}

export default PokerefProject;

import Link from 'next/link';
import React from 'react';

import { SiReact, SiStyledcomponents, SiGithub } from 'react-icons/si';
import {
	TbFilter,
	TbInfinity,
	TbDeviceMobile,
	TbColorPicker,
	TbList,
	TbMoon,
	TbRocket,
	TbArrowBigUpLine,
	TbLogin,
	TbApi,
	TbExternalLink,
	TbArrowBigLeftLine,
} from 'react-icons/tb';

import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectLinks,
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
			<ProjectLinks>
				<a href='https://pokeref.app/' target='_blank' rel='noreferrer'>
					<span>
						<TbExternalLink />
					</span>
					Site
				</a>
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
			</ProjectLinks>
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
				<div>
					<span>
						<TbFilter />
					</span>
					<p>
						Utilisation de plusieurs filtres et de barres de recherche afin ne
						montrer que les informations pertinentes à l'utilisateur et de
						réduire le temps passé à rechercher une information précise.
						<br />
						Utilisation, sur la page principale, d'une barre de recherche avec
						un autocomplete afin de
					</p>
				</div>
				<div>
					<span>
						<TbInfinity />
					</span>
					<p>
						Infinite scrolling pour afficher la liste de pokémon afin de réduire
						le temps de chargement et d'éviter à l'utilisateur d'avoir à cliquer
						pour changer de page.
					</p>
				</div>
				<div>
					<span>
						<TbDeviceMobile />
					</span>
					<p>
						Site entiérement responsive afin de pouvoir l'utiliser sur n'importe
						quel appareil.
					</p>
				</div>
			</ProjectSection>
			<ProjectSection>
				<h2>Design</h2>
				<div>
					<span>
						<TbColorPicker />
					</span>
					<p>
						J'ai choisi une palette de couleurs classique (noir clair / blanc
						gris / rouge) puisque le site sert d'encyclopédie et l'attention de
						l'utilisateur ne doit donc pas être retenue par le design du site
						mais par les informations qu'il délivre.
						<br />
						De plus, je voulais que le site ait un design minimaliste malgré le
						nombre d'informations délivrées ce qui fait que je devais donc
						limiter le nombre de coleurs utilisées.
					</p>
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
					<span>
						<TbMoon />
					</span>
					<p>
						Mode nuit par défaut mais possiblité de passer au mode jour.
						<br />
						J'ai choisi de mettre le mode nuit par défaut afin de rendre le site
						plus agréable pour les yeux et de faire ressortir certaines
						informations avec la couleur or utilisée seulement en mode nuit.
					</p>
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
				<Link passHref href={'/'}>
					<a>
						<span>
							<TbArrowBigLeftLine />
						</span>
						Retour au portfolio
					</a>
				</Link>
			</ProjectFooter>
		</>
	);
}

export default PokerefProject;

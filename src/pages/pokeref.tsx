import React from 'react';
import Link from 'next/link';

import SiGithub from '@meronex/icons/si/SiGithub';
import SiNextDotJs from '@meronex/icons/si/SiNextDotJs';
import SiStyledComponents from '@meronex/icons/si/SiStyledComponents';
import SiTypescript from '@meronex/icons/si/SiTypescript';

import CgColorPicker from '@meronex/icons/cg/CgColorPicker';
import CgPerformance from '@meronex/icons/cg/CgPerformance';
import CgMoon from '@meronex/icons/cg/CgMoon';

import MdcLinkVariant from '@meronex/icons/mdc/MdcLinkVariant';
import MdcFilterOutline from '@meronex/icons/mdc/MdcFilterOutline';
import MdcFormatListBulleted from '@meronex/icons/mdc/MdcFormatListBulleted';
import MdcRocketLaunchOutline from '@meronex/icons/mdc/MdcRocketLaunchOutline';
import MdcAnimationPlayOutline from '@meronex/icons/mdc/MdcAnimationPlayOutline';
import MdcArrowLeftThick from '@meronex/icons/mdc/MdcArrowLeftThick';

import MdLogIn from '@meronex/icons/ios/MdLogIn';

import VscDeviceMobile from '@meronex/icons/vsc/VscDeviceMobile';

import {
	ProjectTitle,
	ProjectSubtitle,
	ProjectLinks,
	ProjectList,
	ProjectSection,
	ProjectFooter,
} from '../components/Projects/Styled.Project';
import Layout, { MainProject } from '../components/Layout/Layout';

function PokerefProject() {
	return (
		<Layout>
			<MainProject>
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
							<MdcLinkVariant />
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
							<SiNextDotJs />
						</span>{' '}
						Next JS
					</li>
					<li>
						<span>
							<SiStyledComponents />
						</span>{' '}
						Styled-Components
					</li>
					<li>
						<span>
							<SiTypescript />
						</span>{' '}
						Typescript
					</li>
				</ProjectList>
				<ProjectSection>
					<h2>Description</h2>
					<div>
						<span>
							<MdcFilterOutline />
						</span>
						<p>
							Utilisation de plusieurs filtres et de barres de recherche afin de
							ne montrer que les informations pertinentes à l'utilisateur et de
							réduire le temps passé à rechercher une information précise.
							<br />
							Utilisation, sur la page principale, d'une barre de recherche avec
							un auto-complete afin de trouver plus rapidement l'information
							recherchée par l'utilisateur.
						</p>
					</div>
					<div>
						<span>
							<CgPerformance />
						</span>
						<p>
							Utilisation de React-Query pour gérer facilement l'état des
							données en les cachant et en empêchant une nouvelle récupération
							de celle-ci puisqu'elles ne sont pas amenées à changer souvent.
							<br />
							Utilisation de plusieurs fonctionnalitées de Next JS tel que
							l'optimisation des images avec le composant Image et l'import
							dynamique des composants.
						</p>
					</div>
					<div>
						<span>
							<VscDeviceMobile />
						</span>
						<p>
							Site entièrement responsive afin de pouvoir l'utiliser sur
							n'importe quel appareil.
						</p>
					</div>
				</ProjectSection>
				<ProjectSection>
					<h2>Design</h2>
					<div>
						<span>
							<CgColorPicker />
						</span>
						<p>
							J'ai choisi une palette de couleurs classique (noir clair / blanc
							gris / rouge) puisque le site sert d'encyclopédie et l'attention
							de l'utilisateur ne doit donc pas être retenue par le design du
							site mais par les informations qu'il délivre.
							<br />
							De plus, je voulais que le site ait un design minimaliste malgré
							le nombre d'informations délivrées ce qui fait que je devais donc
							limiter le nombre de couleurs utilisées.
						</p>
					</div>
					<div>
						<span>
							<MdcFormatListBulleted />
						</span>
						<p>
							J'ai choisi de limiter le nombre de pokémon à 4 par lignes afin de
							ne pas saturer l'utilisateur avec les informations disponibles et
							de laisser le site "respirer".
							<br />
							Pour les autres pages, j'ai choisi de faire des listes afin de
							donner les informations principales directement sans avoir à
							ouvrir aller sur la page.
							<br />
							Enfin chaque page de détails contient des informations classées
							des plus importantes aux moins importantes (avec quelques
							exceptions).
						</p>
					</div>
					<div>
						<span>
							<CgMoon />
						</span>
						<p>
							Mode nuit par défaut mais possibilité de passer au mode jour.
							<br />
							J'ai choisi de mettre le mode nuit par défaut afin de rendre le
							site plus agréable pour les yeux et de faire ressortir certaines
							informations avec la couleur or utilisée seulement en mode nuit.
						</p>
					</div>
				</ProjectSection>
				<ProjectSection>
					<h2>Améliorations futures</h2>
					<div>
						<span>
							<MdcRocketLaunchOutline />
						</span>
						<p>
							Améliorer les performances et en particulier le temps de
							chargement des pages qui contiennent beaucoup d'informations et
							qui sont donc longues à charger.
							<br />
							Eventuelles pistes : virtualiser les pages de listes / implémenter
							SSG de Next JS / transformer le site en PWA et ajouter un service
							worker
						</p>
					</div>
					<div>
						<span>
							<MdLogIn />
						</span>
						<p>
							Ajout d'une possibilité de créer un compte / se connecter afin de
							pouvoir sauvegarder ses pokémon favoris.
							<br />
							Connexion à une base de données afin de pouvoir sauvegarder les
							utilisateurs et leurs favoris.
						</p>
					</div>
					<div>
						<span>
							<MdcAnimationPlayOutline />
						</span>
						<p>Ajout d'animations afin de rendre le site plus "vivant".</p>
					</div>
				</ProjectSection>
				<ProjectFooter>
					<Link passHref href={'/'}>
						<a>
							<span>
								<MdcArrowLeftThick />
							</span>
							Retour au portfolio
						</a>
					</Link>
				</ProjectFooter>
			</MainProject>
		</Layout>
	);
}

export default PokerefProject;

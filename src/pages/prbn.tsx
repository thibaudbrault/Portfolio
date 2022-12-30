import React from 'react';
import Link from 'next/link';

import SiGithub from '@meronex/icons/si/SiGithub';
import SiNextDotJs from '@meronex/icons/si/SiNextDotJs';
import SiStyledComponents from '@meronex/icons/si/SiStyledComponents';

import BsMusicPlayerFill from '@meronex/icons/bs/BsMusicPlayerFill';

import FaBug from '@meronex/icons/fa/FaBug';

import MdcLinkVariant from '@meronex/icons/mdc/MdcLinkVariant';
import MdcFilterOutline from '@meronex/icons/mdc/MdcFilterOutline';
import MdcAnimationPlayOutline from '@meronex/icons/mdc/MdcAnimationPlayOutline';
import MdcMusicNotePlus from '@meronex/icons/mdc/MdcMusicNotePlus';
import MdcArrowLeftThick from '@meronex/icons/mdc/MdcArrowLeftThick';

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
				<ProjectTitle>PRBN</ProjectTitle>
				<ProjectSubtitle>
					Ecoutez toutes les musiques Pokémon avec ce lecteur de musique
					minimaliste{' '}
					<span role='img' aria-label='pile de livres'>
						🎧
					</span>
				</ProjectSubtitle>
				<ProjectLinks>
					<a href='https://prbn.netlify.app/' target='_blank' rel='noreferrer'>
						<span>
							<MdcLinkVariant />
						</span>
						Site
					</a>
					<a
						href='https://github.com/thibaudbrault/PRBN'
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
				</ProjectList>
				<ProjectSection>
					<h2>Description</h2>
					<div>
						<span>
							<BsMusicPlayerFill />
						</span>
						<p>
							Plusieurs fonctions d'un lecteur de musique disponibles : lecture
							/ pause, suivant / précédent, avancer / reculer de 10 secondes,
							musique au hasard et musique en boucle.
							<br />
							Affichage de la durée totale de la musique et de la progression avec un timer et une barre de progression.
							<br />
							Possibilité d'avancer ou de reculer dans la musique avec la barre
							de progression.
						</p>
					</div>
					<div>
						<span>
							<MdcFilterOutline />
						</span>
						<p>
							Possibilité de filtrer par jeux ou de tous les écouter.
							<br />
							Possibilité de sélectionner une musique ou d'en jouer au hasard.
						</p>
					</div>
					<div>
						<span>
							<MdcAnimationPlayOutline />
						</span>
						<p>
							Animation de l'image du jeu qui tourne pour imiter un disque en
							marche.
						</p>
					</div>
				</ProjectSection>
				<ProjectSection>
					<h2>Améliorations futures</h2>
					<div>
						<span>
							<FaBug />
						</span>
						<p>
							La durée totale de la première musique affiche 0 lors du
							chargement du site.
							<br />
							Fonction loop qui ne joue pas automatiquement la musique
							lorsqu'elle arrive à la fin.
						</p>
					</div>
					<div>
						<span>
							<MdcMusicNotePlus />
						</span>
						<p>Ajout de plus de générations.</p>
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

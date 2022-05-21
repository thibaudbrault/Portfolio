import React from 'react';
import {
	ModalsSection,
	ModalsClose,
	ModalsLink,
	ModalsTech,
	ModalsList,
} from '../Styled.Modals';

function PokéRef() {
	return (
		<ModalsSection id='pokeref'>
			<h2>PokéRef</h2>
			<h3>Encyclopédie Pokémon</h3>
			<ModalsList>
				<ul>
					<h4>Déjà fait</h4>
					<li>Page pour chaque pokémon, attaque, talent, objet, ...</li>
					<li>Plusieurs filtres et autocomplete</li>
					<li>Light / dark mode</li>
					<li>Infinite scrolling</li>
					<li>Responsive</li>
				</ul>
				<ul>
					<h4>A venir</h4>
					<li>Créer des animations avec Framer Motion</li>
					<li>Utiliser le Service Worker de PokéApi</li>
					<li>
						Page "Créer son équipe" avec possibilité de créer un compte pour
						sauvegarder son équipe
					</li>
				</ul>
			</ModalsList>
			<ModalsTech>
				<li>React JS</li>
				<li>Styled-Components</li>
				<li>PokéApi</li>
			</ModalsTech>
			<ModalsLink>
				<a href='https://pokeref.app/'>Live</a>
				<a href='https://github.com/thibaudbrault/PokeRef'>Github</a>
			</ModalsLink>
			<ModalsClose href='#'>&times;</ModalsClose>
		</ModalsSection>
	);
}

export default PokéRef;

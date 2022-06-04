import React from 'react';
import {
	ModalsSection,
	ModalsClose,
	ModalsLink,
	ModalsTech,
} from '../Styled.Modals';

function PokéRef() {
	return (
		<ModalsSection id='pokeref'>
			<h2>PokéRef</h2>
			<h3>Encyclopédie Pokémon</h3>
			<h4>Bien plus qu'un pokédex</h4>
			<p>Dans le but d'apprendre à utiliser des API, j'ai choisi d'utiliser pleinement PokéApi. <br /> Ce projet est passé par plusierus phases et m'a permis d'approfondir mes connaisances en React et d'apprendre à utiliser Styled-Components et Firebase. <br /> Parti avec la volonté d'utiliser toutes les informations disponibles avec l'Api, je me suis ajouté des objectifs au fur et à mesure de l'avancée de ce projet tel que l'implémentation de <span>filtres</span>, d'un <span>infinite scroll</span>, l'ajout d'un <span>mode nuit</span>, l'utilisation d'un <span>service worker</span> ou encore l'ajout de <span>l'authentification</span> avec Firebase. </p>
			<ModalsTech>
				<li>React JS</li>
				<li>Styled-Components</li>
				<li>PokéApi</li>
			</ModalsTech>
			<ModalsTech>
				<li>Netlfiy</li>
				<li>Cloudflare</li>
				<li>Firebase</li>
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

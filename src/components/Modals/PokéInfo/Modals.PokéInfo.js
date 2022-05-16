import React from 'react'
import { ModalsSection, ModalsClose, ModalsLink, ModalsTech, ModalsList } from '../Styled.Modals'

function PokéInfo() {
    return (
        <ModalsSection id='pokeinfo'>
            <h2>PokéInfo</h2>
            <h3>Encyclopédie Pokémon</h3>
            <ModalsList>
                <ul>
                    <h4>Déjà fait</h4>
                    <li>Page pour chaque pokémon, attaque, talent, objet, ...</li>
                    <li>Plusieurs filtres et autocomplete</li>
                    <li>Light / dark mode</li>
                    <li>Infinite scrolling</li>
                </ul>
                <ul>
                    <h4>A venir</h4>
                    <li>Créer des animations avec Framer Motion</li>
                    <li>Utiliser le Service Worker de PokéApi</li>
                    <li>Page "Créer son équipe" avec possibilité de créer un compte pour sauvegarder son équipe</li>
                </ul>
            </ModalsList>
            <ModalsTech>
                <li>React JS</li>
                <li>Styled-Components</li>
                <li>PokéApi</li>
            </ModalsTech>
            <ModalsLink>
                <a href="#pokeinfo">Live (bientôt)</a>
                <a href="https://github.com/thibaudbrault/PokeInfo">Github</a>
            </ModalsLink>
            <ModalsClose href="#">&times;</ModalsClose>
        </ModalsSection>
    )
}

export default PokéInfo
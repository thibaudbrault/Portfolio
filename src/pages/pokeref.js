import React from 'react'
import { ProjectMain } from '.'
import Navbar from '../components/Navbar/Navbar'

function pokeref({ themeToggler, theme }) {
  return (
    <ProjectMain>
        <Navbar themeToggler={themeToggler} theme={theme} />
        <h1>PokéRef</h1>
        <p>Encyclopédie pokémon contenant plein d'informations sur tous les pokémon, les attaques, les talents, les items et bien plus</p>
        <ul>
            <li>React JS</li>
            <li>Styled-Components</li>
            <li>PokéAPI</li>
        </ul>
        <section>
            <h2>Description</h2>
        </section>
        <section>
            <h2>Design</h2>
        </section>
        <section>
            <h2>Améliorations à venir</h2>
        </section>
    </ProjectMain>
  )
}

export default pokeref
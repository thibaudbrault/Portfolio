import React from 'react'
import { ProjectTitle, ProjectSubtitle, ProjectList } from './StyledProjects'

function PokerefProject() {
  return (
    <>
        <ProjectTitle>PokéRef</ProjectTitle>
        <ProjectSubtitle>La meilleure encyclopédie Pokémon</ProjectSubtitle>
        <ProjectList>
            <li>React JS</li>
            <li>Styled-Components</li>
            <li>PokéAPI</li>
        </ProjectList>
        <section>
            <h2>Description</h2>
        </section>
        <section>
            <h2>Design</h2>
        </section>
        <section>
            <h2>Améliorations à venir</h2>
        </section>
    </>
  )
}

export default PokerefProject
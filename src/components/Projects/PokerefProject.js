import { Link } from 'gatsby'
import React from 'react'

import { SiReact, SiStyledcomponents, SiGithub } from 'react-icons/si'
import { TbApi, TbExternalLink, TbHome, TbColorPicker } from 'react-icons/tb'

import { ProjectTitle, ProjectSubtitle, ProjectList, ProjectSection, ProjectFooter } from './StyledProjects'

function PokerefProject() {
  return (
    <>
        <ProjectTitle>PokéRef</ProjectTitle>
        <ProjectSubtitle>La meilleure encyclopédie Pokémon <span role='img' aria-label='pile de livres'>📚</span></ProjectSubtitle>
        <ProjectList>
            <li><span><SiReact /></span> React JS</li>
            <li><span><SiStyledcomponents /></span> Styled-Components</li>
            <li><span><TbApi /></span> PokéAPI</li>
        </ProjectList>
        <ProjectSection>
            <h2>Description</h2>
            <p></p>
            <p></p>
            <p></p>
        </ProjectSection>
        <ProjectSection>
            <h2>Design</h2>
            <p>
                <span><TbColorPicker /></span>
            </p>
            <p></p>
            <p></p>
        </ProjectSection>
        <ProjectSection>
            <h2>Améliorations futures</h2>
        </ProjectSection>
        <ProjectFooter>
            <a href="https://pokeref.app/" target='_blank' rel='noreferrer'>
                <span><TbExternalLink /></span>
                Site
            </a>
            <Link to='/'>
                <span><TbHome /></span>
            </Link>
            <a href="https://github.com/thibaudbrault/PokeRef" target='_blank' rel='noreferrer'>
                <span><SiGithub /></span>
                Github
            </a>
        </ProjectFooter>
    </>
  )
}

export default PokerefProject
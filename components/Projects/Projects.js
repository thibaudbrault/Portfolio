import Link from 'next/link'
import React from 'react'
import { ProjectsLinks, ProjectsSection, ProjectsContainer } from './Styled.Projects'

import FaGithubAlt from '@meronex/icons/fa/FaGithubAlt';
import FaEye from '@meronex/icons/fa/FaEye';
import FaPlus from '@meronex/icons/fa/FaPlus';

function Projects() {
    return (
        <ProjectsSection>
            <ProjectsContainer>
                <h3>Pokéref</h3>
                <p>La meilleure encyclopédie Pokémon</p>
                <ul>
                    <li>Next JS</li>
                    <li>Styled-Components</li>
                </ul>
                <ProjectsLinks>
                    <a href='https://github.com/thibaudbrault/PokeRef'>
                        <FaGithubAlt />
                    </a>
                    <a href='https://pokeref.app/'>
                        <FaEye />
                    </a>
                    <Link href='/pokeref' passHref>
                        <a>
                            <FaPlus />
                        </a>
                    </Link>
                </ProjectsLinks>
            </ProjectsContainer>
            <ProjectsContainer>
                <h3>Portfolio</h3>
                <p>Le site qui me sert à présenter mes projets</p>
                <ul>
                    <li>Next JS</li>
                    <li>Styled-Components</li>
                </ul>
                <ProjectsLinks>
                    <a href='https://github.com/thibaudbrault/Portfolio'>
                        <FaGithubAlt />
                    </a>
                    <Link href='/' passHref>
                        <a>
                            <FaPlus />
                        </a>
                    </Link>
                </ProjectsLinks>
            </ProjectsContainer>
        </ProjectsSection>
    )
}

export default Projects
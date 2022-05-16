import React from 'react'
import { ModalsSection, ModalsClose, ModalsLink, ModifiedModalsTech } from '../Styled.Modals'

function Portfolio() {
    return (
        <ModalsSection id='portfolio'>
            <h2>Portfolio</h2>
            <h3>Présentation de mes projets</h3>
            <ModifiedModalsTech>
                <li>React JS</li>
                <li>Gatsby</li>
                <li>Styled-Components</li>
            </ModifiedModalsTech>
            <ModalsLink>
                <a href="https://github.com/thibaudbrault/Portfolio">Github</a>
            </ModalsLink>
            <ModalsClose href="#">&times;</ModalsClose>
        </ModalsSection>
    )
}

export default Portfolio
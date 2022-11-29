import React from 'react';
import { AboutSection, AboutText, AboutTitle } from './Styled.About';

function About() {
    return (
        <AboutSection id='about'>
            <AboutTitle>
                <h2>Salut, je suis Thibaud <img src="/assets/severed-hand.svg" alt="" /></h2>
                <p>Développeur React JS junior</p>
            </AboutTitle>
            <AboutText>
                Actuellement étudiant à la Wild Code School de Nantes afin de devenir développeur front React JS.<br />
                Passionné par le développement web depuis maintenant 1 an, je m'améliore chaque jour grâce à ma formation et à mon travail sur des projets personnels et aimerait en faire mon futur métier.<br />

            </AboutText>
        </AboutSection>
    )
}

export default About
import React from 'react';
import { AboutSection, AboutText, AboutTitle } from './Styled.About';
import GiSeveredHand from '@meronex/icons/gi/GiSeveredHand';

function About() {
    return (
        <AboutSection id='about'>
            <AboutTitle>
                <h2>Salut, je suis Thibaud <GiSeveredHand /></h2>
                <p>Développeur React JS junior</p>
            </AboutTitle>
            <AboutText>
                Actuellement étudiant à la Wild Code School de Nantes afin de devenir développeur front React JS.
                <br />
                Passionné par le développement web depuis maintenant 1 an, je m'améliore chaque jour grâce à ma formation et à mon travail sur des projets personnels et aimerait en faire mon futur métier.
                <br />
                Curieux, autonome et patient j'aime créer des sites beaux, fonctionnels et responsive.
            </AboutText>
        </AboutSection>
    )
}

export default About
import React from 'react'
import Layout from '../components/Layout/Layout'
import { CenteredPage, TitleContainer } from '../components/Pages/Styled.Pages'

function About() {
    return (
        <Layout>
            <CenteredPage>
                <TitleContainer>
                    <h1>Salut, je suis Thibaud 👋</h1>
                    <p>Développeur React JS junior</p>
                </TitleContainer>
                <p>
                    Actuellement étudiant à la Wild Code School de Nantes afin de devenir développeur front React JS.<br />
                    Passionné par le développement web depuis maintenant 1 an, je m'améliore chaque jour grâce à ma formation et à mon travail sur des projets personnels et aimerait en faire mon futur métier.<br />

                </p>
            </CenteredPage>
        </Layout>
    )
}

export default About
import React from 'react'
import { MainPage } from '.'
import Layout from '../components/Layout/Layout'

function pokeref() {
    return (
        <Layout>
            <MainPage>
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
            </MainPage>
        </Layout>
    )
}

export default pokeref
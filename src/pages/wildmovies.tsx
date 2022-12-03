import React from 'react';
import Link from 'next/link';

import SiGithub from '@meronex/icons/si/SiGithub';
import SiReact from '@meronex/icons/si/SiReact';
import SiFigma from '@meronex/icons/si/SiFigma';
import SiJirasoftware from '@meronex/icons/si/SiJirasoftware';

import LogoSass from '@meronex/icons/ios/LogoSass';

import FaSearch from '@meronex/icons/fa/FaSearch';

import MdcLinkVariant from '@meronex/icons/mdc/MdcLinkVariant';
import MdcFilterOutline from '@meronex/icons/mdc/MdcFilterOutline';
import MdcRocketLaunchOutline from '@meronex/icons/mdc/MdcRocketLaunchOutline';
import MdcAnimationPlayOutline from '@meronex/icons/mdc/MdcAnimationPlayOutline';
import MdcArrowLeftThick from '@meronex/icons/mdc/MdcArrowLeftThick';


import VscDeviceMobile from '@meronex/icons/vsc/VscDeviceMobile';

import {
    ProjectTitle,
    ProjectSubtitle,
    ProjectLinks,
    ProjectList,
    ProjectSection,
    ProjectFooter,
} from '../components/Projects/Styled.Project';
import Layout, { MainProject } from '../components/Layout/Layout';

function PokerefProject() {
    return (
        <Layout>
            <MainProject>
                <ProjectTitle>WildMovies</ProjectTitle>
                <ProjectSubtitle>
                    Le meilleur moteur de recherche de films et de séries
                    <br />
                    <small>Projet 2 de la Wild Code School</small>
                </ProjectSubtitle>
                <ProjectLinks>
                    <a href='https://wild-movies.netlify.app/' target='_blank' rel='noreferrer'>
                        <span>
                            <MdcLinkVariant />
                        </span>
                        Site
                    </a>
                    <a
                        href='https://github.com/thibaudbrault/WildMovies'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <span>
                            <SiGithub />
                        </span>
                        Github
                    </a>
                </ProjectLinks>
                <ProjectList>
                    <li>
                        <span>
                            <SiReact />
                        </span>{' '}
                        Vite JS
                    </li>
                    <li>
                        <span>
                            <LogoSass />
                        </span>{' '}
                        Sass
                    </li>
                </ProjectList>
                <ProjectSection>
                    <h2>Description</h2>
                    <div>
                        <span>
                            <FaSearch />
                        </span>
                        <p>
                            Possibilité d'effectuer des recherches par films, séries, personnalités ou les trois à la fois.
                        </p>
                    </div>
                    <div>
                        <span>
                            <MdcFilterOutline />
                        </span>
                        <p>
                            Utilisation de plusieurs filtres cumulables pour les films et séries afin de pouvoir trouver précisement et rapidement l'information voulue.
                            <br />
                            Filtrer par : genre, plateforme de streaming, age, note, décennie (de 1900 à aujourd'hui) et durée.
                            <br />
                            Trier par : popularité, note ou date de sortie.
                        </p>
                    </div>
                    <div>
                        <span>
                            <VscDeviceMobile />
                        </span>
                        <p>
                            Listes scrollable de films et séries sur la page d'accueil.
                            <br />
                            Description détaillé des films et séries avec les genres, la durée, le synopsis, les acteurs, l'équipe technique, ...
                            <br />
                            Description détaillé des personnalités avec leur biographie, leur filmographie, ...
                        </p>
                    </div>
                </ProjectSection>
                <ProjectSection>
                    <h2>Travail d'équipe</h2>
                    <div>
                        <span>
                            <MdcRocketLaunchOutline />
                        </span>
                        <p>
                            Git workflow: utilisation de EsLint, Prettier et Husky afin d'avoir un code propre et sans erreur avant chaque commit.
                            <br />
                            Création de branches pour chaque features et création d'une branche "dev" qui a servi d'intermédiaire avant de merger sur la branche main afin d'avoir toujours une branche main fonctionnelle.
                        </p>
                    </div>
                    <div>
                        <span>
                            <SiFigma />
                        </span>
                        <p>
                            Création d'un wireframe et d'une maquette Figma.
                        </p>
                    </div>
                    <div>
                        <span>
                            <SiJirasoftware />
                        </span>
                        <p>
                            Utilisation de la méthode Agile avec Jira et la création d'un backlog avec plusieurs user stories.
                            <br />
                            Création de sprints hebdomadaire avec l'attribution, aux développeurs, de différents tickets à réaliser durant le sprint.
                        </p>
                    </div>
                </ProjectSection>
                <ProjectFooter>
                    <Link passHref href={'/'}>
                        <a>
                            <span>
                                <MdcArrowLeftThick />
                            </span>
                            Retour au portfolio
                        </a>
                    </Link>
                </ProjectFooter>
            </MainProject>
        </Layout>
    );
}

export default PokerefProject;
import React from 'react';
import { AboutList, AboutSection, AboutText, AboutTitle } from './Styled.About';
import GiSeveredHand from '@meronex/icons/gi/GiSeveredHand';
import GiOpenBook from '@meronex/icons/gi/GiOpenBook';
import GiWalk from '@meronex/icons/gi/GiWalk';
import GiDarkSquad from '@meronex/icons/gi/GiDarkSquad';
import GiMeditation from '@meronex/icons/gi/GiMeditation';

function About() {
	return (
		<AboutSection id='about'>
			<AboutTitle>
				<h2>
					Salut, je suis Thibaud <GiSeveredHand />
				</h2>
				<p>Développeur React JS junior</p>
			</AboutTitle>
			<AboutText>
				Passionné par l'informatique et le design, c'est tout naturellement que
				je me suis tourné vers la création de sites.
				<br />
				J'ai commencé à apprendre le développement web en autodidacte il y a 1
				an, puis j'ai suivi une formation à la Wild Code School afin d'apprendre
				de nouveaux langages et d'acquérir de nouvelles compétences.
				<br />
				Adepte du clean code, je suis vigilant à l'accessibilité, au responsive
				design, à l'amélioration des performances et au respect des bonnes
				pratiques SEO.
			</AboutText>
			<AboutList>
				<li>
					<GiOpenBook />
					<div>
						<h3>Curieux</h3>
						<p>
							J'aime découvrir de nouveaux languages, frameworks et librairies
							grâce à une veille technologique régulière qui me permet
							d'améliorer la qualité de mon travail.
						</p>
					</div>
				</li>
				<li>
					<GiWalk />
					<div>
						<h3>Autonome</h3>
						<p>
							Je possède un bon sens de l'organisation et je suis capable de
							prendre des décisions et d'avancer seul afin de mener à bien les
							missions confiées.
						</p>
					</div>
				</li>
				<li>
					<GiDarkSquad />
					<div>
						<h3>Esprit d'équipe</h3>
						<p>
							J'aime travailler en équipe car cela permet d'avoir des
							perspectives différentes sur les missions et d'être plus efficace
							dans la réalisation de celles-ci.
						</p>
					</div>
				</li>
				<li>
					<GiMeditation />
					<div>
						<h3>Rigoureux</h3>
						<p>
							J'ai le souci du détail et possède une bonne gestion du stress ce
							qui fait que je chercherais toujours à produire un travail de
							qualité.
						</p>
					</div>
				</li>
			</AboutList>
		</AboutSection>
	);
}

export default About;

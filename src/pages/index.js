import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';

export const MainPage = styled.div`
	height: 90vh;
	overflow: hidden;
`

function IndexPage() {
  return (
	<Layout>
		<MainPage>
			<Header />
			<Projects />
			<Socials />
			<Footer />
		</MainPage>
	</Layout>
  )
}

export default IndexPage
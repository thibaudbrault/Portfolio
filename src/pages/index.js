import React from 'react';

import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';
import Modals from '../components/Modals/Modals';

function IndexPage() {
  return (
    <Layout>
      <Header />
      <Projects />
      <Socials />
      <Footer />
      <Modals />
    </Layout>
  )
}

export default IndexPage
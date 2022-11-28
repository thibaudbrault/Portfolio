import React from 'react';
import Layout from '../components/Layout/Layout';
import { CenteredPage, TechList, TitleContainer } from '../components/Pages/Styled.Pages';
import MdcReact from '@meronex/icons/mdc/MdcReact';
import LogoSass from '@meronex/icons/ios/LogoSass';
import LgNextjs from '@meronex/icons/lg/LgNextjs';
import SiStyledComponents from '@meronex/icons/si/SiStyledComponents';
import LgExpress from '@meronex/icons/lg/LgExpress';

function Stack() {
    return (
        <Layout>
            <CenteredPage>
                <TitleContainer>
                    <h1>Tech stack</h1>
                    <p>Technologies que je peux utiliser</p>
                </TitleContainer>
                <TechList>
                    <li><MdcReact /></li>
                    <li><LogoSass /></li>
                    <li><LgNextjs /></li>
                    <li><SiStyledComponents /></li>
                    <li><LgExpress /></li>
                </TechList>
            </CenteredPage>
        </Layout>
    )
}

export default Stack
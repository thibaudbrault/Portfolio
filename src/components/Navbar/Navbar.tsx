import React from 'react';
import Link from 'next/link';

import { NavbarContainer } from './Styled.Navbar';

function Navbar() {
    return (
        <NavbarContainer>
            <Link href='/' passHref>
                <a>
                    <img src="/assets/saloon.svg" alt="" /><span>Accueil</span>
                </a>
            </Link>
            <Link href='/#projects' passHref>
                <a>
                    <img src="/assets/backpack.svg" alt="" /><span>Travail</span>
                </a>
            </Link>
        </NavbarContainer>
    )
}

export default Navbar
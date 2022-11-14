import React from 'react'
import Link from 'next/link'

import FaHome from '@meronex/icons/fa/FaHome';
import SiAboutDotMe from '@meronex/icons/si/SiAboutDotMe';
import FaTools from '@meronex/icons/fa/FaTools';
import { NavbarContainer } from './Styled.Navbar';

function Navbar() {
    return (
        <NavbarContainer>
            <Link href='/' passHref>
                <a>
                    <FaHome />
                </a>
            </Link>
            <Link href='/about' passHref>
                <a>
                    <SiAboutDotMe />
                </a>
            </Link>
            <Link href='/tools' passHref>
                <a>
                    <FaTools />
                </a>
            </Link>
        </NavbarContainer>
    )
}

export default Navbar
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export const HeaderSection = styled.section`
    width: 100%;   
    height: 55vh;
`;

export const HeaderContainer = styled(motion.div)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const HeaderTitle = styled.h1`
    font-family: 'Great Vibes', cursive;
    font-size: 8rem;
    text-align: center;
`;

export const HeaderSubtitle = styled.h2`
    margin-top: 1rem;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.gold};
`;
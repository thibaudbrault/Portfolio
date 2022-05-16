import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export const SocialsSection = styled.section`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
`;

export const SocialsAnchor = styled(motion.a)`
    font-size: 2rem;
    border-bottom: 1px solid transparent;
    transition: 0.3s ease-in-out;

    &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.secondary};
    }
`;

export const SocialsText = styled(motion.p)`
    font-size: 2.3rem;

    & span {
        font-weight: 700;
        color: ${({ theme }) => theme.gold};
    }
`;
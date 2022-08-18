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

export const LinksSection = styled(motion.section)`
	width: 75%;
	margin: 0 auto;
	display: flex;
	align-items: flex-start;
	justify-content: space-evenly;
	flex-wrap: wrap;

	& a {
		padding: 1rem 2rem;
		margin: 2rem;
		background: none;
		border: 1px solid ${({ theme }) => theme.secondary};
		color: ${({ theme }) => theme.secondary};
		font-size: 3rem;
		font-weight: 700;
		transition: 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.secondary};
			border: 1px solid ${({ theme }) => theme.main};
			color: ${({ theme }) => theme.main};
		}

		&:first-of-type {
			margin-left: 0;
		}

		&:last-of-type {
			margin-right: 0;
		}
	}
`;

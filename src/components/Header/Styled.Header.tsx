import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderSection = styled.header`
	width: 95%;
	height: 85vh;
	margin: 0 auto;
	max-width: 1500px;
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
	font-size: 3rem;
	color: ${({ theme }) => theme.gold};
`;

export const HeaderSocials = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3rem;
	margin-top: 5rem;

	& a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 0.7rem 1.5rem;
		font-size: 2.5rem;
		background-color: ${({ theme }) => theme.secondary};
		color: ${({ theme }) => theme.main};
		border: 1px solid transparent;
		border-radius: 25px;
		transition: 0.3s ease-in-out;

		&:hover {
			border: 1px solid ${({ theme }) => theme.secondary};
			color: ${({ theme }) => theme.secondary};
			background: transparent;
		}

		&:last-of-type {
			border: 1px solid ${({ theme }) => theme.secondary};
			color: ${({ theme }) => theme.secondary};
			background: transparent;
		}
	}
`;

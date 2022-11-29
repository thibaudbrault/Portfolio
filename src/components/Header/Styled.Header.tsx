import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderSection = styled.section`
	width: 95%;
	height: 90vh;
	margin: 0 auto;
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
	gap: 5rem;
	margin-top: 2rem;
	
	& a {
		font-size: 2.5rem;
		border-bottom: 1px solid transparent;
		transition: 0.3s ease-in-out;
	
		&:hover {
			border-bottom: 1px solid ${({ theme }) => theme.gold};
		}
	}
`;
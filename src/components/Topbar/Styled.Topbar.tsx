import styled from 'styled-components';

export const TopbarSection = styled.nav`
	width: 90%;
	height: 15vh;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const TopbarLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	font-size: 4rem;
	transition: 0.3s ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.gold};
	}
`;

export const TopbarImg = styled.div`
	position: relative;
	width: 4rem;
	height: 4rem;
	margin-left: 1rem;
`;

export const TopbarButton = styled.button`
	width: 6rem;
	height: 6rem;
	position: fixed;
	right: 2rem;
	background: none;
	border: none;
	color: ${({ theme }) => theme.gold};
	font-size: 2rem;
`;

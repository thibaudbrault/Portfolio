import styled from 'styled-components';

export const TopbarSection = styled.nav`
	width: 90%;
	height: 10vh;
	margin: 0 auto;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

export const TopbarLogo = styled.a`
	font-weight: 700;
	font-size: 4rem;
	transition: 0.3s ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.gold};
	}
`;

export const TopbarButton = styled.button`
	position: relative;
	background: none;
	border: none;
	color: ${({ theme }) => theme.gold};
	font-size: 3rem;
`;

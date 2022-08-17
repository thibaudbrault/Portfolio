import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavbarSection = styled.nav`
	width: 95%;
	height: 10vh;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NavbarLogo = styled(Link)`
	font-weight: 700;
	font-size: 3rem;
`;

export const NavbarButton = styled.button`
	position: relative;
	background: none;
	border: none;
	color: ${({ theme }) => theme.gold};
	font-size: 3rem;

	&::before {
		content: '${({ theme }) => theme.toggle}';
	}
`;

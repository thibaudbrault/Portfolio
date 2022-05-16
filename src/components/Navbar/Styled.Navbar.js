import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavbarSection = styled.nav`
	width: calc(100% - 6rem);
	position: absolute;
	top: 3rem;
	left: 6rem;
	margin-left: -3rem;
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

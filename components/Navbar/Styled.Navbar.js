import styled from 'styled-components';

export const NavbarSection = styled.nav`
	width: 90%;
	height: 10vh;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NavbarLogo = styled.a`
	font-weight: 700;
	font-size: 3rem;
	transition: 0.3s ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.gold};
	}
`;

export const NavbarLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4rem;
`;

export const NavbarDropdown = styled.div`
	position: relative;
	& button {
		width: 15rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.5rem 2rem;
		background: none;
		border: 1px solid ${({ theme }) => theme.secondary};
		border-radius: 4px;
		font-size: 1.7rem;
		color: ${({ theme }) => theme.secondary};

		& svg {
			font-size: 2.5rem;
		}

		&:focus {
			& svg {
				fill: ${({ theme }) => theme.gold};
			}
		}
	}

	& ul {
		width: 100%;
		position: absolute;
		bottom: -8rem;
		border: 1px solid ${({ theme }) => theme.secondary};
		border-radius: 4px;
		z-index: 100;

		& li {
			font-size: 1.7rem;
			padding: 1rem 1rem;
			transition: 0.3s ease-in-out;

			& a {
				display: block;
				width: 100%;
			}

			&:first-of-type {
				border-bottom: 1px solid ${({ theme }) => theme.secondary};
			}

			&:hover {
				background: ${({ theme }) => theme.secondary};
				color: ${({ theme }) => theme.main};
			}
		}
	}
`;

export const NavbarButton = styled.button`
	position: relative;
	background: none;
	border: none;
	color: ${({ theme }) => theme.gold};
	font-size: 3rem;
`;

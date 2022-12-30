import styled from 'styled-components';

export const NavbarContainer = styled.nav`
	position: fixed;
	bottom: 3rem;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3rem;
	padding: 1rem 2.5rem;
	background-color: #c4c4c4;
	border: 1px solid #161616;
	border-radius: 25px;
	z-index: 2;

	& a {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.7rem;
		color: #161616;

		& svg {
			font-size: 2.5rem;

			& path {
				fill: #161616;
			}
		}

		& span {
			margin-left: 0.5rem;
		}
	}
`;

import styled from 'styled-components';

export const AboutSection = styled.section`
	display: flex;
	flex-direction: column;
	width: 85%;
	margin: 0 auto;
	gap: 3rem;
	padding-bottom: 10rem;
	max-width: 1500px;
`;

export const AboutTitle = styled.div`
	text-align: center;

	& h2 {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 4rem;
		margin-bottom: 1rem;
		font-family: 'Merriweather';
		gap: 1rem;

		& svg {
			& path {
				fill: ${({ theme }) => theme.secondary};
			}

			@media screen and (max-width: 650px) {
				display: none;
			}
		}
	}

	& p {
		font-size: 2rem;
	}
`;

export const AboutText = styled.p`
	width: 80%;
	margin: 0 auto;
	font-size: 1.7rem;
	line-height: 1.5;
`;

export const AboutList = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 3rem;

	& li {
		display: grid;
		grid-template-columns: 1fr 3fr;
		align-items: center;
		gap: 3rem;
		padding: 2rem;
		background-color: #c4c4c4;
		color: #161616;
		border: 1px solid #161616;
		border-radius: 4px;

		& svg {
			display: grid;
			font-size: 8rem;
			justify-self: center;
		}

		& div {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			& h3 {
				font-size: 2.5rem;
				font-weight: 700;
			}

			& p {
				font-size: 1.7rem;
			}
		}
	}

	@media screen and (max-width: 650px) {
		display: flex;
		flex-direction: column;
	}
`;

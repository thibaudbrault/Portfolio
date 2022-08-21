import styled from 'styled-components';

export const ProjectTitle = styled.h1`
	text-align: center;
	font-size: 6rem;
	font-weight: 300;
	font-family: 'Merriweather', serif;
	text-transform: uppercase;
	letter-spacing: 0.5rem;
`;

export const ProjectSubtitle = styled.p`
	margin: 3rem 0 6rem;
	text-align: center;
	font-size: 2.5rem;
`;

export const ProjectList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-around;

	& li {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.5rem;
		text-transform: uppercase;
		color: ${({ theme }) => theme.gold};
		font-size: 2rem;
		font-weight: 700;

		&:nth-of-type(even) {
			color: ${({ theme }) => theme.secondary};
		}

		& span {
			margin-right: 0.5rem;
			font-size: 2.5rem;
		}
	}
`;

export const ProjectSection = styled.section`
	margin: 3rem 0;

	& h2 {
		display: inline;
		font-size: 3rem;
		font-family: 'Merriweather', serif;
		border-bottom: 1px solid ${({ theme }) => theme.secondary};
		transition: 0.3s ease-in-out;

		&:hover {
			border-bottom: 1px solid ${({ theme }) => theme.gold};
		}
	}

	& div {
		width: 50%;
		margin: 2rem 0 2rem 2rem;
		display: flex;

		& span {
			font-size: 2rem;
			margin-right: 1rem;
		}

		& p {
			font-size: 2rem;
			line-height: 2.5rem;
		}

		&:first-of-type {
			margin-top: 4rem;
		}
	}
`;

export const ProjectFooter = styled.section`
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 5rem;
	display: flex;
	align-items: center;
	justify-content: space-around;

	& a {
		display: flex;
		align-items: center;
		font-size: 2rem;
		transition: 0.3s ease-in-out;

		&:hover {
			color: ${({ theme }) => theme.gold};
		}

		& span {
			margin-right: 0.5rem;
			font-size: 2.5rem;
		}

		&:nth-of-type(even) {
			& span {
				margin-right: 0;
				font-size: 3rem;
			}
		}
	}
`;

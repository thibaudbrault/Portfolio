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
	margin: 3rem 0 4rem;
	text-align: center;
	font-size: 2.5rem;

	& small {
		font-size: 1.5rem;
	}
`;

export const ProjectLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-bottom: 4rem;

	& a {
		display: flex;
		align-items: center;
		padding: 1rem 2rem;
		font-size: 2rem;
		border: 1px solid ${({ theme }) => theme.secondary};
		border-radius: 4px;
		transition: 0.3s ease-in-out;

		&:hover {
			color: ${({ theme }) => theme.main};
			background: ${({ theme }) => theme.secondary};
		}

		& span {
			margin-right: 0.5rem;
			font-size: 2.5rem;
		}
	}
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
		width: 70%;
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

	@media (max-width: 890px) {
		div {
			width: 90%;
		}
	}
`;

export const ProjectFooter = styled.footer`
	padding: 2rem 0 5rem;

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
	}
`;

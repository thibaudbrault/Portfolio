import styled from 'styled-components';

export const ProjectsSection = styled.section`
	width: 85%;
	margin: 0 auto;
	max-width: 1500px;

	& h2 {
		margin-bottom: 3rem;
		text-align: center;
		font-size: 4rem;
		font-weight: 700;
		font-family: 'Merriweather';
	}
`;

export const ProjectsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: stretch;
	gap: 3rem;

	@media screen and (max-width: 650px) {
		display: flex;
		flex-direction: column;
	}
`;

export const ProjectsContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 2rem;
	border-radius: 4px;
	background: ${({ theme }) => theme.secondary};
	color: ${({ theme }) => theme.main};
	font-size: 1.7rem;
	gap: 2rem;
	color: #c4c4c4;

	&:nth-of-type(1) {
		background-color: #332fd0;
	}

	&:nth-of-type(2) {
		background-color: #557153;
	}

	&:nth-of-type(3) {
		background-color: #8d1a06;
	}

	& h3 {
		font-size: 3rem;
		font-weight: 700;
		font-family: 'Merriweather';
	}

	& ul {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 1rem;

		& li {
			padding: 0.5rem 1rem;
			background: ${({ theme }) => theme.main};
			color: ${({ theme }) => theme.gold};
			border-radius: 25px;
		}
	}
`;

export const ProjectsLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 2rem;

	& svg {
		font-size: 2.3rem;
		& path {
			fill: #c4c4c4;
		}
	}
`;

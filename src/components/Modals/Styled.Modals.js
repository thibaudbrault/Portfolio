import styled from 'styled-components';

export const ModalsSection = styled.section`
	visibility: hidden;
	opacity: 0;
	position: absolute;
	top: 1rem;
	right: 1rem;
	bottom: 1rem;
	left: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: ${({ theme }) => theme.main};

	&:target {
		visibility: visible;
		opacity: 1;
	}

	& h2 {
		font-size: 7rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	& h3 {
		font-size: 3rem;
		color: ${({ theme }) => theme.gold};
		margin-bottom: 5rem;
	}

	& h4 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	& p {
		width: 90%;
		max-width: 1000px;
		margin: 0 auto 5rem;
		font-size: 1.7rem;
		line-height: 1.4;
		text-align: center;

		& span {
			font-weight: 700;
			color: ${({ theme }) => theme.gold};
		}
	}
`;

export const ModalsClose = styled.a`
	position: absolute;
	right: 2.5rem;
	top: 3rem;
	font-size: 4rem;
`;

export const ModalsTech = styled.ul`
	width: 90%;
	max-width: 1300px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-around;

	& li {
		margin: 0 1rem;
		font-size: 2rem;
		font-weight: 700;
		color: ${({ theme }) => theme.gold};
		text-align: center;
	}

	&:first-of-type {
		margin-bottom: 3rem;
	}
`;

export const ModifiedModalsTech = styled(ModalsTech)`
	margin: 5rem 0;
`;

export const ModalsLink = styled.div`
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 5rem;
	display: flex;
	align-items: center;
	justify-content: space-around;

	& a {
		font-size: 2rem;
		border-bottom: 1px solid transparent;
		transition: 0.3s ease-in-out;

		&:hover {
			border-bottom: 1px solid ${({ theme }) => theme.secondary};
		}
	}
`;
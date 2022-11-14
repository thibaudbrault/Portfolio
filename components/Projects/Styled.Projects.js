import styled from "styled-components";

export const ProjectsSection = styled.section`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
    gap: 2rem;
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

    & h3 {
        font-size: 3rem;
        font-weight: 700;
    }

    & p {
        @media screen and (max-width: 650px) {
            display: none;
        }
    }

    & ul {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & li {
            padding: 0.5rem 1rem;
            background: ${({ theme }) => theme.main};
            color: ${({ theme }) => theme.gold};
            border-radius: 25px;
        }

        @media screen and (max-width: 650px) {
            display: none;
        }
    }
`;

export const ProjectsLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
`;
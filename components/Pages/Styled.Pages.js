import styled from "styled-components";

export const CenteredPage = styled.main`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const TitleContainer = styled.div`
    text-align: center;

    & h1 {
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.gold};
    }

    & p {
        font-size: 2rem;
    }
`;

export const TechList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    gap: 2rem;

    & li {
        width: 4rem;
        height: 4rem;
        padding: 1rem;
        font-size: 4rem;
        background-color: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.main};
        border-radius: 50%;
    }
`;
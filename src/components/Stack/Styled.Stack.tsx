import styled from 'styled-components';

export const StackSection = styled.section`
    width: 85%;
    margin: 0 auto;
    padding: 10rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;

    & h2 {
        text-align: center;
        font-size: 4rem;
        font-weight: 700;
        font-family: 'Merriweather';
    }
`;

export const StackContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.main};
    border-radius: 4px;

     & h3 {
        margin-bottom: 2rem;
        font-size: 2.5rem;
        font-weight: 700;
     }

     & ul {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4rem;

        & li {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 1.5rem;
            gap: 0.5rem;

            & svg {
                font-size: 3.5rem;
            }
        }
     }
`;
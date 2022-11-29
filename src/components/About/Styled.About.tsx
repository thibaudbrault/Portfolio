import styled from 'styled-components';

export const AboutSection = styled.section`
    width: 85%;
    margin: 0 auto;
    padding-bottom: 10rem;
`;

export const AboutTitle = styled.div`
    text-align: center;
    margin-bottom: 2rem;

    & h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        margin-bottom: 1rem;
        font-family: 'Merriweather';
        gap: 1rem;

        & img {
            width: 4rem;
            height: 4rem;

            
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
    font-size: 1.5rem;
    line-height: 1.5;
`;
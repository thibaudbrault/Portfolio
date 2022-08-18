import styled from 'styled-components'

export const ProjectTitle = styled.h1`
    text-align: center;
    font-size: 5rem;
    font-weight: 300;
    font-family: 'Merriweather', serif;
    text-transform: uppercase;
`

export const ProjectSubtitle = styled.p`
    margin: 3rem 0 6rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
`

export const ProjectList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;

    & li {
        padding: 1.5rem;
        text-transform: uppercase;
        background: transparent;
        color: ${({ theme }) => theme.gold};
        border: 1px solid ${({ theme }) => theme.secondary};
        border-radius: 30px;
        font-size: 1.7rem;
        font-weight: 700;
        transition: 0.3s ease-in-out;

        &:hover {
            color: ${({ theme }) => theme.main};
            background: ${({ theme }) => theme.secondary};
        }
    }
`
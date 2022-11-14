import styled from "styled-components";

export const NavbarContainer = styled.nav`
    width: 20rem;
    position: absolute;
    bottom: 10rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 1rem 0;
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 25px;

    & a {
        font-size: 3rem;
        color: ${({ theme }) => theme.main};
    }
`;
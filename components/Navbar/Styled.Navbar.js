import styled from "styled-components";

export const NavbarContainer = styled.nav`
    width: 5rem;
    position: absolute;
    bottom: 50%;
    right: 2rem;
    transform: translateY(50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    padding: 1rem 0;
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 25px;

    & a {
        font-size: 3rem;
        color: ${({ theme }) => theme.main};
    }
`;
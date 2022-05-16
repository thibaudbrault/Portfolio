import styled from 'styled-components';

const Frame = styled.div`
    background: ${({ theme }) => theme.secondary};
    position: fixed;
    content: ' ';
    z-index: 100;
`;

export const LeftFrame = styled(Frame)`
    left: 0;
    top: 0;
    height: 100%;
    width: 1rem;
`;

export const RightFrame = styled(Frame)`
    right: 0;
    top: 0;
    height: 100%;
    width: 1rem;
`;

export const TopFrame = styled(Frame)`
    left: 0;
    top: 0;
    height: 1rem;
    width: 100%;
`;

export const BottomFrame = styled(Frame)`
    left: 0;
    bottom: 0;
    height: 1rem;
    width: 100%;
`;
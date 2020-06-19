import React from 'react';
import styled, { keyframes } from 'styled-components';

type ModalProps = {
    children: React.ReactNode;
    toggle?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    open?: boolean;
};

export const Modal: React.FC<ModalProps> = ({ children, toggle, open, ...props }: ModalProps) => (
    <Overlay onClick={toggle}>
        <Dialog {...props}>{children}</Dialog>
    </Overlay>
);

const fadeIn = keyframes`from { opacity: 0; }`;

const Overlay = styled.div`
    animation: ${fadeIn} 200ms ease-out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
`;

const Dialog = styled.div`
    background: white;
    border-radius: 5px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;

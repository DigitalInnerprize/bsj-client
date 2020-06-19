import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { media } from '../../../utils/mediaQueries.ts';

import Brand from './brand';
import BurgerMenu from './burgerMenu';
import CollapseMenu from './collapseMenu';

type Props = {
    handleNavbar?: (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => void;
    navbarState: boolean;
};

const Navbar: React.FC<Props> = ({ navbarState, handleNavbar }) => {
    const barAnimation = useSpring({
        from: { transform: 'translate3d(0, -10rem, 0)' },
        transform: 'translate3d(0, 0, 0)',
    });

    const linkAnimation = useSpring({
        from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.wobbly,
    });

    return (
        <>
            <NavBar style={barAnimation}>
                <FlexContainer>
                    <Brand logo="logo.png" />
                    <NavLinksUl style={linkAnimation}>
                        <a href="/">link n1</a>
                        <a href="/">link n2</a>
                        <a href="/">link n3</a>
                        <a href="/">link n4</a>
                    </NavLinksUl>
                    <BurgerWrapper>
                        <BurgerMenu navbarState={navbarState} handleNavbar={handleNavbar} />
                    </BurgerWrapper>
                </FlexContainer>
            </NavBar>
            <CollapseMenu navbarState={navbarState} handleNavbar={handleNavbar} />
        </>
    );
};

export default Navbar;

const NavBar = styled(animated.nav)`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #2d3436;
    z-index: 1;
    font-size: 1.4rem;
`;

const FlexContainer = styled.div`
    max-width: 120rem;
    display: flex;
    margin: auto;
    padding: 0 2rem;
    justify-content: space-between;
    height: 5rem;
`;

const NavLinksUl = styled(animated.ul)`
    justify-self: end;
    list-style-type: none;
    margin: auto 0;

    & a {
        color: #dfe6e9;
        text-transform: uppercase;
        font-weight: 600;
        border-bottom: 1px solid transparent;
        margin: 0 1.5rem;
        transition: all 300ms linear 0s;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: #fdcb6e;
            border-bottom: 1px solid #fdcb6e;
        }

        ${media.tablet} {
            display: none;
        }
    }
`;

const BurgerWrapper = styled.div`
    margin: auto 0;

    ${media.custom('min', 769)} {
        display: none;
    }
`;

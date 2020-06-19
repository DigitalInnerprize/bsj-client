import React from 'react';
import styled from 'styled-components';
import is from 'typescript-styled-is';
import { animated } from 'react-spring';
import { Link } from 'gatsby';
import { fontSizer } from './mixins/type-utils';

type SharedProps = {
    marginTop?: string;
    marginBottom?: string;
    maxWidth?: number;
    lowercase?: boolean;
    uppercase?: boolean;
    capitalize?: boolean;
    fontWeight?: string | number;
    color?: string;
    size?: string;
};

type HeadingProps = SharedProps & {
    lineHeight?: string;
    letterSpacing?: string;
    borderBottom?: string;
    hoverColor?: string;
    children: React.ReactNode;
};

type PtagProps = SharedProps & {
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    centered?: boolean;
    bold?: boolean;
    borderLeft?: boolean;
    dropCapSize?: string;
};

type TextProps = {
    fontWeight?: string | number;
    color?: string;
};

type NavLinkProps = SharedProps & {
    marginAuto?: boolean;
    marginLeft?: string;
    marginRight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    noMargin?: boolean;
    display?: string;
    size?: string;
};

// headings
export const Heading = styled.h1<HeadingProps>`
    max-width: ${props => props.maxWidth && props.maxWidth}px;
    margin: 0;
    margin-top: ${props => props.marginTop && props.theme.spacing.vertical[props.marginTop]};
    margin-bottom: ${props =>
        props.marginBottom ? props.theme.spacing.vertical[props.marginBottom] : props.theme.spacing.vertical.lg};
    font-family: ${props => props.theme.type.family.heading};
    color: ${props => (props.color ? props.theme.colors[props.color] : props.theme.colors.black)};
    font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
    line-height: ${props =>
        props.lineHeight ? props.theme.type.lineHeight[props.lineHeight] : props.theme.type.lineHeight.regular};
    -webkit-font-smoothing: antialiased;
    cursor: default;
    letter-spacing: ${props =>
        props.letterSpacing
            ? props.theme.type.letterSpacing[props.letterSpacing]
            : props.theme.type.letterSpacing.regular};
    border-bottom: ${props => props.borderBottom && `1px solid ${props.theme.colors.grayFade}`};
    ${props =>
        fontSizer(
            props.size ? props.theme.type.size[props.size] : props.theme.type.size.body,
            props.theme.type.multipliers.heading,
            props.theme.breakpoints,
        )};

    ${is('uppercase')`
      text-transform: uppercase;
    `};

    ${is('capitalize')`
      text-transform: capitalize;
    `};

    ${is('lowercase')`
      text-transform: capitalize;
    `};
`;

export const AnimationH1 = styled(animated.h1)<HeadingProps>`
    max-width: ${props => props.maxWidth && props.maxWidth}px;
    margin: 0;
    margin-top: ${props => props.marginTop && props.theme.spacing.vertical[props.marginTop]};
    margin-bottom: ${props =>
        props.marginBottom ? props.theme.spacing.vertical[props.marginBottom] : props.theme.spacing.vertical.lg};
    font-family: ${props => props.theme.type.family.heading};
    color: ${props => (props.color ? props.theme.colors[props.color] : props.theme.colors.black)};
    font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
    line-height: ${props =>
        props.lineHeight ? props.theme.type.lineHeight[props.lineHeight] : props.theme.type.lineHeight.regular};
    -webkit-font-smoothing: antialiased;
    cursor: default;
    text-transform: capitalize;
    letter-spacing: ${props =>
        props.letterSpacing
            ? props.theme.type.letterSpacing[props.letterSpacing]
            : props.theme.type.letterSpacing.regular};
    ${props =>
        fontSizer(
            props.size ? props.theme.type.size[props.size] : props.theme.type.size.body,
            props.theme.type.multipliers.heading,
            props.theme.breakpoints,
        )};
`;

export const AnimationH2 = styled(animated.h2)<HeadingProps>`
    max-width: ${props => props.maxWidth && props.maxWidth}px;
    margin: 0;
    margin-top: ${props => props.marginTop && props.theme.spacing.vertical[props.marginTop]};
    margin-bottom: ${props =>
        props.marginBottom ? props.theme.spacing.vertical[props.marginBottom] : props.theme.spacing.vertical.lg};
    font-family: ${props => props.theme.type.family.heading};
    color: ${props => (props.color ? props.theme.colors[props.color] : props.theme.colors.black)};
    font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
    line-height: ${props =>
        props.lineHeight ? props.theme.type.lineHeight[props.lineHeight] : props.theme.type.lineHeight.regular};
    -webkit-font-smoothing: antialiased;
    cursor: default;
    text-transform: capitalize;
    letter-spacing: ${props =>
        props.letterSpacing
            ? props.theme.type.letterSpacing[props.letterSpacing]
            : props.theme.type.letterSpacing.regular};
    ${props =>
        fontSizer(
            props.size ? props.theme.type.size[props.size] : props.theme.type.size.body,
            props.theme.type.multipliers.heading,
            props.theme.breakpoints,
        )};
`;

export const AnimatedH1 = (props: HeadingProps) => (
    <AnimationH1
        {...props}
        children={props.children}
        color={props.color ? props.color : 'black'}
        fontWeight={props.fontWeight ? props.fontWeight : 500}
        letterSpacing="narrow"
        lineHeight="compressedAlt"
        marginBottom={props.marginBottom ? props.marginBottom : 'md'}
    />
);

export const AnimatedH2 = (props: HeadingProps) => (
    <AnimationH2
        {...props}
        children={props.children}
        color={props.color ? props.color : 'black'}
        fontWeight={props.fontWeight ? props.fontWeight : 500}
        letterSpacing="narrow"
        lineHeight="compressedAlt"
        marginBottom={props.marginBottom ? props.marginBottom : 'md'}
    />
);

export const H1 = (props: HeadingProps) => (
    <Heading
        {...props}
        as="h1"
        children={props.children}
        color={props.color ? props.color : 'black'}
        fontWeight={props.fontWeight ? props.fontWeight : 500}
        letterSpacing={props.letterSpacing ? props.letterSpacing : 'narrow'}
        lineHeight={props.lineHeight ? props.lineHeight : 'compressedAlt'}
        marginBottom={props.marginBottom ? props.marginBottom : 'md'}
        size="h1"
    />
);
export const H2 = (props: HeadingProps) => (
    <Heading
        {...props}
        as="h2"
        children={props.children}
        color={props.color ? props.color : 'black'}
        fontWeight={props.fontWeight ? props.fontWeight : 500}
        letterSpacing={props.letterSpacing ? props.letterSpacing : 'narrow'}
        marginBottom={props.marginBottom ? props.marginBottom : 'sm2'}
        size="h2"
    />
);
export const H3 = (props: HeadingProps) => (
    <Heading
        {...props}
        as="h3"
        children={props.children}
        fontWeight={props.fontWeight ? props.fontWeight : 500}
        marginBottom={props.marginBottom ? props.marginBottom : 'sm'}
        size="h3"
    />
);
export const H4 = (props: HeadingProps) => (
    <Heading
        {...props}
        as="h4"
        children={props.children}
        marginBottom={props.marginBottom ? props.marginBottom : 'xs'}
        size="h4"
    />
);
export const H5 = (props: HeadingProps) => (
    <Heading
        {...props}
        as="h5"
        children={props.children}
        marginBottom={props.marginBottom ? props.marginBottom : 'md'}
        size="h5"
    />
);
export const H6 = (props: HeadingProps) => (
    <Heading
        {...props}
        as="h6"
        children={props.children}
        marginBottom={props.marginBottom ? props.marginBottom : 'md'}
        size="h6"
        uppercase
    />
);

// body
export const P = styled.p<PtagProps>`
    max-width: ${props => props.maxWidth && props.maxWidth};
    margin-top: ${props =>
        props.marginTop ? props.theme.spacing.vertical[props.marginTop] : props.theme.spacing.vertical.md};
    margin-bottom: ${props =>
        props.marginBottom ? props.theme.spacing.vertical[props.marginBottom] : props.theme.spacing.vertical.lg};
    padding-top: ${props => props.paddingTop && props.theme.spacing.vertical[props.paddingTop]};
    padding-bottom: ${props => props.paddingBottom && props.theme.spacing.vertical[props.paddingBottom]};
    padding-left: ${props =>
        props.paddingLeft ? props.theme.spacing.horizontal[props.paddingLeft] : props.borderLeft ? '10px' : 0};
    padding-right: ${props => (props.paddingRight ? props.theme.spacing.horizontal[props.paddingRight] : 0)};
    margin-left: ${props => props.centered && 'auto'};
    margin-right: ${props => props.centered && 'auto'};
    color: ${props => props.color && props.theme.colors[props.color]};
    font-weight: ${props => props.fontWeight && props.fontWeight};
    text-align: ${props => props.centered && 'center'};
    border-left: ${props => props.borderLeft && `3px solid ${props.theme.colors.black}`};

    cursor: default;
    ${props =>
        fontSizer(
            props.size ? props.theme.type.size[props.size] : props.theme.type.size.bodyAlt,
            props.theme.type.multipliers.body,
            props.theme.breakpoints,
        )};

    ${is('uppercase')`
      text-transform: uppercase;
    `};

    ${is('capitalize')`
      text-transform: capitalize;
    `};

    ${is('lowercase')`
      text-transform: capitalize;
    `};

    ${is('dropCapSize')`
      &:first-letter {
        font-size: ${props => props.dropCapSize && props.theme.type.size[props.dropCapSize]};
        float: left;
        margin-top: .15em;
      }
    `};
`;

export const AnimatedP = styled(animated.p)<PtagProps>`
    max-width: ${props => props.maxWidth && props.maxWidth};
    margin-top: ${props =>
        props.marginTop ? props.theme.spacing.vertical[props.marginTop] : props.theme.spacing.vertical.md};
    margin-bottom: ${props =>
        props.marginBottom ? props.theme.spacing.vertical[props.marginBottom] : props.theme.spacing.vertical.lg};
    padding-left: ${props =>
        props.paddingLeft ? props.theme.spacing.horizontal[props.paddingLeft] : props.borderLeft ? '10px' : 0};
    padding-right: ${props => (props.paddingRight ? props.theme.spacing.horizontal[props.paddingRight] : 0)};
    color: ${props => props.color && props.theme.colors[props.color]};
    ${props =>
        fontSizer(
            props.size ? props.theme.type.size[props.size] : props.theme.type.size.bodyAlt,
            props.theme.type.multipliers.heading,
            props.theme.breakpoints,
        )};
`;

export const SmallText = styled.span<TextProps>`
    max-width: 80%;
    margin: 0 0 ${props => props.theme.spacing.vertical.md};
    color: ${props => props.color && props.theme.colors[props.color]};
    letter-spacing: ${props => props.theme.type.letterSpacing.regular};
    font-family: ${props => props.theme.type.family.heading};
    line-height: ${props => props.theme.type.lineHeight.extended};
    font-weight: ${props => props.fontWeight && props.fontWeight};
    font-size: ${props => props.theme.type.size.sm}px;
    ${props => fontSizer(props.theme.type.size.xs, props.theme.type.multipliers.body, props.theme.breakpoints)};

    ${is('uppercase')`
      text-transform: uppercase;
    `};

    ${is('capitalize')`
      text-transform: capitalize;
    `};

    ${is('lowercase')`
      text-transform: capitalize;
    `};
`;
export const Em = styled.span`
    font-style: italic;
`;

// links
export const NavLink = styled(Link)<NavLinkProps>`
    margin-top: ${props =>
        props.marginTop
            ? props.theme.spacing.vertical[props.marginTop]
            : props.noMargin
            ? 0
            : props.theme.spacing.vertical.lg};
    margin-bottom: ${props =>
        props.marginBottom
            ? props.theme.spacing.vertical[props.marginBottom]
            : props.noMargin
            ? 0
            : props.theme.spacing.vertical.lg};
    margin-left: ${props => props.marginLeft && props.theme.spacing.horizontal[props.marginLeft]};
    margin-right: ${props => props.marginRight && props.theme.spacing.horizontal[props.marginRight]};
    display: ${props => (props.display ? props.display : 'block')};
    font-family: ${props => props.theme.type.family.heading};
    font-weight: ${props => props.fontWeight && props.fontWeight};
    ${props =>
        fontSizer(
            props.size ? props.theme.type.size[props.size] : props.theme.type.size.body,
            props.theme.type.multipliers.body,
            props.theme.breakpoints,
        )};

    ${is('marginAuto')`
      margin-left: auto;
      margin-right: auto;
    `};

    ${is('uppercase')`
      text-transform: uppercase;
    `};

    ${is('capitalize')`
      text-transform: capitalize;
    `};

    ${is('lowercase')`
      text-transform: capitalize;
    `};
`;

export const NavClickLink = styled.a<NavLinkProps>`
    margin-top: ${props => props.marginTop && props.theme.spacing.vertical[props.marginTop]};
    margin-bottom: ${props =>
        props.marginBottom ? props.theme.spacing.vertical[props.marginBottom] : props.theme.spacing.vertical.lg};

    padding-top: ${props => props.paddingTop && props.theme.spacing.vertical[props.paddingTop]};
    padding-bottom: ${props => props.paddingBottom && props.theme.spacing.vertical[props.paddingBottom]};
    padding-left: ${props => props.paddingLeft && props.theme.spacing.horizontal[props.paddingLeft]};
    padding-right: ${props => props.paddingRight && props.theme.spacing.horizontal[props.paddingRight]};
    display: ${props => (props.display ? props.display : 'block')};
    font-family: ${props => props.theme.type.family.heading};
    font-weight: ${props => props.fontWeight && props.fontWeight};
    cursor: pointer;
    ${props =>
        fontSizer(
            props.size ? props.theme.type.size[props.size] : props.theme.type.size.body,
            props.theme.type.multipliers.body,
            props.theme.breakpoints,
        )};

    ${is('marginAuto')`
        margin-left: auto;
        margin-right: auto;
    `};

    ${is('uppercase')`
      text-transform: uppercase;
    `};

    ${is('capitalize')`
      text-transform: capitalize;
    `};

    ${is('lowercase')`
      text-transform: capitalize;
    `};
`;

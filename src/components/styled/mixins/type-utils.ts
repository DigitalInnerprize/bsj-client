import { css } from 'styled-components';

type BProps = {
    body?: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};

export const fontSizer = (baseSize: number, multiplier: BProps, breakpoints: BProps) =>
    `
      font-size: ${baseSize}px;

      @media (min-width: ${breakpoints.sm}px) {
        font-size: ${baseSize * multiplier.sm}px;
      }
      @media (min-width: ${breakpoints.md}px) {
        font-size: ${baseSize * multiplier.md}px;
      }
      @media (min-width: ${breakpoints.lg}px) {
        font-size: ${baseSize * multiplier.lg}px;
      }
      @media (min-width: ${breakpoints.xl}px) {
        font-size: ${baseSize * multiplier.xl}px;
      }
      @media (min-width: ${breakpoints.xxl}px) {
        font-size: ${baseSize * multiplier.xxl}px;
      }
    `;

/*
 * transitions
 */
export const transitionXs = css`
    transition: all ${props => props.theme.transition.duration.xs} ${props => props.theme.transition.easing.default};
`;
export const transitionSm = css`
    transition: all ${props => props.theme.transition.duration.sm} ${props => props.theme.transition.easing.default};
`;
export const transitionMdSCurve = css`
    transition: all ${props => props.theme.transition.duration.md} ${props => props.theme.transition.easing.sCurve};
`;
export const transitionMd = css<{ noAnimation?: boolean }>`
    transition: ${props => (!props.noAnimation ? 'all' : 'none')} ${props => props.theme.transition.duration.md}
        ${props => props.theme.transition.easing.default};
`;
export const transitionLg = css`
    transition: all ${props => props.theme.transition.duration.lg} ${props => props.theme.transition.easing.default};
`;
export const transitionXl = css`
    transition: all ${props => props.theme.transition.duration.xl} ${props => props.theme.transition.easing.default};
`;
export const transitionOpacity = css`
    ${transitionXs};
    opacity: 0.8;

    &:hover {
        opacity: 1;
    }
`;

/*
 * other
 */
export const bgGradient = css`
    background: linear-gradient(
        to right,
        ${props => props.theme.colors.special.blueGradient1},
        ${props => props.theme.colors.special.blueGradient2}
    );
`;

export const flexRowSpaceBetweenCenter = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const verticalAlign = css`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`;

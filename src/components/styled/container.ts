import styled from 'styled-components';
import is from 'typescript-styled-is';

type ContainerProps = {
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    maxWidth?: number;
    minWidth?: number;
};

export const Container = styled.div<ContainerProps>`
    margin-top: ${props => props.marginTop && props.theme.spacing.vertical[props.marginTop]};
    margin-bottom: ${props => props.marginBottom && props.theme.spacing.vertical[props.marginBottom]};
    margin-left: ${props => props.marginLeft && props.theme.spacing.horizontal[props.marginLeft]};
    margin-right: ${props => props.marginRight && props.theme.spacing.horizontal[props.marginRight]};
    padding-top: ${props => props.paddingTop && props.theme.spacing.vertical[props.paddingTop]};
    padding-bottom: ${props => props.paddingBottom && props.theme.spacing.vertical[props.paddingBottom]};
    padding-left: ${props => props.paddingLeft && props.theme.spacing.horizontal[props.paddingLeft]};
    padding-right: ${props => props.paddingRight && props.theme.spacing.horizontal[props.paddingRight]};
    height: 100%;
    ${is('maxWidth')`
      max-width: ${props => props.maxWidth}px;
    `};

    ${is('minWidth')`
      min-width: ${props => props.minWidth}px;
    `};

    ${is('marginLeftRightAuto')`
      margin-left: auto;
      margin-right: auto;
    `};

    ${is('marginLeftAuto')`
      margin-left: auto;
    `};

    ${is('marginRightAuto')`
      margin-right: auto;
    `};
`;

export const FlexRowVAlign = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

import styled from 'styled-components';
import is from 'typescript-styled-is';
import { media } from '../../utils/mediaQueries';

type GridProps = {
    templateColumns?: string;
    gap?: string;
    rowGap?: string;
    autoRows?: string;
    width?: string;
    height?: string;
};

type GridItemProps = {
    column?: string;
    row?: string;
};

export const Grid = styled.div<GridProps>`
    display: grid;
    ${is('templateColumns')`
    grid-template-columns: ${props => props.templateColumns};
  `};
    ${is('gap')`
    grid-gap: ${props => props.gap};
  `};
    ${is('rowGap')`
    grid-row-gap: ${props => props.rowGap};
  `};
    ${is('autoRows')`
    grid-auto-rows: ${props => props.autoRows};
  `};
    ${is('width')`
    width: ${props => props.width};
  `};
    ${is('height')`
    height: ${props => props.height};
  `};
`;

export const GridItem = styled.div<GridItemProps>`
    ${is('column')`
    grid-column: ${props => props.column}`};
    ${is('row')`
    grid-row: ${props => props.row}`};
`;

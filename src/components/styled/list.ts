import styled from 'styled-components';

type Props = {
    column?: boolean;
    center?: boolean;
};

export const UL = styled.ul<Props>`
    list-style: none;
    padding-inline-start: 0;
    display: flex;
    flex-direction: ${props => props.column && 'column'};
    justify-content: ${props => props.center && 'center'};
    align-items: ${props => props.center && 'center'};
`;

export const LI = styled.li`
    margin-left: ${props => props.marginLeft && props.theme.spacing.horizontal[props.marginLeft]};
    margin-right: ${props => props.marginRight && props.theme.spacing.horizontal[props.marginRight]};
`;

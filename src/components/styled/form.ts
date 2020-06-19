import styled from 'styled-components';
import is from 'typescript-styled-is';

export const FormContainer = styled.div`
    margin-top: ${props => props.theme.spacing.vertical['xxl']};
    padding-bottom: ${props => props.theme.spacing.vertical['xxl']};
    padding-left: ${props => props.theme.spacing.horizontal['lg']};
    padding-right: ${props => props.theme.spacing.horizontal['lg']};
    max-width: 900px;
    text-align: center;

    ${is('marginAuto')`
        margin-left: auto;
        margin-right: auto;
    `};
`;

export const Input = styled.input.attrs(props => ({
    type: props.type || 'text',
}))`
    margin-bottom: 20px;
    padding: 8px 15px 7px 20px;
    font-size: 1.5em;
    letter-spacing: 0.3px;
    border: 1px solid #d6d6d6;
    height: 50px;
    color: #38373b;
    border-radius: 3px;
    line-height: normal;
`;

export const TextArea = styled.textarea<{ height: string }>`
    margin-bottom: 20px;
    padding: 8px 15px 7px 20px;
    font-size: 1.5em;
    letter-spacing: 0.3px;
    border: 1px solid #d6d6d6;
    color: #38373b;
    border-radius: 3px;
    line-height: normal;
    height: ${props => (props.height ? props.height : 'auto')};
    width: 100%;
`;

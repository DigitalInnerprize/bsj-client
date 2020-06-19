import React from 'react';
import styled from 'styled-components';

type Props = {
    logo: string;
    alt?: string;
};

const defaultProps = {
    alt: 'Company Logo',
};

const Image = styled.img`
    height: 85%;
    margin: auto 0;
`;

const Brand: React.FC<Props> = ({ logo, alt }) => <Image src={logo} alt={alt} />;

export default Brand;

Brand.defaultProps = defaultProps;

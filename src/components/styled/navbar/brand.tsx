import React from 'react'
import styled from 'styled-components'

interface Props {
  logo: string
  alt?: string
}

const defaultProps = {
  alt: 'Company Logo',
}

const Image = styled.img`
  width: inherit;
`

const Brand: React.FC<Props> = ({ logo, alt }) => <Image src={logo} alt={alt} />

export default Brand

Brand.defaultProps = defaultProps

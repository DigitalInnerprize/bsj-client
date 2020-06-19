import { createGlobalStyle } from "styled-components"
import { fontSizer } from "./styled/mixins/type-utils"

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  vertical-align: baseline;
  font-size: 100%;
  box-sizing: inherit;

  &::before,
  &::after {
    box-sizing: inherit;
  }
}

html {
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  height: 100%;
  font-family: ${props => props.theme.type.family.default}, 'Open Sans';
  ${props =>
    fontSizer(
      props.theme.type.size.body,
      props.theme.type.multipliers.body,
      props.theme.breakpoints
    )}
  letter-spacing: ${props => props.theme.type.letterSpacing.narrow};
  line-height: ${props => props.theme.type.lineHeight.regular};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

img {
  display: block;
  width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
`

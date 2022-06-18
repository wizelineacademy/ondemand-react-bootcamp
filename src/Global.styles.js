import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  font-size: 10px;
  line-height: 1.1;
  font-weight: 400;
  height: 100%;
  font-family: sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto', sans-serif;
}

#root {
  height: 100%;
}

p,
a,
span,
label,
input, button {
  font-size: 1.4rem;
  line-height: 1.2;
}

small {
  font-size: 1rem;
}

p {
  margin: 0 0 1rem 0;
}

img {
  display: block;
  width: 100%;
}
`

export default GlobalStyles

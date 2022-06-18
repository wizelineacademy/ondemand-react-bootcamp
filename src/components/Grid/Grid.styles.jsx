import styled from 'styled-components'
import { screen } from 'config'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media ${screen.tablet} {  
    grid-template-columns: repeat(5, 1fr);
  }

  @media ${screen.desktop} {  
    grid-template-columns: repeat(6, 1fr);
  }
`

const Styled = { Grid }
export default Styled
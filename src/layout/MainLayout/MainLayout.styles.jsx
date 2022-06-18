import styled from 'styled-components'
import { screen } from 'config'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr 80px;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    'header'
    'content'
    'footer';
  @media ${screen.tablet} {  
     grid-template-rows: 80px 1fr 80px;
  }
`

const MainContent = styled.main`
  grid-area: content;
  margin: 0 auto;
  width: 100%;

  @media ${screen.tablet} {  
     max-width: 736px;
  }

  @media ${screen.desktop} {  
     max-width: 980px;
  }
`

const Styled = { Container, MainContent }
export default Styled
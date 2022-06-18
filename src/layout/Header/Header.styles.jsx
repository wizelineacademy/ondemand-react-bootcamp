import styled from 'styled-components'
import { screen } from 'config'

const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template-areas:
    'header-left'
    'header-right';
  border-bottom: 1px solid #ddd;
  padding: 1rem;
  @media ${screen.tablet} {  
    padding: 2rem;
    grid-template-areas:
      'header-left header-right';
  }
`
const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const HeaderLeft = styled(HeaderItem)`
  grid-area: header-left;
`
const HeaderRight = styled(HeaderItem)`
  grid-area: header-right;
  justify-content: space-between;
  @media ${screen.tablet} {  
    justify-content: flex-end;
  }
`

const Logo = styled.div`
  img {
    display: block;
    width: 50px;
  }
`
const Title = styled.h1`
  line-height: 1;
  margin: 0;
`

const Styled = {
  Header,
  HeaderLeft,
  HeaderRight,
  Logo,
  Title
}

export default Styled
import { Branding, Searchbar, ShoppingCart } from 'components'
import Styled from './Header.styles'

const Header = () => {
  return (
      <Styled.Header>
        <Styled.HeaderLeft>
          <Branding />
        </Styled.HeaderLeft>
        <Styled.HeaderRight>
          <Searchbar />
          <ShoppingCart />
        </Styled.HeaderRight>
      </Styled.Header>
  )
}
 
export default Header

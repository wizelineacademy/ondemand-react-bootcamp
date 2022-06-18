import logo from 'assets/logo.svg'
import Styled from './Branding.styles'

const Branding = () => {
  return (
    <>
      <Styled.Logo>
        <img data-testid="logo" src={logo} className="logo" alt="logo" />
      </Styled.Logo>
      <Styled.Title data-testid="name">Ecommerce</Styled.Title>
    </>
  )
}
 
export default Branding


import { FeaturedBanner, FeaturedProducts, ProductCategories } from 'components'
import Styled from './Home.styles'

const Home = () => {


  return (
    <Styled.Container>
      <h1>HOME PAGE</h1>
      <FeaturedBanner/>
      <ProductCategories />
      <FeaturedProducts />
    </Styled.Container>
  )
}

export default Home
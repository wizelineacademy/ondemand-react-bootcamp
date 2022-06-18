
import { Grid } from 'components'
import featuredProducts from 'mocks/en-us/featured-products.json'

const FeaturedProducts = () => {
  const { results } = featuredProducts
  return (
    <>
      <h2>Featured Products</h2>
      <Grid items={results}/>
    </>
  )
}

export default FeaturedProducts
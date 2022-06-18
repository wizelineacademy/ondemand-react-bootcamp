import { Slider } from 'components'
import productCategories from 'mocks/en-us/product-categories.json'

const ProductCategories = () => {
  const { results } = productCategories
  return (
    <>
      <h2>Categories</h2>
      <Slider items={results} slidesPerView={3} spaceBetween={24}/>
      <hr />
    </>
  )
}

export default ProductCategories

import { Slider } from 'components'
import featuredBanners from 'mocks/en-us/featured-banners.json'

const FeaturedBanner = () => {
  const { results } = featuredBanners
  return (
    <>
      <h2>FeaturedBanners</h2>
      <Slider items={results}/>
      <hr />
    </>
  )
}

export default FeaturedBanner
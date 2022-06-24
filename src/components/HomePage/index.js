import styles from './styles.module.css'
import Slider from './Slider/index'
import Grid from './Grid/index'
import GridDetails from './GridDetails/index'
import featuredBanners from '../../mocks/en-us/featured-banners.json'
import productCategories from '../../mocks/en-us/product-categories.json'
import featuredProducts from '../../mocks/en-us/featured-products.json'

export default function HomePage () {
    return (
        <div className={styles["home-page"]}>
            <Slider banners={featuredBanners.results}/>
            <br /> 
            <Grid title="Product categories" productCategories={productCategories.results}/>
            <br />
            <GridDetails title="Featured products" featuredProducts={featuredProducts.results} />
        </div>
    )
}
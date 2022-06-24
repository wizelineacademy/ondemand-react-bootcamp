import styles from './styles.module.css'
import Slider from './Slider/index'
import Grid from './Grid/index'
import featuredBanners from '../../mocks/en-us/featured-banners.json'

export default function HomePage () {
    return (
        <div className={styles["home-page"]}>
            <Slider banners={featuredBanners.results}/>
        </div>
    )
}
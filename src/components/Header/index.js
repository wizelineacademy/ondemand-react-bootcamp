import Logo from '../../assets/logo.png'
import ShoppingCart from '../../assets/shopping-cart.png'
import styles from './styles.module.css'

export default function Header () {
    return (
        <header>
            <div className={styles.logo}>
                <img src={Logo} />
                <h3>Cornerstore</h3>
            </div>
            
            
            
            <input type="text" className={styles.search} placeholder="Search a product"></input>
            

            <div className={styles.logo}>
                <img src={ShoppingCart} />
            </div>
            
        </header>
    )
}
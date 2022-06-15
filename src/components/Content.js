import styles from './Content.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import SellItem from './SellItem'
export default function Content() {
    return (
        <div className={styles.textcontent} >
            <SellItem />
            <SellItem />
            <SellItem />
            <SellItem />
            <SellItem />
            <SellItem />
            <SellItem />
            <SellItem />
            <SellItem />
        </div>


    );





}
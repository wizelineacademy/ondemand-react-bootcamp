import styles from './styles.module.css'
import { useState } from 'react'


export default function Slider (props) {
    let [page, setPage] = useState(0)
    let maxPage = props.banners.length - 1
    let title = props.banners[page].data.title ? props.banners[page].data.title : ''
    let description = props.banners[page].data.description[0].text ? props.banners[page].data.description[0].text : ''
    let url = props.banners[page].data.main_image.url ? props.banners[page].data.main_image.url : ''

    const nextBanner = () => {
        console.log(page)
        if(page < maxPage) {
            setPage(page + 1)
        } 
        
    }

    const prevBanner = () => {
        if (page > 0) {
            setPage(page - 1)
        } 
    }

    return (
        
        <div className={styles.container}>

            <div className={styles["container-slider"]}>
                <div> 
                    <h5>{title}</h5>
                    <p>{description}</p>    
                </div>
                
                <img src={url}/>
            
            </div>

            <div className={styles.buttons}>
                <input type="button" value="<" onClick={prevBanner}/>
                {(page + 1) + '/' + (maxPage + 1)}
                <input type="button" value=">" onClick={nextBanner}/>
            </div>
        
        </div>
        
        
    )
}
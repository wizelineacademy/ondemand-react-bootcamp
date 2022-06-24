import productCategories from '../../../mocks/en-us/product-categories.json'
import React from 'react'
import styles from './styles.module.css'

export default function Grid() {

    return (
        <div className={styles.outer}>

            
            {
                productCategories.results.map((result, index) => (
                        
                    <img src={result.data.main_image.url}></img>    
                        
                ))
            }
        </div>
    )
}
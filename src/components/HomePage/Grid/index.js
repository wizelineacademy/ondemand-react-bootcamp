import React from 'react'
import styles from './styles.module.css'

export default function Grid(props) {
    

    return (
        
        
        <div className={styles["main-container"]}>

            <h4 className={styles.title}>{props.title}</h4>
        
            
                
            <div className={styles["grid-container"]}>
            
                
                {
                    props.productCategories.map(element => 
                        <div className={styles["grid-item"]}>
                            <img src={element.data.main_image.url} />
                            <p>{element.data.name}</p>
                        </div>
                    )
                }
                
                
            
            </div>
        </div>
    )
}
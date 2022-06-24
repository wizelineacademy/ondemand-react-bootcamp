import styles from './styles.module.css'

export default function GridDetails (props) {   

    console.log(props.featuredProducts)

    return (
        <div className={styles["main-container"]} >

            <h4 className={styles.title}>{props.title}</h4>     


            <div className={styles["grid-container"]} >
                {
                    props.featuredProducts.map(product => 

                        
                        <div className={styles["grid-item"]}>

                            <div className={styles["item-details"]}>
                                <b>{product.data.name}</b>
                                <p>{product.data.category.slug}</p>
                                <p>{"$" + product.data.price}</p>
                            </div>
                            <div className={styles["item-image"]}>
                                <img src={product.data.mainimage.url} />
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )

}
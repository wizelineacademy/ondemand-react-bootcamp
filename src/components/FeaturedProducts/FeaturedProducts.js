import React from "react"
import PropTypes from "prop-types"
import styles from './FeaturedProducts.module.scss'
import CarouselGrid from '../CarouselGrid/CarouselGrid';

export default class FeaturedProducts extends React.Component {


    constructor(props) {
        super(props)

        //   console.log("FeaturedProducts constructor******************",this.props.featuredProducts)  
        var featuredProducts = this.props.featuredProducts.map
            ((data) => {


                return data.srcs.map((image, index) => {

                    return {
                        id: index + 1,
                        src: image.image.url,
                        alt: data.alt,
                        text: data.text
                    };
                })
            });


        this.state = { featuredProducts: featuredProducts }
    }

    static propTypes = {
        featuredProducts: PropTypes.array.isRequired,
    }

    render() {

        return (
            <div className={styles.featuredProducts}>
                <CarouselGrid gridName={'FeaturedProducts'} gridData={this.state.featuredProducts} />
                <br/>
                <div className={styles.featuredProducts}>
                    <button className={styles.viewProductsButton} >View all products</button>
                </div>
                <br/>
            </div>
        );
    }

}
import React from "react"
import PropTypes from "prop-types"
import styles from './FeaturedProducts.module.scss'
import CarouselGrid from './CarouselGrid';

export default class FeaturedProducts extends React.Component {
 

    constructor(props) {
        super(props)

          console.log("FeaturedProducts constructor******************",this.props.featuredProducts)  
        var featuredProducts= this.props.featuredProducts.map
        ((data)=>{ 
       
     
                return data.srcs.map((image,index)=>{ 
                       
                    return {
                            id: index+1,      
                            src: image.image.url,
                            alt: 'Ultimate products!',
                            text: 'Ultimate products!'
                        };
                    })
        });
         
       
        this.state= { featuredProducts:featuredProducts}
    }

    static propTypes = {
        featuredProducts: PropTypes.array.isRequired,
    }

    render() {
        
        return (
            <div className={ styles.divCarrousell}>
                {console.log("***+++++++++++++++++++++++",this.state.featuredProducts)}
             <CarouselGrid  gridName={'FeaturedProducts'} gridData={this.state.featuredProducts} />)
            </div>
        );
    }
  
}
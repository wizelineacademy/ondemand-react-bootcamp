import React from "react"
import PropTypes from "prop-types"
import styles from './Carrousel.module.scss'
import Carousel from './Carousel';

export default class SellItem extends React.Component {
 

    constructor(props) {
        super(props)

        var featuredData= this.props.featuredData.map
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
         
       
        this.state= { featuredData:featuredData}
    }

    static propTypes = {
        featuredData: PropTypes.array.isRequired,
    }

    render() {

        
        return (
            <div className={ styles.divCarrousell}>
            {  console.log("SellItem constructor",this.state.featuredData)  }
            {  this.state.featuredData.map( (element) =>  console.log('element',element) )}
            {  this.state.featuredData.map( (element,index)=>  <Carousel key={index} carouselIndex={index} carouselName={'sellItems'} slideIndex={1} data={element} />)}
            </div>
        );
    }
  
}
import React from 'react';
import styles from './Content.module.scss'
import FeaturedProducts from './FeaturedProducts'
import Slider from './Slider'
import ProductCategories from './ProductCategories'


export default class Content extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { bannerData:this.props.bannerData ,productCategories :this.props.productCategories, featuredProducts:this.props.featuredProducts}
   
    }


    render() {
        return (
            <div className={styles.textcontent} >
                {(this.state.bannerData!==null && this.state.bannerData.length>0) && <Slider  index={1} elements={this.props.bannerData} />}
                <br />
                {(this.state.productCategories!==null && this.state.productCategories.length>0) && <ProductCategories productCategories={this.props.productCategories} />}
                <br />
                {(this.state.featuredProducts!==null && this.state.featuredProducts.length>0) && <FeaturedProducts featuredProducts={this.props.featuredProducts}/> }
            </div >


        );
    }





}
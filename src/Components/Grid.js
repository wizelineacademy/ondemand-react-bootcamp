import React from "react";
import {Categories} from '../mocks/product-categories'
import '../styles/css/GridCategory.css'

function GridCategory() {

    return (
        <>
        <h1 style={{textAlign:'center', 
                textDecoration:'underline overline', 
                color:'white',
                fontSize:'100px', 
                fontFamily:'"Lucida Console", "Courier New", monospace',
                textShadow:'-3px -3px 0 #1E517B, 1px -1px 0 #1E517B, -1px 1px 0 #1E517B, 1px 1px 0 #1E517B'}}>
            Categories</h1>
        <div className="grid-container">
            {Categories.results.map((item, itemIndex) => { 
                return (    
                    <div key={item.id} className="grid-card">
                        <img className="grid-img" src={item.data.main_image.url} alt={item.data.main_image.alt} />
                        <div className="grid-title">
                            <h1>{item.data.name}</h1>    
                        </div>
                    </div>
                )
            })
            }
        </div>
        </>
    )
}

export default GridCategory;
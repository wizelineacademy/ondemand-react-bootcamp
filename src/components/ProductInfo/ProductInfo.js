import { useState, useEfect } from "react";
import CarouselGrid from "../CarouselGrid/CarouselGrid";

export default function ProductInfo( {products})
{
    
   

            // id: index + 1,
            // categoryId: item.data.category.id,

      
            
        
         
            const gridData = products.map
            ((data) => {


                return data.srcs.map((image, index) => {
                    return {
                        id: index + 1,
                        src: image,
                        alt: data.alt,
                        text: data.text,
                        categoryId:data.categoryId
                    };
                })
            });
            console.log(gridData)
    return(
        <div style={{display: 'inline-block'}}>
            <CarouselGrid  gridData={gridData} gridName={'Products'} />
                        
        </div>

    );



}
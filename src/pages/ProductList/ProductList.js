import SideBar from "../../components/SideBar/SideBar";
import ProductsInfo from "../../components/ProductsInfo/ProductsInfo"
import useWrappedProductCategoriesMenu from '../../utils/wrappers/useWrappedProductCategoriesMenu'
import useWrappedProducts from "../../utils/wrappers/useWrappedProducts";
import { useEffect, useState } from "react";
// import { Button } from "bootstrap";



const ProductList = () => {
    const [ filteredProducts, setFilteredProducts ] = useState({});
    const [selectedCategories, updateSelectedCategories] = useState([]);
    const [readyForRender, setReadyForRender] = useState(false);

    const { productCategories, isProductCategoriesLoading } = useWrappedProductCategoriesMenu();
    const { products, isProductsLoading } = useWrappedProducts({}, 0, 0);
    

    
    

    useEffect(() => {

        if (isProductsLoading || isProductCategoriesLoading || selectedCategories=== undefined  ) {
            return;
        }
        if (selectedCategories===undefined || selectedCategories?.length === 0) {
            setFilteredProducts(products); 
            setReadyForRender(true);
            return;
        }
  
        setFilteredProducts(
            products.filter((p) => selectedCategories.some(c => c===p.categoryId))
        ); 
        setReadyForRender(true);

    },
    [selectedCategories, 
     productCategories,
     products, 
     isProductsLoading, 
     isProductCategoriesLoading,
     readyForRender]);

    // console.log(products, isProductsLoading);
    return (
        <div>
            
            {!readyForRender ?<div>Loading</div>:
                <SideBar menuListItems={productCategories}
                    categoriesParentList={selectedCategories}
                    updateParentSelectedCategories={updateSelectedCategories} />
                 }
            <h1 style={{ display: 'inline-block' }} >This is the Product List Page </h1>
           
            {(selectedCategories?.length>0)&&<button onClick={()=> updateSelectedCategories([])}>clear filters</button>}
            {!readyForRender ? <div>Loading</div>:<ProductsInfo products={filteredProducts} />  }

        </div>
    );


}

export default ProductList;
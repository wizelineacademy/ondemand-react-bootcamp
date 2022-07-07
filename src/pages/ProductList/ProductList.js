import SideBar from "../../components/SideBar/SideBar";
import ProductInfo from "../../components/ProductInfo/ProductInfo"
import useWrappedProductCategories from '../../utils/wrappers/useWrappedProductCategories'

const ProductList = () => {

    const { productCategories, isProductCategoriesLoading } = useWrappedProductCategories();
    
    return (
        <div>
        <h1>This is the Product List Page </h1>
       {!isProductCategoriesLoading ? <SideBar menuListItems={productCategories}/>: <div>Loading</div>}
       
        <ProductInfo/>
        </div>
    );


}

export default ProductList;
import SideBar from "../../components/SideBar/SideBar";
import ProductInfo from "../../components/ProductInfo/ProductInfo"
import useWrappedProductCategoriesMenu from '../../utils/wrappers/useWrappedProductCategoriesMenu'
import useWrappedProducts from "../../utils/wrappers/useWrappedProducts";
const ProductList = () => {

    const { productCategories, isProductCategoriesLoading } = useWrappedProductCategoriesMenu();
    const {     products, isProductsLoading }  =useWrappedProducts({},0,0);

    console.log(products,isProductsLoading);
    return (
        <div>
        <h1>This is the Product List Page </h1>
       {!isProductCategoriesLoading ? <SideBar menuListItems={productCategories}/>: <div>Loading</div>}
       {!isProductsLoading ? <ProductInfo products={products}/>: <div>Loading</div>}
        
        </div>
    );


}

export default ProductList;
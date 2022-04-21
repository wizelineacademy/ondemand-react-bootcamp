function Product(props) {
    return (
        <div className="wz-col wz-thirds wz-product">
            <img src={props.itemData.data.mainimage.url} alt={props.itemData.data.mainimage.alt} />
            <h4 className="wz-center">{props.itemData.data.name}</h4>
            <p className="wz-center">{props.itemData.data.category.slug}</p>
            <p className="wz-center">$ {props.itemData.data.price}</p>
        </div>
    );
} 

export default Product;
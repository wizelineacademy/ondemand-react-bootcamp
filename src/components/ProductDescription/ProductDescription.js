export default function ProductDescription({ name, price, sku, categoryName, tags, description, specs }) {
    
    
    console.log(name, price, sku, categoryName, tags, description, specs)

    return (
        <div>
            {<p>Name: {name}</p>}
            {<p>Price: {price}</p>}
            {<p>SKU: {sku}</p>}
            {<p>Category: {categoryName}</p>}
            <p>Tags: {tags.map((tag, id) => { return (<span key={id}>{tag} </span>) })}</p>
            {<p>Description: <br /> {description}</p>}
            <div>Qty: <input type={'number'} value={1} />  <button >Add to cart</button></div>
            <div><p>Specs:</p>
                <ul>
                    {specs.map((spec, index) => { return (<li key={index}>{spec.spec_name}: {spec.spec_value}</li>) })}
                </ul>
            </div>
        </div>


    )



}
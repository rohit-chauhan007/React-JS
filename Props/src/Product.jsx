import './Product.css'
function Product({item,price}){
    return(
        <>
        <div className="Product">
            <h1>Product {item} {price}</h1>
            <h1>Product Title</h1>
        </div>
        </>
    )
}

export {Product};
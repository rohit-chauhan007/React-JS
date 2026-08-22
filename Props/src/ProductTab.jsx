import "./Product.jsx";
import { Product } from "./Product.jsx";
function ProductTab(){
    return (
        <>
        <div className="ProductTab">
            <Product  item="phones" price={300}/>
            <Product />
            <Product />
        </div>

        </>
    )
}

export  {ProductTab};

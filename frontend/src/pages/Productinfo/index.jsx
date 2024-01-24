import { useOneProduct, useId } from "../../hooks"

const ProductInfo = () => {
    const id = useId()
    const product = useOneProduct({ productId: id} )
    console.log('Product rendered: ', product?.data?.data)
    
    return (
        <>
            <h1>One product page</h1>
            <p>{product.data.data[0].product_name}</p>
            <p>{product.data.data[0].description}</p>
            <p>{product.data.data[0].genre}</p>
            <p>{product.data.data[0].quantity}</p>
            <p>{product.data.data[0].score}</p>
            <p>{product.data.data[0].votes_by_customers}</p>
        </>
    )
}

export default ProductInfo
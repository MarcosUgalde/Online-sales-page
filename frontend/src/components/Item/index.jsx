const Item = ({ product }) => {
    return (
        <>
            {product?.product_name} - {product?.quantity}
        </>
    )
}

export default Item
import Styled from './styles'

const Item = ({ product }) => {
    const id = product?.id
    const url = `/product-info/${id}`
    return (
        <Styled.Item>
            <p>{product?.product_name}</p> 
            <p>{product?.quantity} ud disponibles</p>
            <a href={url}>See more</a> 
        </Styled.Item>
    )
}

export default Item
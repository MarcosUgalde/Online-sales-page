import Styled from './styles'

const Item = ({ product }) => {
    return (
        <Styled.Item>
            <p>{product?.product_name}</p> 
            <p>{product?.quantity} ud disponibles</p>
            <a href="">See more</a> 
        </Styled.Item>
    )
}

export default Item
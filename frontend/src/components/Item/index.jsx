import Styled from './styles'

const Item = ({ product }) => {
    return (
        <Styled.Item>
            {product?.product_name} - {product?.quantity}
        </Styled.Item>
    )
}

export default Item
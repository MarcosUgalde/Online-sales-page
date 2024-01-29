import Styled from './styles'

const Rating = () => {
    return (
        <Styled.Rating>
            <p>Do you want to rate this product?</p>
            <select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </Styled.Rating>
    )
}

export default Rating
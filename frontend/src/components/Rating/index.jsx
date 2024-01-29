import Styled from './styles'
import { useForm } from 'react-hook-form'
import { useOneProduct, useRating } from '../../hooks'

const Rating = ({ id }) => {
    
    const { register, handleSubmit } = useForm()
    const product = useOneProduct({ productId: id})
    const votes = product?.data?.data[0]?.votes_by_customers
    console.log('Votes: ', votes)
    const doRating = useRating()

    return (
        <Styled.Rating>
            <p>Do you want to rate this product?</p>
            <form onSubmit={handleSubmit(doRating)}>
                <select name='score' id='score' {...register('score', {required: true})} >
                    <option value='0'>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <input type="hidden" name='votes_by_customers' id='votes_by_customers' {...register('votes_by_customers', {required: true})} defaultValue={votes + 1} />
                <input type="submit" />
            </form>
        </Styled.Rating>
    )
}

export default Rating
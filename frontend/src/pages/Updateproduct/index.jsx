import { useState } from "react"
import { useForm } from "react-hook-form"
import { useId, useOneProduct, useUpdate } from "../../hooks"

const Update = () => {
    const { register, handleSubmit } = useForm()
    const id = useId()
    const product = useOneProduct({ productId: id })
    console.log('product: ', product)
    const doUpdate = useUpdate()

    const [selectedGenre, setSelectedGenre] = useState('')
    const handleGenreSelect = (selectedValue) => {
        setSelectedGenre(selectedValue)
    }
    
    return (
        <>
            <h1>Update product</h1>
            <form onSubmit={handleSubmit(doUpdate)}>
                <input type="hidden" name="productId" id="productId" {...register('productId', {required: true})} value={id} />
                <label htmlFor="product_name">Product name</label>
                <input type="text" name="product_name" id="product_name" {...register('product_name', { required: true })} defaultValue={product?.data?.data[0]?.product_name} />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" {...register('description', { required: true })} defaultValue={product?.data?.data[0]?.description} />
                <label htmlFor="genre">Genre</label>
                <select type="text" name="genre" id="genre" {...register('genre', {required: true})} onChange={(e) => {handleGenreSelect(e.target.value)}} defaultValue={product?.data?.data[0]?.genre} >
                    <option value=""></option>
                    <option value="IT">IT</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Books">Books</option>
                    <option value="TV shows and movies">TV shows and movies</option>
                </select>
                <label htmlFor="quantity">Quantity</label>
                <input type="text" name="quantity" id="quantity" {...register('quantity', { required: true })} defaultValue={product?.data?.data[0]?.quantity}/>
                <input type="submit" />

            </form>
        </>
    )
}

export default Update
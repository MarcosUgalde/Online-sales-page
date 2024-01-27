import { useForm } from "react-hook-form"
import { useInsertion } from "../../hooks"
import { useState } from "react"

const InsertProduct = () => {
    const { register, handleSubmit} = useForm()
    const doInsertion = useInsertion()

    const [selectedGenre, setSelectedGenre] = useState('')
    
    const handleGenreSelect = (selectedValue) => {
        setSelectedGenre(selectedValue)
    }

    return (
        <>
            <h2>Add a new product</h2>
            <form onSubmit={handleSubmit(doInsertion)}>
                <label htmlFor="porduct_name">Product name</label>
                <input type="text" name="porduct_name" id="porduct_name" {...register('product_name', {required: true})} />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" {...register('description', { required: true })} />
                <label htmlFor="genre">Genre</label>
                <select type="text" name="genre" id="genre" {...register('genre', {required: true})} onChange={(e) => {handleGenreSelect(e.target.value)}} >
                    <option value=""></option>
                    <option value="IT">IT</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Books">Books</option>
                    <option value="TV shows and movies">TV shows and movies</option>
                </select>

                <label htmlFor="quantity">Quantity</label>
                <input type="text" name="quantity" id="quantity" {...register('quantity', { required: true })} />
                <input type="submit" />
            </form>
            <footer>Componente de contacto</footer>
        </>
    )
}

export default InsertProduct
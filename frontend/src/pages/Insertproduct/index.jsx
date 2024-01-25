const InsertProduct = () => {
    console.log('Rendered')
    return (
        <>
            <h2>Add a new product</h2>
            <form action="">
                <label htmlFor="porduct_name">Product name</label>
                <input type="text" name="porduct_name" id="porduct_name" />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" />
                <label htmlFor="genre">Genre</label>
                <input type="text" name="genre" id="genre" />
                <label htmlFor="quantity">Quantity</label>
                <input type="text" name="quantity" id="quantity" />
            </form>
            <footer>Componente de contacto</footer>
        </>
    )
}

export default InsertProduct
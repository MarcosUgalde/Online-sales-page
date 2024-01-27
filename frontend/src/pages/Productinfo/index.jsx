import { useOneProduct, useId, useDelete } from "../../hooks"
import DeleteModal from '../../components/DeleteModal'
import { useState } from "react"

const ProductInfo = () => {
    const id = useId()
    const product = useOneProduct({ productId: id} )
    console.log('Product rendered: ', product?.data?.data)
    
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [productIdToDelete, setProductIdToDelete] = useState(null)

    const doDelete = useDelete()

    const openDeleteModal= (id) => {
        setProductIdToDelete(id)
        setIsModalVisible(true)
        return id
    }

    const handleDelete = () => {
        if(productIdToDelete) {
            doDelete(productIdToDelete)
        }
        setIsModalVisible(false)
    }

    return (
        <>
            <h2>{product?.data?.data[0].product_name}</h2>
            <p>Score: {product?.data?.data[0].score} / 5</p>
            <p>Total votes by customers: <b>{product?.data?.data[0].votes_by_customers}</b> </p>
            <section>
                <h4>Description</h4>
                <p><em>{product?.data?.data[0].description}</em></p>
            </section>
            <section>
                <h4>Genre</h4>
                <p>{product?.data?.data[0].genre}</p>
            </section>
            <section>
                <h4>Uds available</h4>
                <p>{product?.data?.data[0].quantity}</p>
            </section>
            <div>
                <button onClick={() => openDeleteModal(id)}>Delete</button>
            </div>
            {isModalVisible && (
                <DeleteModal productId={productIdToDelete} isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} onDelete={handleDelete} />
            )}
        </>
    )
}

export default ProductInfo
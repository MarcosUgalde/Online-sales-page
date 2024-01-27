function DeleteModal({ onClose, onDelete, isVisible }) {
    return (
        <section style={{ display: isVisible ? 'block' : 'none' }}>
            <div>
                <h2>You are about to delete a product</h2>
                <p>Are you sure you want to delete this product?</p>
                <section>
                    <button onClick={onDelete}>Delete</button>
                    <button onClick={onClose}>Cancel</button>
                </section>
            </div>
        </section>
    )
}

export default DeleteModal
import Styled from './styles'

function DeleteModal({ onClose, onDelete, isVisible }) {
    return (
        <Styled.Modal style={{ display: isVisible ? 'block' : 'none' }}>
            <Styled.Text>
                <h2>You are about to delete a product</h2>
                <p>Are you sure you want to delete this product?</p>
                <Styled.Buttons>
                    <Styled.Delete onClick={onDelete}>Delete</Styled.Delete>
                    <Styled.Cancel onClick={onClose}>Cancel</Styled.Cancel>
                </Styled.Buttons>
            </Styled.Text>
        </Styled.Modal>
    )
}

export default DeleteModal
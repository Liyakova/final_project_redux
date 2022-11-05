const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        const newQuantity = quantity - 1;
        if (quantity <= 1) return;
        setQuantity(newQuantity);
    }

    return(
        <div className="quantity">
            <button onClick={removeQuantity} className="quantityBtn">➖</button>
            <span className="quantityAdd">{quantity}</span>
            <button onClick={addQuantity} className="quantityBtn">➕</button>
        </div>
    )
}

export default ChangeQuantity;
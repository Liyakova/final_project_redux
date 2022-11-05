import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart, changeQuantityInCart, getCartItems } from "../../redux/cartSlice";

const Dish = ({dish}) => {

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const cartItems = useSelector(getCartItems);
    const dishInCart = cartItems.some(item => item.id === dish.id);

    const AddToCart = () => {
        if (!dishInCart) {
            dispatch(addItemToCart({dish, quantity}))
        } else {
            dispatch(changeQuantityInCart({dish, quantity}))
        }
    }

    return(
        <div className="dishBlock">
            <img src={`./${dish.img}.jpeg`} alt="dish" className="dishPhoto"/>
            <div className="dishNameBlock">
                <p className="dishName">{dish.name}</p>
                <p className="dishName">{dish.price} ₽</p>
            </div>
            <div className="dishBtn">
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                <button onClick={AddToCart} className="addToCartBtn">Добавить в корзину</button>
            </div>
        </div>
    )
}

export default Dish;
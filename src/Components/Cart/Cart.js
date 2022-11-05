import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    const order = () => {
        alert("Это учебный сайт!")
    }

    return(
        <div className="cart">
                <h2><img className="picBuy" src="https://cdn-icons-png.flaticon.com/512/271/271035.png?w=996&t=st=1667652301~exp=1667652901~hmac=25ce64823f83bf8523762d02d6f48b365f980a59dbf29e5f4a86e5e4cd2cfa3a" alt="cart" />
                Итого к оплате: {totalPrice} руб</h2>
                <button className="btnOrder" onClick={order}>СДЕЛАТЬ ЗАКАЗ</button>
                {/* <h2>Корзина:</h2> */}
                {cartItems.map((cartItem, index) =>
                    (<div key={index}>
                        <CartItem cartItem={cartItem}/>
                    </div>))}
        </div>
    )
}

export default Cart;
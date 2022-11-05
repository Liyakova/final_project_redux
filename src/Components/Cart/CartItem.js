import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import pic from './del.png';

const CartItem = ({cartItem}) => {

    const dispatch = useDispatch(removeItemFromCart);

    return(
            <table>
                <tbody>
                    <tr>
                        <th>{cartItem.name}</th>
                        <td>{cartItem.quantity} шт</td>
                        <td>{cartItem.price * cartItem.quantity} pуб</td>
                        <td>
                            <span onClick={()=>dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                                <img src={pic} width='20px' alt='delete'/>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>    
    )
}

export default CartItem;
import './MessageCart.css';
import { useSelector} from "react-redux";


function MessageCart(props) {

    const cart = useSelector((store) => store.cart);
   
    return (
        <div>
            <div className={`message-cart ${props.clicks && cart.products? '' : 'hidden'}`}> Товар добавлен в корзину</div>
        </div>
    );
}

export default MessageCart;

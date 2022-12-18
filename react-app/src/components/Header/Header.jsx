import { Link } from 'react-router-dom';
import { useSelector} from "react-redux";
import './Header.css';
import logo from './Icon.svg';
import imageHeart from './heart_1.svg';
import imageCart from './food-basket2.svg';
// import Page from '../Page/Page';


function Header(props) {

    const cart = useSelector((store) => store.cart);

    return (
        <header className="heading-background">
            <div className="heading-margin">
                <div className="heading">
                    <div className="heading__name">
                        <div className="heading__logo">
                            <Link to = "/">
                            <img className="heading__logo-img" src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="heading__text">
                            <span className="heading__text_color">Мой</span>Маркет
                        </div>
                    </div>
                    <div className="heading-container">
                        <div className={`cart-number-1 ${cart.products ? '' : 'hidden'}`}>1</div>
                        <div className={`cart-number-2 ${cart.likes ? '' : 'hidden'}`}>1</div>
                        <img className="cart-img-1" src={imageHeart} alt="like" />
                        <img className="cart-img-2" src={imageCart} alt="cart" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

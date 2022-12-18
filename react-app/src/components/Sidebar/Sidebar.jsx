import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { addProducts, addLikes } from "../../cart-reducer.js";
import './Sidebar.css';
import Iframe from '../Iframe/Iframe';
import MessageCart from '../MessageCart/MessageCart';

function Sidebar() {

    const cart = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    const [clicks, setClicks] = useState(0);


    const handleClickProducts = () => {
        dispatch(addProducts());
        setClicks((prevState) => prevState + 1);

    };
    const handleClickLikes = () => dispatch(addLikes());


    return (
        <aside className="sidebar">
                <div className="sidebar-info">
                    <div className="sidebar-info__content">
                        <div className="sidebar-info__price">
                            <div className="sidebar-info__sale">
                                <div className="sidebar-info__container">
                                    <div className="old-price">
                                        75 990₽
                                    </div>
                                    <div className="sale">
                                        -8%
                                    </div>
                                </div>
                                <div onClick={handleClickLikes} className={`sidebar-info__like ${cart.likes === 1 ? 'like_choise' : ''}`}></div>
                            </div>
                            <div className="new-price">67 990₽</div>
                        </div>
                        <div className="delivery">
                            <div className="delivery__text">
                                Самовывоз в четверг, 1 сентября - <b>бесплатно</b>
                            </div>
                            <div className="delivery__text">
                                Курьером в четверг, 1 сентября - <b>бесплатно</b>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleClickProducts} className={`sidebar__button ${cart.products === 1 ? 'choise' : ''}`} >
                        Добавить в корзину
                    </button>
                </div>

                <div className="sidebar-iframe">
                    <div className="sidebar-iframe__name">
                        Реклама
                    </div>

                    <div className="sidebar-iframe__content">
                        <Iframe />
                        <Iframe />
                    </div>
                </div>
            <MessageCart clicks={clicks} />
        </aside>
    );
}

export default Sidebar;

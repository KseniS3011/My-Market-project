import { useState } from 'react';
import './Main.css';
import ProductViewsBlue from '../ProductViews/ProductViewsBlue';
import ProductColor from '../ProductColor/ProductColor';
import ProductConfiguration from '../ProductConfiguration/ProductConfiguration';
import ProductCharacteristics from '../ProductCharacteristics/ProductCharacteristics';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductComparison from '../ProductComparison/ProductComparison';
import Reviews from '../Reviews/Reviews';
import Form from '../Form/Form';
import Sidebar from '../Sidebar/Sidebar';

let characteristicitem = 
    {
        text: 'Apple A15 Bionic',
        link: 'https://ru.wikipedia.org/wiki/Apple_A15',
    };

let colorButtons = [
    {
        src: './color-12.png',
        className: "product-color__img",
        id: 1,
        color: 'Red',
        name: 'красный'
    },
    {
        src: './color-21.png',
        className: "product-color__img",
        id: 2,
        color: 'Green',
        name: 'зеленый'
    },
    {
        src: './color-31.png',
        className: "product-color__img",
        id: 3,
        color: 'Pink',
        name: 'розовый'

    },
    {
        src: './color-41.png',
        className: "product-color__img",
        id: 4,
        color: 'Blue',
        name: 'синий'
    },
    {
        src: './color-51.png',
        className: "product-color__img",
        id: 5,
        color: 'White',
        name: 'белый'
    },
    {
        src: './color-61.png',
        className: "product-color__img",
        id: 6,
        color: 'Black',
        name: 'черный'
    },
];

let configurationButtons = [
    {
        text: '128 ГБ',
        className: "product-configuration__button",
        id: 1
    },
    {
        text: '256 ГБ',
        className: "product-configuration__button",
        id: 2
    },
    {
        text: '512 ГБ',
        className: "product-configuration__button",
        id: 3
    },
];

let reviewItems = [
    {
        name: 'Марк Г.',
        src: './Mark.svg',
        experience: 'менее месяца',
        pluses: `это мой первый айфон после огромного количества телефонов на андроиде. всё
        плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая,
        ширик тоже на высоте.`,
        minuses: `к самому устройству мало имеет отношение, но перенос данных с андроида - адская
        вещь) а если нужно переносить фото с компа, то это только через itunes, который
        урезает качество фотографий исходное`,
        id: 1
    },
    {
        name: 'Валерий Коваленко',
        src: './Valery.svg',
        experience: 'менее месяца',
        pluses: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,
        minuses: `Плохая ремонтопригодность`,
        id: 2
    },
];

let raiting = [
    ['star1', 'star1', 'star1', 'star1', 'star1'],
    ['star2', 'star1', 'star1', 'star1', 'star1']
];


function Main(props) {

    const [colorActive, setColorActive] = useState(localStorage.getItem('colorChoise') || 'Blue');
    const handleClickColor = (color) => setColorActive(color);
    localStorage.setItem('colorChoise', colorActive);

    return (
        <div>

            <ProductViewsBlue buttons={colorButtons} colorActive={colorActive} />

            <div className="product-container">
                <div className="product-information">

                    <ProductColor buttons={colorButtons} handleClickColor={handleClickColor} colorActive={colorActive} />
                    <ProductConfiguration buttons={configurationButtons} />
                    <ProductCharacteristics item={characteristicitem} />
                    <ProductDescription />
                    <ProductComparison />

                    <section className="reviews-container">

                        <Reviews item={reviewItems} raiting={raiting} />

                        <Form />

                    </section>
                </div>

                <Sidebar />
                

            </div>
        </div>
    );
}

export default Main;
import './ProductCharacteristics.css';
import Link from '../Link/Link';


function ProductCharacteristics(props) {
    let { item } = props;

    return (
        <div>
            <section className="product-characteristics">
                <div className="product-characteristics__name">
                    <h3 className="characteristics-name">Характеристики товара</h3>
                </div>

                <ul className="product-characteristics__list">
                    <li> Экран: <b>6.1</b></li>
                    <li> Встроенная память: <b>128 ГБ</b></li>
                    <li> Операционная система: <b>iOS 15</b></li>
                    <li> Беспроводные интерфейсы: <b>NFC, Bluetooth, Wi-Fi</b></li>
                    <li>
                        <div className="characteristic-item">
                            Процессор:
                            <strong>
                                <Link text={item.text} link={item.link} />
                            </strong>
                            <br />
                        </div>
                    </li>
                    <li> Вес: <b>173 г</b> </li>
                </ul>
            </section>
        </div>
    );
}

export default ProductCharacteristics;







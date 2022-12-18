import './ProductColor.css';
import ColorButton from './ColorButton';

function ProductColor(props) {

    const { buttons, colorActive, handleClickColor } = props
    const buttonsFilter = buttons.filter((value) => value.color === colorActive);
    const button = buttonsFilter[0];

    return (
        <div>
            <section className="product-color">
                <div className="product-color__name">
                    <h3
                        className="color-name">Цвет товара:
                        {' '}
                        {button?.name}
                    </h3>
                </div>

                <div className="product-color__images">
                    {
                        buttons.map((item) => {

                            return (

                                <div onClick={() => handleClickColor(item.color)} key={item.color}>

                                    <ColorButton
                                        item={item}
                                        isActive={item.color === colorActive}
                                    />

                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </div>
    );
}

export default ProductColor;







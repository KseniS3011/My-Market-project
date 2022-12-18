import { useState } from 'react';
import './ProductConfiguration.css';
import ConfigurationButton from './ConfigurationButton';



function ProductConfiguration(props) {
    const { buttons } = props
    const [idActive, setIdActive] = useState(localStorage.getItem('configChoise')||'128 ГБ');
    const handleClick = (text) => setIdActive(text);
    localStorage.setItem('configChoise', idActive);

    return (
        <div>
            <section className="product-configuration">



                <div className="product-configuration__name">
                    <h3 className="name">Конфигурация памяти:
                        {' '}
                        {idActive}
                    </h3>
                </div>

                <div className="product-configuration__buttons">
                    {
                        buttons.map((item) =>

                            <div onClick={() => handleClick(item.text)} key={item.text}>
                                <ConfigurationButton
                                    item={item}
                                    isActive={item.text === idActive}
                                />
                            </div>
                        )
                    }
                </div>
            </section>
        </div>
    );
}

export default ProductConfiguration;






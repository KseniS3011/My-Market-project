import './ProductComparison.css';


function ProductComparison() {
    return (
        <div>
            <section className="product-comparison">
                        <div className="product-comparison__name">
                            <h3 className="comparison-name">Сравнение моделей</h3>
                        </div>
                        <div className="product-comparison__table">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th className="table-head">Модель</th>
                                        <th className="table-head">Вес</th>
                                        <th className="table-head">Высота</th>
                                        <th className="table-head">Ширина</th>
                                        <th className="table-head">Толщина</th>
                                        <th className="table-head">Чип</th>
                                        <th className="table-head">Объем памяти</th>
                                        <th className="table-head">Аккумулятор</th>
                                    </tr>
                                </thead>
                                <tbody className="table_selection">
                                    <tr>
                                        <td className="table-body">Iphone 11</td>
                                        <td className="table-body">194 грамма</td>
                                        <td className="table-body">150.9 мм</td>
                                        <td className="table-body">75.7 мм</td>
                                        <td className="table-body">8.3 мм</td>
                                        <td className="table-body">A13 Bionic chip</td>
                                        <td className="table-body">До 128 Гб</td>
                                        <td className="table-body">До 17 часов</td>
                                    </tr>
                                </tbody>
                                <tbody className="table_selection">
                                    <tr>
                                        <td className="table-body">Iphone 12</td>
                                        <td className="table-body">164 грамма</td>
                                        <td className="table-body">146.7 мм</td>
                                        <td className="table-body">71.5 мм</td>
                                        <td className="table-body">7.4 мм</td>
                                        <td className="table-body">A14 Bionic chip</td>
                                        <td className="table-body">До 256 Гб</td>
                                        <td className="table-body">До 19 часов</td>
                                    </tr>
                                </tbody>
                                <tbody className="table_selection">
                                    <tr>
                                        <td className="table-body">Iphone 13</td>
                                        <td className="table-body">174 грамма</td>
                                        <td className="table-body">146.7 мм</td>
                                        <td className="table-body">71.5 мм</td>
                                        <td className="table-body">7.65 мм</td>
                                        <td className="table-body">A15 Bionic chip</td>
                                        <td className="table-body">До 512 Гб</td>
                                        <td className="table-body">До 19 часов</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
        </div>
    );
}

export default ProductComparison;

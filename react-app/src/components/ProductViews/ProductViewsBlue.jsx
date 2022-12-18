import './ProductViewsBlue.css';

function ProductViewsBlue(props) {
    const {buttons, colorActive} = props;

    const buttonsFilter = buttons.filter((value) => value.color === colorActive);
    const button = buttonsFilter[0];
   
    return (
        <div>
            <h2 className="views-name">
                Смартфон Apple iPhone 13 {' '}{button?.name}
            </h2>
            <section className="images-views">
                {
                    [1,2,3,4,5].map((value) => 
                    <img className="images-views__photo" src={`./images/color/${colorActive ? colorActive + value : value}.png`} alt="View of product" key={value}/>)
                }
            </section>
        </div>
    );
}

export default ProductViewsBlue;







import './ColorButton.css';


function ColorButton(props) {

    const { item, isActive } = props;

    return (
        <div>
            
                    
            <div className={`product-color__img ${isActive ? 'selected' : ''}`}>

                <img className="img-button" src={item.src} alt="Color of product" />

            </div>
           
         


        </div>


    );
}

export default ColorButton;

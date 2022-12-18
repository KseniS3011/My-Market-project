import './ConfigurationButton.css';


function ConfigurationButton(props) {

    const { item, isActive } = props;
    
    return (
        <div >
            <button className={`product-configuration__button ${isActive ? 'selected' : ''}`}>{item.text}</button>
        </div>
    );
}

export default ConfigurationButton;
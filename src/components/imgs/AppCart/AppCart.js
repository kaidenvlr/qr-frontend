import cart from '../../../assets/svgs/cart.svg';
import './AppCart.scss';

function AppCart({height, width} ) {
    return (
        <img src={cart} className="AppCart-icon" alt="cart" width={width} height={height}/>
    );
}

export default AppCart;

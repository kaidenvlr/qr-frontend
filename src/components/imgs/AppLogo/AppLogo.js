import logo from '../../../../src/assets/svgs/logo.svg';
import './AppLogo.css';

function AppLogo({height, width} ) {
    return (
        <img src={logo} className="AppLogo-logo" alt="logo" width={width} height={height}/>
    );
}

export default AppLogo;

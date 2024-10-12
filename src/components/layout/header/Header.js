import './Header.scss';
import AppLogo from "../../imgs/AppLogo/AppLogo";
import AppFavorite from "../../imgs/AppFavorite/AppFavorite";
import AppCart from "../../imgs/AppCart/AppCart";

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__content">
                    <div className="header__logo">
                        <AppLogo height="50" width="50"/>
                    </div>
                    <div className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <a href="/" className="header__nav-link">Новинки</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="/" className="header__nav-link">Магазин</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="/" className="header__nav-link">Лукбук</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="/" className="header__nav-link">Гифтбокс</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="/" className="header__nav-link">Скидки</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="/" className="header__nav-link">Сторы</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="/" className="header__nav-link">QR-91</a>
                            </li>
                        </ul>
                    </div>
                    <div className="header__utils">
                        <div className="header__search">
                            <input type="text" className="header__search-input" placeholder="Поиск"/>
                        </div>
                        <div className="header__favorite">
                            <a href="/" className="header__favorite-link">
                                <AppFavorite height="20" width="20"/>
                            </a>
                        </div>
                        <div className="header__cart">
                            <a href="/" className="header__cart-link">
                                <AppCart height="20" width="20"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
import './Layout.scss';
import Banner from "../ui/banner/Banner";
import Trends from "../ui/sections/trends/Trends";
import QRBox from "../ui/sections/qr_box/QRBox";

function Layout() {
    return (
        <div className="layout">
            <Banner/>
            <Trends />
            <QRBox />
        </div>
    )
}

export default Layout;
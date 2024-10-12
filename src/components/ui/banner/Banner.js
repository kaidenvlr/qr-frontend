import image from "../../../assets/images/model.png";
import "./Banner.scss";

function Banner() {
    return (<div className="layout__banner">
        <div className="layout__banner-content">
            <div className="layout__banner-text">
                <span className="layout__banner-text-default">Получи</span>
                <br/>
                <span className="layout__banner-text-title">новую коллекцию</span>
                <br/>
                <span className="layout__banner-text-default">этого сезона</span>
            </div>
            <div className="layout__banner-image">
                <img src={image} className="layout__banner-image-photo" alt="banner" height="500px"/>
            </div>
        </div>
    </div>)
}

export default Banner;
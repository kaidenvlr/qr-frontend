import gallery_1 from "../../../assets/images/gallery-1.png"
import gallery_2 from "../../../assets/images/gallery-2.png"
import gallery_3 from "../../../assets/images/gallery-3.png"
import gallery_4 from "../../../assets/images/gallery-4.png"
import gallery_5 from "../../../assets/images/gallery-5.png"
import gallery_6 from "../../../assets/images/gallery-6.png"
import gallery_7 from "../../../assets/images/gallery-7.png"
import gallery_8 from "../../../assets/images/gallery-8.png"
import gallery_9 from "../../../assets/images/gallery-9.png"
import gallery_10 from "../../../assets/images/gallery-10.png"
import gallery_11 from "../../../assets/images/gallery-11.png"

import "./Gallery.scss"

function Gallery() {
    return (
        <div className="gallery">
            <div className="gallery__content">
                <div className="gallery__row">
                    <div className="gallery__item gallery__item-1" width="100%">
                        <img src={gallery_1} alt=""/>
                    </div>
                </div>
                <div className="gallery__row">
                    <div className="gallery__item gallery__item-2">
                        <img src={gallery_2} alt=""/>
                    </div>
                    <div className="gallery__item gallery__item-2">
                        <img src={gallery_3} alt=""/>
                    </div>
                </div>
                <div className="gallery__row">
                    <div className="gallery__item gallery__item-2">
                        <img src={gallery_4} alt=""/>
                    </div>
                    <div className="gallery__item gallery__item-2">
                        <img src={gallery_5} alt=""/>
                    </div>
                </div>
                <div className="gallery__row">
                    <div className="gallery__item gallery__item-3">
                        <img src={gallery_6} alt=""/>
                    </div>
                    <div className="gallery__item gallery__item-3">
                        <img src={gallery_7} alt=""/>
                    </div>
                    <div className="gallery__item gallery__item-3">
                        <img src={gallery_8} alt=""/>
                    </div>
                </div>
                <div className="gallery__row">
                    <div className="gallery__item gallery__item-2">
                        <img src={gallery_9} alt=""/>
                    </div>
                    <div className="gallery__item gallery__item-2">
                        <img src={gallery_10} alt=""/>
                    </div>
                </div>
                <div className="gallery__row">
                    <div className="gallery__item gallery__item-1">
                        <img src={gallery_11} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
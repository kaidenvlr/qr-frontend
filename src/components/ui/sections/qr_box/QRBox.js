import "../Section.scss";

import qrbox_1 from "../../../../assets/images/qrbox-1.png";
import qrbox_2 from "../../../../assets/images/qrbox-2.png";
import qrbox_3 from "../../../../assets/images/qrbox-3.png";

function QRBox() {
    return (
        <div className="layout__section">
            <div className="layout__section-content">
                <div className="layout__section-title">
                    <span className="layout__section-title-text">
                        QR Box
                    </span>
                </div>
                <div className="layout__section-description">
                    <span className="layout__section-description-text">
                        Собери подарок для любимых!
                    </span>
                </div>
                <div className="layout__section-trends">
                    <div className="layout__section-trend">
                        <div className="layout__section-trend-image">
                            <img src={qrbox_1} alt="trend" width="450"/>
                        </div>
                    </div>
                    <div className="layout__section-trend">
                        <div className="layout__section-trend-image">
                            <img src={qrbox_2} alt="trend" width="450"/>
                        </div>
                    </div>
                    <div className="layout__section-trend">
                        <div className="layout__section-trend-image">
                            <img src={qrbox_3} alt="trend" width="450"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QRBox;
import "../Section.scss";

import trends_1 from "../../../../assets/images/trends-1.png";
import trends_2 from "../../../../assets/images/trends-2.png";
import trends_3 from "../../../../assets/images/trends-3.png";

function Trends() {
    return (
        <div className="layout__section">
            <div className="layout__section-content">
                <div className="layout__section-title">
                    <span className="layout__section-title-text">
                        Сейчас в тренде
                    </span>
                </div>
                <div className="layout__section-trends">
                    <div className="layout__section-trend">
                        <div className="layout__section-trend-image">
                            <img src={trends_1} alt="trend" width="450"/>
                        </div>
                        <div className="layout__section-trend-title">
                            <span className="layout__section-trend-title-text">
                                Fleece
                            </span>
                            <span className="layout__section-trend-title-text">
                                22000 Тг
                            </span>
                        </div>
                        <div className="layout__section-trend-description">
                            <span className="layout__section-trend-description-text">
                                Флизовая куртка унисекс
                            </span>
                        </div>
                    </div>
                    <div className="layout__section-trend">
                        <div className="layout__section-trend-image">
                            <img src={trends_2} alt="trend"  width="450"/>
                        </div>
                        <div className="layout__section-trend-title">
                            <span className="layout__section-trend-title-text">
                                Búrjeide
                            </span>
                            <span className="layout__section-trend-title-text">
                                18000 Тг
                            </span>
                        </div>
                        <div className="layout__section-trend-description">
                            <span className="layout__section-trend-description-text">
                                Худи унисекс
                            </span>
                        </div>
                    </div>
                    <div className="layout__section-trend">
                        <div className="layout__section-trend-image">
                            <img src={trends_3} alt="trend" width="450"/>
                        </div>
                        <div className="layout__section-trend-title">
                            <span className="layout__section-trend-title-text">
                                Jeide
                            </span>
                            <span className="layout__section-trend-title-text">
                                7500 Тг
                            </span>
                        </div>
                        <div className="layout__section-trend-description">
                            <span className="layout__section-trend-description-text">
                                Футболка Regular
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trends;
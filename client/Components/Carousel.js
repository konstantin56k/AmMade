import React, {useState} from "react";
import amanaBanner from "../../public/icons/amana_banner.jpg";
import hafeleBanner from "../../public/icons/hafele_banner.jpg";
import richelieuBanner from "../../public/icons/richelieu_banner.jpg";


const vendorImages = [amanaBanner, hafeleBanner, richelieuBanner]

function Carousel() {

    const [currentImgIdx, setCurrentImgIdx] = useState(2)

    return (
        <div className="carousel">
            <div className="carousel_inner"
                style={{backgroundImage: `url(${vendorImages[currentImgIdx]})`}}
            >
            </div>
        </div>
    );
};

export default Carousel;
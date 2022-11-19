import React from "react";
import PhotoModal from "../Modals/PhotoModal";


const Residence = () => {
    return (
    <div className="grid-gallery residence">
        <PhotoModal className="gallery__item gallery__item--1">
            <img src="images/residence/residence_003.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
        </PhotoModal>
        <PhotoModal className="gallery__item gallery__item--2">
            <img src="images/residence/residence_005.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
        </PhotoModal>
        <PhotoModal className="gallery__item gallery__item--3">
            <img src="images/residence/residence_006.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
        </PhotoModal>
        <PhotoModal className="gallery__item gallery__item--4">
            <img src="images/residence/residence_004.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
        </PhotoModal>
        <PhotoModal className="gallery__item gallery__item--5">
            <img src="images/residence/residence_008.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
        </PhotoModal>
        <PhotoModal className="gallery__item gallery__item--6">
            <img src="images/residence/residence_007.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
        </PhotoModal>
        <PhotoModal className="gallery__item gallery__item--7">
            <img src="images/residence/residence_001.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
        </PhotoModal>
        <PhotoModal className="gallery__item gallery__item--8">
            <img src="images/residence/residence_002.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
        </PhotoModal>
        <PhotoModal className="gallery__item gallery__item--9">
            <img src="images/residence/residence_009.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
        </PhotoModal>
    </div>
    )
}

export default Residence;
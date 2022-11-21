import React from "react";
import PhotoModal from "../../Modals/PhotoModal";

const Hotel1 = () => {
   return (
   <React.Fragment>
   <div className="grid-gallery hotel">
      <PhotoModal className="gallery__item gallery__item--1">
         <img src="images/hotel/hotel_006.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
      </PhotoModal>
      {/* <PhotoModal className="gallery__item gallery__item--1">
         <img src="images/hotel/hotel_006.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
      </PhotoModal> */}
      <PhotoModal className="gallery__item gallery__item--2">
         <img src="images/hotel/hotel_005.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
      </PhotoModal>
      <PhotoModal className="gallery__item gallery__item--3">
         <img src="images/hotel/hotel_003.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
      </PhotoModal>
      <PhotoModal className="gallery__item gallery__item--4">
         <img src="images/hotel/hotel_007.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
      </PhotoModal>
      <PhotoModal className="gallery__item gallery__item--5">
         <img src="images/hotel/hotel_002.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
      </PhotoModal>
      <PhotoModal className="gallery__item gallery__item--6">
         <img src="images/hotel/hotel_008.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
      </PhotoModal>
      <PhotoModal className="gallery__item gallery__item--7">
         <img src="images/hotel/hotel_004.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
      </PhotoModal>
      <PhotoModal className="gallery__item gallery__item--8">
         <img src="images/hotel/hotel_009.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
      </PhotoModal>
      <PhotoModal className="gallery__item gallery__item--9">
         <img src="images/hotel/hotel_001.jpg" className="gallery__img" alt="Terrat Design - Hotel Interior" />
      </PhotoModal>
   </div>
   </React.Fragment>
   )
}

export default Hotel1;

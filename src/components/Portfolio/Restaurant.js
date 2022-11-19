import React from "react";
import PhotoModal from "../Modals/PhotoModal";


const Restaurant = () => {
   return (
   <div className="grid-gallery restaurant">
      <PhotoModal className="gallery__item gallery__item--1">
         <img src="images/restaurant/restaurant_005.jpg" className="gallery__img" alt="Terrat Design - Restaurant Interior" />
      </PhotoModal>
      <PhotoModal className="gallery__item gallery__item--2">
         <img src="images/restaurant/restaurant_002.png" className="gallery__img" alt="Terrat Design - Restaurant Interior" />
      </PhotoModal>
      <PhotoModal className="gallery__item gallery__item--3">
         <img src="images/restaurant/restaurant_007.jpg" className="gallery__img" alt="Terrat Design - Restaurant Interior" />
      </PhotoModal>
      <PhotoModal className="gallery__item gallery__item--4">
         <img src="images/restaurant/restaurant_006.jpg" className="gallery__img" alt="Terrat Design - Restaurant Interior" />
      </PhotoModal>
      <PhotoModal className="gallery__item gallery__item--5">
         <img src="images/restaurant/restaurant_001.png" className="gallery__img" alt="Terrat Design - Restaurant Interior" />
      </PhotoModal>
      <PhotoModal className="gallery__item gallery__item--6">
         <img src="images/restaurant/restaurant_003.png" className="gallery__img" alt="Terrat Design - Restaurant Interior" />
      </PhotoModal>
      <PhotoModal className="gallery__item gallery__item--7">
         <img src="images/restaurant/restaurant_004.jpg" className="gallery__img" alt="Terrat Design - Restaurant Interior" />
      </PhotoModal>
   </div>
   )
}

export default Restaurant;

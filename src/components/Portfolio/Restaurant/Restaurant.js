import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Restaurant1 from "./Restaurant1";
import Restaurant2 from "./Restaurant2";

const Restaurant = () => {
   return (  
      <React.Fragment>
         <Carousel>
            <Carousel.Item>
                <Restaurant1 />
            </Carousel.Item>
            <Carousel.Item>
                <Restaurant2 />
            </Carousel.Item>
         </Carousel>
      </React.Fragment>
   )
}
export default Restaurant;

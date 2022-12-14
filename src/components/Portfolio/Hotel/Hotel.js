import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Helmet } from "react-helmet";
import Hotel1 from "./Hotel1";
import Hotel2 from "./Hotel2";
import Hotel3 from "./Hotel3";

const Hotel = () => {
   return (  
      <React.Fragment>
         <Helmet>
            <title>Terrat Design | Hotel Design</title>
            <meta name="description" content="Terrat Design - Hotel Interior Design" />
            <meta name="keywords" content="Andrew Terrat, Hotel Design, Interiors" />
         </Helmet>        
         <Carousel>
            <Carousel.Item>
               <Hotel1 />
            </Carousel.Item>
            <Carousel.Item>
               <Hotel2 />
            </Carousel.Item>
            <Carousel.Item>
               <Hotel3 />
            </Carousel.Item>
         </Carousel>
      </React.Fragment>
   )
}
export default Hotel;

import React from "react";
import { Helmet } from "react-helmet";
import Carousel from 'react-bootstrap/Carousel';
import Restaurant1 from "./Restaurant1";
import Restaurant2 from "./Restaurant2";

const Restaurant = () => {
   return (  
      <React.Fragment>
         <Helmet>
            <title>Terrat Design | Residential Design</title>
            <meta name="description" content="Terrat Design - Restaurant Interior Design" />
            <meta name="keywords" content="Andrew Terrat, Restaurant Design, Restaurant Interiors, Modern Design" />
         </Helmet>        
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

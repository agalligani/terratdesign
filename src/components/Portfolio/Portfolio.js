import React from "react";
import Hotel from "./Hotel/Hotel";
import Hotel1 from "./Hotel/Hotel1";
import Hotel2 from "./Hotel/Hotel2";
import Hotel3 from "./Hotel/Hotel3";
import Restaurant from "./Restaurant/Restaurant";
import Restaurant2 from "./Restaurant/Restaurant2";
import Residence from "./Residence/Residence";
import Residence1 from "./Residence/Residence1";
import Residence2 from "./Residence/Residence2";
import Residence3 from "./Residence/Residence3";
import Residence4 from "./Residence/Residence4";
import Residence5 from "./Residence/Residence5";
import Carousel from 'react-bootstrap/Carousel';

import PhotoModal from "../Modals/PhotoModal";
 
class Portfolio extends React.Component {

   render() {
      let component = <Hotel />
      switch (this.props.id){
         case "Carousel":
//            component = <Hotel />
            component = <Carousel>
               <Carousel.Item>
                  <Hotel />
               </Carousel.Item>
               <Carousel.Item>
                  <Hotel2 />
               </Carousel.Item>
               <Carousel.Item>
                  <Hotel3 />
               </Carousel.Item>
               <Carousel.Item>
                  <Restaurant />
               </Carousel.Item>
               <Carousel.Item>
                  <Restaurant2 />
               </Carousel.Item>
               <Carousel.Item>
                  <Residence />
               </Carousel.Item>
               <Carousel.Item>
                  <Residence2 />
               </Carousel.Item>
            </Carousel>         
         break;
         case "Hotel":
            component = <Hotel />
         break;
         case "Hotel2":
            component = <Hotel2 />  
         break;
         case "Hotel3":
            component = <Hotel3 />  
         break;
         case "Residential":
            component = <Residence />  
         break;
         case "Residential2":
            component = <Residence2 />  
         break;
         case "Residential3":
            component = <Residence3 />  
         break;
         case "Residential4":
            component = <Residence4 />  
         break;
         case "Residential5":
            component = <Residence5 />  
         break;
         case "Restaurant":
            component = <Restaurant />
         break;
         case "Restaurant2":
            component = <Restaurant2 />
         break;
      }
      
      return component;
   }
}


export default Portfolio;


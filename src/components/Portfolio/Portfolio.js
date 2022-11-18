import React from "react";
import Hotel from "./Hotel";
import Hotel2 from "./Hotel2";
import Hotel3 from "./Hotel3";
import Restaurant from "./Restaurant";
import Restaurant2 from "./Restaurant2";
import Residence from "./Residence";
import Residence2 from "./Residence2";
import Residence3 from "./Residence3";
import Residence4 from "./Residence4";
import Residence5 from "./Residence5";
import Carousel from 'react-bootstrap/Carousel';

import PhotoModal from "../Modals/PhotoModal";

const Residential = () => {
    return (
      <Residence />
    )
 }
 
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


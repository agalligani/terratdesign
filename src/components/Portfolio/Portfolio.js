import React from "react";
import Hotel from "./Hotel";
import Restaurant from "./Restaurant";
import Restaurant2 from "./Restaurant2";
import Residence from "./Residence";
import {Container} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

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
                  <Restaurant2 />
               </Carousel.Item>
               <Carousel.Item>
                  <Hotel />
               </Carousel.Item>
               <Carousel.Item>
                  <Restaurant />
               </Carousel.Item>
               <Carousel.Item>
                  <Residence />
               </Carousel.Item>
            </Carousel>         
         break;
         case "Residential":
            component = <Residence />  
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


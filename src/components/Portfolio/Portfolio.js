import React from "react";
import Hotel from "./Hotel";
import Restaurant from "./Restaurant";
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
                  <Residence />
               </Carousel.Item>
               <Carousel.Item>
                  <Hotel />
               </Carousel.Item>
               <Carousel.Item>
                  <Hotel />
               </Carousel.Item>
            </Carousel>         
         break;
         case "Residential":
            component = <Residence />  
         break;
         case "Restaurant":
            component = <Restaurant />
         break;
      }
      
      return <Container>{component}</Container>;
   }
}


export default Portfolio;


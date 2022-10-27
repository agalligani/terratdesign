import React from "react";
import Hotel from "./Hotel";
import Restaurant from "./Restaurant";
import Residence from "./Residence";
import {Container} from "react-bootstrap";

const Residential = () => {
    return (
      <Residence />
    )
 }
 
class Portfolio extends React.Component {

   render() {
      let component = <Hotel />
      switch (this.props.id){
         case "Hotel":
            component = <Hotel />
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


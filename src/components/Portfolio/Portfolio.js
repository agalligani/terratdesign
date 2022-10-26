import React from "react";
import Hotel from "./Hotel";
import {Container} from "react-bootstrap";

const Restaurant = () => {
    return (
      <React.Fragment>
      <h1>Restaurant</h1>
      <ul className="mondrianGrid">
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
      </ul>
      </React.Fragment>
    )
 }

const Residential = () => {
    return (
      <React.Fragment>
      <h1>Residential</h1>
      <ul className="mondrianGrid">
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
      </ul>
      </React.Fragment>
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
            component = <Residential />  
         break;
         case "Restaurant":
            component = <Restaurant />  
         break;
      }
      
      return <Container>{component}</Container>;
   }
}


export default Portfolio;


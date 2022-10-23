import React from "react";
import "./Portfolio.scss";
import {useParams} from "react-router-dom";

const Hotel = () => {
   return (
   <React.Fragment>
      <h1>Hotel</h1>
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

      return component;
   }
}


export default Portfolio;


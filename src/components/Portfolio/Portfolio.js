import React from "react";
import {useParams} from "react-router-dom";

const Hotel = () => {
   return (
    <h1>Hotel</h1>
   )
}

const Restaurant = () => {
    return (
     <h1>Restaurant</h1>
    )
 }

const Residential = () => {
    return (
     <h1>Residential</h1>
    )
 }
 
class Portfolio extends React.Component {

   render() {
    return <h1>id: {this.props.id}</h1>
   }
}


export default Portfolio;


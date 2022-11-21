import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Residence1 from "./Residence1";
import Residence2 from "./Residence2";
import Residence3 from "./Residence3";
import Residence4 from "./Residence4";
import Residence5 from "./Residence5";

const Residence = () => {
    return (  
       <React.Fragment>
          <Carousel>
             <Carousel.Item>
                <Residence1 />
             </Carousel.Item>
             <Carousel.Item>
                <Residence2 />
             </Carousel.Item>
             <Carousel.Item>
                <Residence3 />
             </Carousel.Item>
             <Carousel.Item>
                <Residence4 />
             </Carousel.Item>
             <Carousel.Item>
                <Residence5 />
             </Carousel.Item>
          </Carousel>
       </React.Fragment>
    )
 }
 

export default Residence;
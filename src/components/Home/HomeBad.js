import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Home = () => { 

    return (
    <Container className="main">
        <ul className="main-menu">
            <li className="menu-item hotel text-center">
                <a href="#/portfolio/hotel">
                    <h3>Hotel</h3>
                    <img src="/images/menu/menu_001.jpg" alt="Terrat Designs - Hotel Interiors"></img>
                </a>
           </li>
            <li className="menu-item restaurant text-center">
                <a href="#/portfolio/restaurant">
                    <h3>Restaurant</h3>
                    <img src="/images/menu/menu_002.jpg" alt="Terrat Designs - Restaurant Interiors"></img>
                </a>
            </li>
            <li className="menu-item residential text-center">
                <a href="#/portfolio/residential">
                    <h3>Residential</h3>
                    <img src="/images/menu/menu_003.jpg" alt="Terrat Designs - Residential Interiors"></img>
                </a>
            </li>
        </ul>
    </Container>
    );
}

export default Home;
    

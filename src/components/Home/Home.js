import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Home = () => { 

    return (
    <React.Fragment>        
    <Container className="main">
        <Row className="home-row">
            <Col className="home-column hotel text-center">
                <a href="#/portfolio/hotel">
                    <h3><span className="redred">HOT</span>EL</h3>
                    <img src="/images/menu/menu_001.jpg" alt="Terrat Designs - Hotel Interiors"></img>
                </a>
           </Col>
            <Col className="home-column restaurant text-center">
                <a href="#/portfolio/restaurant">
                    <h3><span className="redred">REST</span>AURANT</h3>
                    <img src="/images/menu/menu_002.jpg" alt="Terrat Designs - Restaurant Interiors"></img>
                </a>
            </Col>
            <Col className="home-column residential text-center">
                <a href="#/portfolio/residential">
                    <h3><span className="redred">RESI</span>DENTIAL</h3>
                    <img src="/images/menu/menu_003.jpg" alt="Terrat Designs - Residential Interiors"></img>
                </a>
            </Col>
        </Row>
    </Container>
    </React.Fragment>
    );
}

export default Home;
    

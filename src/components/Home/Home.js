import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Home = () => { 

    return (
    <React.Fragment>        
    <Container className="main">
        <Row className="rows">
            <Col className="columns hotel text-center">
                <h3>Hotel</h3>
                <img src="https://via.placeholder.com/300x440" alt="Terrat Designs - Hotel Interiors"></img>
            </Col>
            <Col className="columns restaurant text-center">
                <h3>Restaurant</h3>
                <img src="https://via.placeholder.com/300x440" alt="Terrat Designs - Restaurant Interiors"></img>
            </Col>
            <Col className="columns residential text-center">
                <h3>Residential</h3>
                <img src="https://via.placeholder.com/300x440" alt="Terrat Designs - Residential Interiors"></img>
            </Col>
        </Row>
    </Container>
    </React.Fragment>
    );
}

export default Home;
    

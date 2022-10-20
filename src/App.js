import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import DesignNav from "./components/Navbar/DesignNav";
import './styles/App.css';

const App = () =>{

    return  (
        <>
            <Container>
                <DesignNav></DesignNav>
            </Container>
            <Container className="main">
                <Row className="rows">
                <Col className="columns hotel text-center">
                    <h3>Hotel</h3>
                    <img src="https://via.placeholder.com/300x440" alt="Hotel"></img>
                </Col>
                <Col className="columns restaurant text-center">
                    <h3>Restaurant</h3>
                    <img src="https://via.placeholder.com/300x440" alt="Restaurant"></img>
                </Col>
                <Col className="columns residential text-center">
                    <h3>Residential</h3>
                    <img src="https://via.placeholder.com/300x440" alt="Residential"></img>
                </Col>
                </Row>
            </Container>
        </>
    )
}

export default App;
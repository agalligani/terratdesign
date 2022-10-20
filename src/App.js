import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import DesignNav from "./components/Navbar/DesignNav";
import './styles/App.css';

const App = () =>{

    return  (
        <div>
            <Container>
                <DesignNav></DesignNav>
            </Container>
            <Container className="main">
                <Row className="rows">
                <Col className="columns hotel">
                    <p className="text-center">
                    <h3>Hotel</h3>
                        <img src="https://via.placeholder.com/300x440" alt="Hotel"></img>
                    </p>
                </Col>
                <Col className="columns restaurant">
                    <p className="text-center">
                    <h3>Restaurant</h3>
                            <img src="https://via.placeholder.com/300x440" alt="Restaurant"></img>
                    </p>
                </Col>
                <Col className="columns residential">
                    <p className="text-center">
                    <h3>Residential</h3>
                        <img src="https://via.placeholder.com/300x440" alt="Residential"></img>
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App;
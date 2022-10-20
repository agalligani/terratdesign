import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import './styles/App.css';

const App = () =>{

    return  (
        <div>
            <Container className="menu">
                <Row className="rows">
                    <Col className="columns hotel">
                        <h3>Hotel</h3>
                    </Col>
                    <Col className="columns hotel">
                        <h3>Restaurant</h3>
                    </Col>
                    <Col className="columns hotel">
                        <h3>Residential</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App;
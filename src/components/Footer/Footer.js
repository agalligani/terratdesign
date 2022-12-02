import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    return (
    <Container>
        <Row>
            <Col className="home-column hotel text-center">
                <h3>TERRAT<span className="redred">DESIGN</span></h3>
                <h6>Copyright © 2022 Terrat Design.</h6><h6>All Rights Reserved. Privacy Policy</h6>           
            </Col>
        </Row>
    </Container>);
}

export default Footer;
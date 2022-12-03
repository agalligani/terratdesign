import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    return (
    <div className="footer-container">
        <Row>
            <Col className="footer-column text-center">
                <h3>TERRAT<span className="redred">DESIGN</span></h3>
                <h6>Copyright © 2022 Terrat Design.</h6><h6>All Rights Reserved. Privacy Policy</h6>           
            </Col>
        </Row>
    </div>);
}

export default Footer;
import React from "react";
import "./style.css"

import {Container, Row, Col } from "react-bootstrap";

function Footer(){
    return(
        <footer id="mainFooter" className="at-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}> 
                     NBA TEAMS
                     
                    </Col>
    
                    <Col className="p-0 d-flex justify-content-end " md="3">
                    Authors: Nick and Rayna
                    </Col>
                </Row>
            </Container>
        </footer>

    );

}

export default Footer;

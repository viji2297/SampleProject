import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Layout_Two() {
  return (
    <div className="bg-custom-bgcolor min-vh-70 d-flex align-items-center">
    <Container>
        <Row className="align-items-center">
            <Col xs={12} md={4}>
            <img src={require('./../assets/IDC_logo.webp')} alt="IDC"                            
             className="img-fluid" 
             style={{ width: '100px', height: 'auto', filter: 'grayscale(100%)' }}
             />
             <h3 className='fs-6 text-gray'>Hexnode is listed as a leader and a major player in IDC MarketScape UEM vendors Assessment Reports 2024</h3>
            </Col>

            <Col xs={12} md={4}>
            <img src={require('./../assets/gartner.webp')} alt="Gartner"                            
             className="img-fluid"              
             style={{ width: '100px', height: 'auto', filter: 'grayscale(100%)' }}
             />
             <h3 className='fs-6 text-gray mt-2'>
                Hexnode was recognized in the 2023 Gartner Market Guide for Unified Endpoint Management Tools.</h3>
            </Col>

            <Col xs={12} md={4}>
            <img src={require('./../assets/forrester.webp')} alt="forrester"                            
             className="img-fluid"
             style={{ width: '100px', height: 'auto', filter: 'grayscale(100%)' }}
             />  
            <h3 className='fs-6 text-gray'>
                Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.</h3>
            </Col>
        </Row>
    </Container>
    </div>
  );
}

export default Layout_Two;
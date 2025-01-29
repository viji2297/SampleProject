import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Layout_One() {
    return (
        <div className="bg-custom-color min-vh-100 d-flex align-items-center">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="text-center order-1 order-md-2">
                        <img
                            src={require('./../assets/banner.webp')}
                            alt="Working Woman"
                            className="img-fluid"
                            style={{ maxWidth: '100%' }}
                        />
                    </Col>
                    <Col xs={12} md={6} className="text-md-start text-center order-2 order-md-1">
                        <h2 className="fs-6 mb-4 text-light">Unified Endpoint Management</h2>
                        <h1 className="fs-2 mb-3 text-white">
                            Gain control and visibility over your endpoints
                        </h1>
                        <p className="fs-5 text-light">
                            Hexnode's UEM solution allows you to simplify endpoint management and free up IT.
                            Focus on the big picture while Hexnode works on the details.
                        </p>
                        <div>
                        <Form>
    <Row className="align-items-center">
        <Col xs={12} md={6}>
            <Form.Control size="lg" type="text" placeholder="Email" />
        </Col>
        <Col xs={12} md={6} className="mt-3 mt-md-0">
            <Button variant="danger" size="lg" className="w-100 w-md-auto">
                LET'S TRY IT OUT
            </Button>
        </Col>
    </Row>
</Form>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Layout_One;

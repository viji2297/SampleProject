import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Layout_Four() {
    return (
        <div className="bg-white min-vh-100 d-flex flex-column position-relative">
            <div className="text-center mt-5">
                <h1
                    className="fs-1 text-black mx-auto"
                    style={{
                        maxWidth: "800px",
                        lineHeight: "1.5",
                    }}
                >
                    Powerful endpoint management, built for the devices you choose
                </h1>
            </div>

            <Container className="mt-5 mb-5 text-md-start">
                <Row className="g-4">
                    <Col xs={12} md={4}>
                        <Card className="h-100  border-0">
                            <Card.Img variant="top" src={require('./../assets/CardImages/Card1.webp')} />
                            <Card.Body>
                                <Card.Title className="fs-2">Zero-touch Enrollment</Card.Title>
                                <Card.Text>
                                    Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <Card className="h-100  border-0">
                            <Card.Img variant="top" src={require('./../assets/CardImages/Card2.webp')} />
                            <Card.Body>
                                <Card.Title className="fs-2">Automation</Card.Title>
                                <Card.Text>
                                    Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <Card className="h-100  border-0">
                            <Card.Img variant="top" src={require('./../assets/CardImages/Card3.webp')} />
                            <Card.Body>
                                <Card.Title className="fs-2">Remote Access Management</Card.Title>
                                <Card.Text>
                                    Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5 g-4">
                    <Col xs={12} md={4}>
                        <Card className="h-100  border-0">
                            <Card.Img variant="top" src={require('./../assets/CardImages/Card4.webp')} />
                            <Card.Body>
                                <Card.Title className="fs-2">Endpoint Security and Compliance</Card.Title>
                                <Card.Text>
                                    Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <Card className="h-100  border-0">
                            <Card.Img variant="top" src={require('./../assets/CardImages/Card5.webp')} />
                            <Card.Body>
                                <Card.Title className="fs-2">Integrations</Card.Title>
                                <Card.Text>
                                    Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4}>
                        <Card className="h-100 border-0">
                            <Card.Img variant="top" src={require('./../assets/CardImages/Card6.webp')} />
                            <Card.Body>
                                <Card.Title className="fs-2">App Management</Card.Title>
                                <Card.Text>
                                    Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Layout_Four;

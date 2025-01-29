import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { handleLinkChange, loginFunction } from '../Common/Common.tsx';

function Header() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);

    return (
        <>
            <Navbar expand="lg" className="bg-body-white p-3 sticky-header">
                <Container fluid>
                    <Navbar.Brand href="#" className="ms-5">
                        <img
                            src={require('./../assets/hexnode.png')}
                            style={{ width: '100px', height: 'auto' }}
                            alt="Hexnode Logo"
                        />
                    </Navbar.Brand>

                    <Button
                        variant="light"
                        className="d-lg-none border-0"
                        onClick={handleShow}
                    >
                        ☰
                    </Button>

                    <Navbar.Collapse id="navbarScroll" className="d-none d-lg-flex">
                        <Nav className="ms-5 me-auto my-2 my-lg-0" navbarScroll>
                            <Nav.Link href="#">Why Hexnode</Nav.Link>
                            <Nav.Link href="#">Features</Nav.Link>
                            <Nav.Link href="#">Platforms</Nav.Link>
                            <Nav.Link href="#">Customers</Nav.Link>
                        </Nav>
                        <Form className="d-flex me-5">
                            <Button variant="danger" size="lg" onClick={handleLinkChange}>
                                14 DAY FREE TRIAL
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end" className="d-lg-none">
                <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
                </Offcanvas.Header>
                <Offcanvas.Body>
                <hr />
                    <Nav className="flex-column">
                        <Nav.Link href="#" onClick={handleClose} className='text-black'>Why Hexnode</Nav.Link>
                        <hr />
                        <Nav.Link href="#" onClick={handleClose} className='text-black'>Features</Nav.Link>
                        <hr />
                        <Nav.Link href="#" onClick={handleClose} className='text-black'>Platforms</Nav.Link>
                        <hr />
                        <Nav.Link href="#" onClick={handleClose} className='text-black'>Customers</Nav.Link>
                    </Nav>
                    <Form className="d-flex mt-3">
                        <Button variant="danger" className="w-100" onClick={handleLinkChange}>
                            14 DAY FREE TRIAL
                        </Button>
                    </Form>
                    <Form className="d-flex mt-3">
                    <Button variant='light' className="w-100" onClick={loginFunction}>
                            Login
                        </Button>
                        </Form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Header;

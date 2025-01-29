import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { handleLinkChange } from "../Common/Common.tsx";


function Layout_Five() {
  const [activeImage, setActiveImage] = useState(require("./../assets/accordionImages/download.webp"));

  const images = {
    "0": require("./../assets/accordionImages/download.webp"),
    "1": require("./../assets/accordionImages/iOS.webp"),
    "2": require("./../assets/accordionImages/macOS.webp"),
    "3": require("./../assets/accordionImages/windows.webp"),
    "4": require("./../assets/accordionImages/tvOS.webp"),
    "5": require("./../assets/accordionImages/fireOS.webp"),
  };

  const handleAccordionChange = (eventKey: any) => {
    console.log("eventKey",eventKey);
    
    if (eventKey && images[eventKey]) {
      setActiveImage(images[eventKey]);
    }
  };
 

  return (
    <div className="bg-light min-vh-100 d-flex flex-column position-relative">
      <div className="text-center mt-5">
        <h1 className="text-black">Multi-platform Endpoint Management</h1>
        <h6 className="mt-4">Devices of varying platforms? Hexnode thrives in a diverse environment.</h6>
      </div>
      <div className="m-5">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="text-center order-1 order-md-1">
              <img
                src={activeImage}
                alt="Platform"
                className="img-fluid"
                style={{ width: "500px",height: "500px",objectFit: "unset" }}
              />
            </Col>
            <Col xs={12} md={6} className="text-md-start text-center order-2 order-md-2">
              <Accordion defaultActiveKey="0" onSelect={(e) =>handleAccordionChange(e)}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <p className="fs-5 fw-bold">Android</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-5">
                      Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance
                      benchmarks and leverage Android Enterprise to its full capabilities.
                    </p>
                    <h5 className="text-danger cursor-pointer" onClick={handleLinkChange}>Try Hexnode on your endpoints</h5>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <p className="fs-5 fw-bold">iOS</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-5">
                      Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM
                      integration, deploy devices and apps with ease.
                    </p>
                    <h5 className="text-danger cursor-pointer" onClick={handleLinkChange}>Try Hexnode on your endpoints</h5>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <p className="fs-5 fw-bold">macOS</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-5">
                      Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage
                      macOS devices in bulk with Hexnode UEM.
                    </p>
                    <h5 className="text-danger cursor-pointer" onClick={handleLinkChange}>Try Hexnode on your endpoints</h5>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <p className="fs-5 fw-bold">Windows</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-5">
                      Spearhead modern PC management in your organization with Hexnode. Set limits and monitor PC health
                      and compliance remotely with Hexnode UEM.
                    </p>
                    <h5 className="text-danger cursor-pointer" onClick={handleLinkChange}>Try Hexnode on your endpoints</h5>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <p className="fs-5 fw-bold">tvOS</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-5">
                      Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom
                      messages on tvOS devices with Hexnode UEM.
                    </p>
                    <h5 className="text-danger cursor-pointer" onClick={handleLinkChange}>Try Hexnode on your endpoints</h5>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <p className="fs-5 fw-bold">FireOS</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-5">
                      Enroll Amazon Fire tablets, phones, and e-readers in Hexnode UEM to manage them all from a single
                      console.
                    </p>
                    <h5 className="text-danger cursor-pointer" onClick={handleLinkChange}>Try Hexnode on your endpoints</h5>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Layout_Five;

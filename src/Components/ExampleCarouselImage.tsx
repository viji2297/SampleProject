import React from "react";
import { Row, Col } from "react-bootstrap";

function ExampleCarouselImage({ imageSrc, feedback, customerName, designation }) {
  return (
    <div className="d-flex align-items-center p-4">
      <Row className="w-100">
        <Col xs={12} md={4} className="text-center">
          <img
            src={imageSrc}
            alt={customerName}
            className="img-fluid"  
            style={{
              width: "250px",  
              height: "250px", 
              objectFit: "cover", 
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Col>

        <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
          <div className="mt-5">
            <p
              className="text-start fs-4 fw-light"
              style={{ fontStyle: "italic", color: "black" }}
            >
              "{feedback}"
            </p>
          </div>

          <div className="text-start">
            <h5 className="fw-bold mb-0">{customerName}</h5>
            <p className="text-muted mb-0">{designation}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ExampleCarouselImage;

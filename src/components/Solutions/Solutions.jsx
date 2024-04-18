import React from "react";
import './Solutions.css'
import { Button, Container } from "react-bootstrap";
const Solutions = () => {
  return (
    <section className="solutions-section">
      <Container>
        <div className="section-title">
          <p className="subtitle">Our Solutions</p>
          <h2 className="title">Elevating your business success</h2>
          <div className="grid-section">
            <div className="paragraph-title">
              This phrase conveys the idea that the provided solutions are not
              just functional but have the potential to uplift and enhance
              overall business performance.
            </div>
            <div className="title-btn">
              <Button className="primary-button">Consultation</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Solutions;

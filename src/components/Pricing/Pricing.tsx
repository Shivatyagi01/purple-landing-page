import { useState } from "react";
import "./Pricing.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Pricing = () => {
  const [monthlyPricingVisible, setMonthlyPricingVisible] = useState(true);
  const [yearlyPricingVisible, setYearlyPricingVisible] = useState(false);
  const [activeButton, setActiveButton] = useState("section1");

  const toggleSection1 = () => {
    setMonthlyPricingVisible(true);
    setYearlyPricingVisible(false);
    setActiveButton("section1");
  };

  const toggleSection2 = () => {
    setMonthlyPricingVisible(false);
    setYearlyPricingVisible(true);
    setActiveButton("section2");
  };

  return (
    <section className="pricing-section">
      <Container>
        <div className="section-title">
          <p className="subtitle">Pricing & Plans</p>
          <div className="grid-section">
            <h2 className="title">
              We deliver perfect pricing <br />
              and plan just for you
            </h2>
            <div className="title-btn">
              <Button
                className={
                  activeButton === "section1"
                    ? "active primary-button"
                    : "primary-button"
                }
                onClick={toggleSection1}
              >
                Monthly
              </Button>
              <Button
                className={
                  activeButton === "section2"
                    ? "active primary-button"
                    : "primary-button"
                }
                onClick={toggleSection2}
              >
                Yearly
              </Button>
            </div>
          </div>
        </div>
        {monthlyPricingVisible && (
          <div className="pricing-wrapper monthly">
            <Row>
              <Col>
                <div className="pricing-wrap">
                  <h6>Basic Plan</h6>
                  <div className="price-big">
                    $ <span className="price">39</span>/month
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Col>
              <Col>
                <div className="pricing-wrap">
                  <h6>Basic Plan</h6>
                  <div className="price-big">
                    $ <span className="price">60</span>/month
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Col>
              <Col>
                <div className="pricing-wrap">
                  <h6>Basic Plan</h6>
                  <div className="price-big">
                    $ <span className="price">90</span>/month
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Col>
            </Row>
          </div>
        )}
        {yearlyPricingVisible && (
          <div className="pricing-wrapper monthly">
            <Row>
              <Col>
                <div className="pricing-wrap">
                  <h6>Basic Plan</h6>
                  <div className="price-big">
                    $ <span className="price">390</span>/yearly
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Col>
              <Col>
                <div className="pricing-wrap">
                  <h6>Basic Plan</h6>
                  <div className="price-big">
                    $ <span className="price">600</span>/yearly
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Col>
              <Col>
                <div className="pricing-wrap">
                  <h6>Basic Plan</h6>
                  <div className="price-big">
                    $ <span className="price">800</span>/yearly
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Pricing;

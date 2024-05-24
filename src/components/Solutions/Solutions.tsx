
import "./Solutions.css";
import { Button, Container, Row, Col } from "react-bootstrap";
// images
import icon1 from "../../assets/images/Icon-1.png";
import icon2 from "../../assets/images/Icon-2.png";
import icon3 from "../../assets/images/Icon-3.png";
import icon4 from "../../assets/images/Icon-4.png";
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
        <div className="solutions-columns-wrap">
          <Row>
            <Col>
              <div className="solution-wrap column-box">
                <img className="icon-solution" src={icon1} alt="" />
                <h3>Data Analytics</h3>
                <p>
                  Data analytics empowers businesses to make informed decisions
                  based on evidence rather than intuition.
                </p>
              </div>
            </Col>
            <Col>
              <div className="solution-wrap column-box">
                <img className="icon-solution" src={icon2} alt="" />
                <h3>Marketing</h3>
                <p>
                  Marketing empowers businesses to make informed decisions based
                  on evidence rather than intuition.
                </p>
              </div>
            </Col>
            <Col>
              <div className="solution-wrap column-box">
                <img className="icon-solution" src={icon3} alt="" />
                <h3>Website Design</h3>
                <p>
                  Website Design empowers businesses to make informed decisions
                  based on evidence rather than intuition.
                </p>
              </div>
            </Col>
            <Col>
              <div className="solution-wrap column-box no-border">
                <img className="icon-solution" src={icon4} alt="" />
                <h3>Business Strategy</h3>
                <p>
                  Strategy empowers businesses to make informed decisions based
                  on evidence rather than intuition.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Solutions;

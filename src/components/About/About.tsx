
import './About.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import aboutImg from "../../assets/images/Home-1.webp";
const About = () => {
  return (
    <section className="who-we-are">
      <Container>
        <div className="section-title">
          <p className="subtitle">Who We Are</p>
          <h2 className="title">
            We transcend the typical
            <br /> definition of a company
          </h2>
          <div className="grid-section">
            <div className="paragraph-title">
              Our company specializes in crafting tailored solutions to empower
              businesses. From innovative technologies to strategic consulting,
              we provide comprehensive approaches that enhance efficiency,
              streamline operations, and drive overall success.
            </div>
            <div className="title-btn">
              <Button className="primary-button">Our Pricing</Button>
            </div>
          </div>
        </div>
        <div className="about-cont">
          <Row>
            <Col>
              <div className="about-cont-wrap">
                <h2>10+</h2>
                <p>Years of experience in busines</p>
                <hr />
                <ul>
                  <li>Unique Design</li>
                  <li>Quality Code</li>
                  <li>Premium Suport</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="about-img">
                <img src={aboutImg} alt="About Images" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;

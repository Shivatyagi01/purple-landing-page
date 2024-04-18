import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
// image
import homeBg from "../../assets/images/BG-Home.png";

const Home = () => {
  return (
    <section className="home-section">
      <img src={homeBg} alt="" className="bg-img-home-1" />
      <Container>
        <Row>
          <Col>
            <div className="home-content">
              <h1>Business With Our Solutions</h1>
              <p>
                The goal is to enhance efficiency, productivity, and overall
                performance, ultimately contributing to the success and
                sustainability of a business.
              </p>
            </div>
          </Col>
          <Col className="hero-form">
            <div className="home-form-cont">
              <h2>Tell Us About your bussiness</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim.
              </p>
              <form>
                <input type="text" placeholder="Your Name*" />
                <br />
                <input type="email" placeholder="Your Email*" />
                <br />
                <input type="phone" placeholder="Your Phone*" />
                <br />
                <input
                  className="primary-button full-width w-button"
                  type="submit"
                  value="Get Started"
                />
              </form>
              <div className="absolute-form-bg"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;

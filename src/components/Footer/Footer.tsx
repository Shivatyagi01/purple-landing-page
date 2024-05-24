import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import footerLogo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col>
              <div className="footer-left">
                <p>Support Email</p>
                <a href="#">infolanding@example.com</a>
                <form>
                  <Row>
                    <Col>
                      <input type="text" placeholder="Name*" />
                    </Col>
                    <Col>
                      <input type="email" placeholder="Email*" />
                    </Col>
                  </Row>
                  <textarea
                    name="message"
                    id=""
                    cols={3}
                    rows={4}
                    placeholder="Message"
                  ></textarea>
                  <input type="submit" className="primary-button"/>
                </form>
              </div>
            </Col>
            <Col>
              <div className="footer-right">
                <p>Have a questions?</p>
                <h3>We would love to help</h3>
                <a href="#">+333 200 10 10</a>
                <a href="#"> +333 200 10 20</a>
                <hr />
                <p className="about">
                  Welcome to the future with our innovative technologies that
                  transform your everyday life and provide the highest level of
                  comfort
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="copyright">
        <Container>
          <Row>
            <Col>
              <img src={footerLogo} alt="" />
            </Col>
            <Col>
              <p>2024 All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;

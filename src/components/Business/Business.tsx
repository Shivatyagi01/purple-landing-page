
import "./Business.css";
import { Row, Col } from "react-bootstrap";
import businessImg from "../../assets/images/Style-Guide.webp";
const Business = () => {
  return (
    <section className="business-section no-padding">
      <Row>
        <Col className="image-container">
          <div className="image">
            <img src={businessImg} alt="" />
          </div>
        </Col>
        <Col>
          <div className="business-cont">
            <div className="section-title">
              <p className="subtitle">Business</p>
              <h2 className="title">Our benefits for your business</h2>
              <div className="grid-section">
                <div className="paragraph-title w-100">
                  The robust features catered specifically to your business
                  needs, allowing for seamless customization and scalability.
                  The solution's analytics tools provided valuable insights,
                  empowering your decision-making processes. Moreover, the
                  responsive customer support team demonstrated a commitment to
                  client satisfaction, addressing our inquiries promptly and
                  effectively.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col listing-columns">
                <h4>1B+</h4>
                <p>We earning a year</p>
              </div>
              <div className="col listing-columns">
                <h4>4M+</h4>
                <p>Awesome clients</p>
              </div>
              <div className="col listing-columns">
                <h4>95%</h4>
                <p>Satisfied clients</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Business;

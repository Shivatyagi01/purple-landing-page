import Accordion from "../Accordion/Accordion";
import { Container, Row, Col } from "react-bootstrap";
import "./Faqs.css";
import faqImage from "../../assets/images/FAQ-Img.webp";
const Faqs = () => {
  const accordionItems = [
    {
      title: "Do you offer free plans?",
      content:
        "Yes, we do offer free plans for our users. Our goal is to make our innovative technologies accessible to everyone. The free plan includes essential features and services to enhance your experience with our digital solutions. If you have specific questions about the features included in the free plan, feel free to ask, and we'll be happy to provide more details.",
    },
    {
      title: "What are the latest technological trends in 2024?",
      content:
        "Stay updated on current technology trends, such as artificial intelligence, blockchain, edge computing, and 5G. These innovations are shaping various industries and transforming the digital landscape.",
    },
    {
      title:
        "How can businesses leverage cloud computing for their operations?",
      content:
        "Cloud computing offers scalable and flexible solutions for businesses. It allows them to store data securely, access applications remotely, and streamline collaborative efforts. Understanding the different cloud service models (IaaS, PaaS, SaaS) is crucial for effective implementation.",
    },
  ];
  return (
    <section className="faqs-section">
      <Container>
        <Row>
          <Col>
            <div className="faqs-image">
              <img src={faqImage} alt="" />
            </div>
          </Col>
          <Col>
            <div className="faq-content">
              <div className="section-title">
                <p className="subtitle">Questions & Answers</p>
                <h2 className="title">
                  We aim to assist you in handling daily tasks
                </h2>
              </div>
              <Accordion items={accordionItems} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;

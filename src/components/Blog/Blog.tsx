import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Blog.css";
import blogBg from "../../assets/images/Logo-BG.png";
import { FaCircleArrowRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <section className="blog-section">
      <Container>
        <img className="blog-bg-img" src={blogBg} alt="Blog Bg" />
        <div className="section-title text-center">
          <p className="subtitle">Our Blog</p>
          <h2 className="title">
            Latest news about business <br />
            solutions in World
          </h2>
        </div>
        <Row>
          <Col>
            <div className="blog-box">
              <p className="blog-date-meta">
                <span>News -</span>March 26, 2024
              </p>
              <h4>Cybersecurity Solutions Every Business Should Implement</h4>
              <p>
                It explores different types of solutions and their impact on
                scalability and competitiveness.
              </p>
              <a href="#">
                Read More <FaCircleArrowRight />
              </a>
            </div>
          </Col>
          <Col>
            <div className="blog-box">
              <p className="blog-date-meta">
                <span>News -</span>March 26, 2024
              </p>
              <h4>Cybersecurity Solutions Every Business Should Implement</h4>
              <p>
                It explores different types of solutions and their impact on
                scalability and competitiveness.
              </p>
              <a href="#">
                Read More <FaCircleArrowRight />
              </a>
            </div>
          </Col>
          <Col>
            <div className="blog-box">
              <p className="blog-date-meta">
                <span>News -</span>March 26, 2024
              </p>
              <h4>Cybersecurity Solutions Every Business Should Implement</h4>
              <p>
                It explores different types of solutions and their impact on
                scalability and competitiveness.
              </p>
              <a href="#">
                Read More <FaCircleArrowRight />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;

import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';

export default function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="testimonial-section text-center pt-0">
      <Container>
        <div className="section-title">
          <p className="subtitle">Testimonials</p>
        </div>
        <Slider className="test-slider" {...settings}>
          <div className="testimonial-slider">
            <h3>
              "The business solution provided exceeded my expectations in every
              aspect. Its user-friendly interface made it easy to integrate into
              our existing processes, streamlining operations and enhancing
              overall efficiency. The robust features catered specifically to
              our business needs, allowing for seamless customization and
              scalability.”
            </h3>
            <p>Robert Hock, Agency X</p>
          </div>
          <div className="testimonial-slider">
            <h3>
              "The business solution provided exceeded my expectations in every
              aspect. Its user-friendly interface made it easy to integrate into
              our existing processes, streamlining operations and enhancing
              overall efficiency. The robust features catered specifically to
              our business needs, allowing for seamless customization and
              scalability.”
            </h3>
            <p>Robert Hock, Agency X</p>
          </div>
          <div className="testimonial-slider">
            <h3>
              "The business solution provided exceeded my expectations in every
              aspect. Its user-friendly interface made it easy to integrate into
              our existing processes, streamlining operations and enhancing
              overall efficiency. The robust features catered specifically to
              our business needs, allowing for seamless customization and
              scalability.”
            </h3>
            <p>Robert Hock, Agency X</p>
          </div>
        </Slider>
      </Container>
    </section>
  );
}

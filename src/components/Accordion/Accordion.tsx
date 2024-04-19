import { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-accordion">
      {items.map((item, index) => (
        <div key={index} className="faq-cont">
          <div
            onClick={() => onItemClick(index)}
            className={`accordion-title ${
              activeIndex === index ? "active" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            <h4>{item.title}</h4>
            <div className="arrow">{activeIndex === index ? "▲" : "▼"}</div>
          </div>
          {activeIndex === index && (
            <div className="accordion-para">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

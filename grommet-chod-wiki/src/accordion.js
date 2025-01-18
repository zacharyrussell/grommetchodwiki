import React, { useState } from "react";
import './App.css';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    // Toggle active index
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)} // Toggle on click
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }} // Add cursor and alignment for UX
          >
            <img src={item.icon} alt={`${item.name} Icon`} style={{ marginRight: "10px" }} />
            <h2 style={{ flex: 1 }}>{item.name}</h2>
            {item.typeIcon && <img src={item.typeIcon} alt={`${item.type} type`} />}
          </div>
          {/* Conditional rendering of content */}
          {activeIndex === index && (
            <div className="accordion-content">
              {item.content.map((contentRow, rowIndex) => (
                <div className="row" key={rowIndex}>
                  {contentRow.map((content, colIndex) => (
                    <div key={colIndex}>{content}</div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

// FAQ item component
const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.isActive);

  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div className={`rounded-lg mb-2 ${isOpen ? "border-blue-900" : "border-[#692f95]"} border`}>
      <a
        href="#!"
        className="p-2 lg:p-4 w-full text-start flex justify-between items-center cursor-pointer"
        onClick={toggleFaq}
      >
        <span className="text-sm lg:text-base">{faq.question}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </a>
      <div
        className={`faq-content ${isOpen ? "open" : ""} p-2 lg:p-4 bg-[#692f95] text-white shadow dark:bg-[#1E2735] rounded-b-xl`}
      >
        <p className="text-sm lg:text-base opacity-75">{faq.answer}</p>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
};

export default FaqItem;

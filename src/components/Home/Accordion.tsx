import { SetStateAction, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const questions = [
  {
    question: "What types of medical equipment do you offer?",
    answer: "Our return policy lasts 30 days...",
  },
  {
    question: "How do I request technical support for my equipment?",
    answer: "You can track your order using the tracking number provided...",
  },
  {
    question: "Do you provide training for healthcare professionals?",
    answer:
      "Yes, you can purchase items in bulk. Please contact our support...",
  },
];

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: number | SetStateAction<null>) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index)
    }
  };

  return (
    <div className="w-full mx-auto ">
      {questions.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <div
            className="flex items-center justify-between p-5 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="font-medium ">{item.question}</h3>
            <span className="text-2xl">
              {openIndex === index ? <FiMinus /> : <FiPlus />}
            </span>
          </div>
          {openIndex === index && (
            <div className="p-4">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;

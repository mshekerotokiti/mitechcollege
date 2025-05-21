import React, { useState } from 'react';
import './Faqs.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item mb-3">
      <div
        className="faq-question bg-light p-3 rounded shadow-sm d-flex justify-content-between align-items-center"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
      >
        <span className="fw-semibold">{question}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="faq-answer mt-2 px-3 text-secondary">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    {
      question: 'Do I need a provisional license to obtain a definitive license?',
      answer: 'Yes, in Kenya, you must first obtain a provisional license (also called a learner’s license) before you can proceed to get a definitive driving license. This allows you to begin learning how to drive under supervision.',
    },
    {
      question: 'I am 16 years old. Can I get my Driver License in Kenya?',
      answer: 'No, the minimum age requirement to obtain a driving license in Kenya is 18 years for light vehicles. However, you can begin learning traffic theory in preparation.',
    },
    {
      question: 'Am I assured of getting the best driving course training?',
      answer: 'Absolutely. Our instructors are NTSA-certified and we offer comprehensive training including theory, practical sessions, simulator time, and road safety awareness.',
    },
    {
      question: 'What is the difference between a provisional license and an interim license?',
      answer: 'A provisional license allows you to learn how to drive and is valid for 3 months. An interim license is a temporary document issued after passing the driving test and before receiving your smart driving license.',
    },
    {
      question: 'What is a Certificate of Competence?',
      answer: 'This is a certificate issued by the NTSA after successfully passing both the theoretical and practical driving tests. It’s a key requirement for obtaining a definitive driving license.',
    },
    {
      question: 'Do you offer computer training alongside driving school?',
      answer: 'Yes, we offer certified computer packages including Word, Excel, PowerPoint, Internet & Email, and more under our computer college program.',
    },
    {
      question: 'Can I enroll for driving and computer classes at the same time?',
      answer: 'Yes, our flexible class schedules allow students to enroll in both programs simultaneously and manage their time effectively.',
    }
  ];

  return (
    <section className="p-2" style={{ backgroundColor: "#D9D9D9", fontFamily: 'sans-seriff' ,fontSize: '25px'}}>
      <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="hover-underline">FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;

import React, { useState } from 'react';
import {
    Card,
    CardBody,
    Collapse,
    Button
} from 'reactstrap';

import './FAQ.css'

const faqData = [
    {
        question: "Can I get a same day booking?",
        answer: "Please send us an email using our online mail system or call us and leave a detailed message. Someone from our team will contact you to provide all details."
    },
    {
        question: "How can I get a quote?",
        answer: "Please send us an email or call our team for a quick quote."
    },
    {
        question: "What services are included in standard cleaning?",
        answer: "Our standard cleaning service includes vacuuming, dusting, mopping, and more."
    },
    {
        question: "Do you provide supplies for your services?",
        answer: "Yes, we provide all cleaning supplies for our services."
    },
    {
        question: "How many cleaners do you offer per service?",
        answer: "The number of cleaners depends on the size and needs of the job."
    }
];

function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close the current one if it's already open
        } else {
            setActiveIndex(index); // Open the clicked one
        }
    };

    return (
        <div className="faq-section">
            {faqData.map((faq, index) => (
                <Card key={index} className="faq-item mb-2">
                    <Button
                        onClick={() => toggle(index)}
                        className="faq-question p-3 text-left"
                        style={{
                            backgroundColor: '#FFEDE6',
                            border: 'none',
                            width: '100%',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        {faq.question}
                        <i className={`bx ${activeIndex === index ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
                    </Button>
                    <Collapse isOpen={activeIndex === index}>
                        <CardBody className="faq-answer p-3">
                            {faq.answer}
                        </CardBody>
                    </Collapse>
                </Card>
            ))}
        </div>
    );
}

export default FAQSection;

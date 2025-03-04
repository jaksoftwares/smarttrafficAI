"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Mail, MessageCircle } from "lucide-react";

const generalFAQs = [
  {
    question: "What is SmartTraffic AI?",
    answer:
      "SmartTraffic AI is an AI-powered system designed to optimize traffic flow, enhance road safety, and improve urban mobility through real-time data analysis.",
  },
  {
    question: "How does SmartTraffic AI work?",
    answer:
      "The system uses AI-driven analytics, IoT sensors, and machine learning to monitor traffic patterns, predict congestion, and optimize signal timing.",
  },
  {
    question: "Is SmartTraffic AI compatible with existing traffic systems?",
    answer:
      "Yes, it seamlessly integrates with current traffic lights, surveillance cameras, and infrastructure to enhance city-wide traffic control.",
  },
];

const technicalFAQs = [
  {
    question: "What technologies power SmartTraffic AI?",
    answer:
      "Our system leverages AI, machine learning, IoT, cloud computing, and big data analytics to deliver intelligent traffic solutions.",
  },
  {
    question: "How is data security handled?",
    answer:
      "We implement encryption, secure cloud storage, and compliance with global data protection standards to safeguard all traffic data.",
  },
];

interface FAQ {
    question: string;
    answer: string;
  }
  
  interface FAQItemProps {
    faq: FAQ;
    index: number;
    openIndex: number | null;
    toggleFAQ: (index: number) => void;
  }

const supportFAQs = [
  {
    question: "How can I get support for SmartTraffic AI?",
    answer:
      "You can contact our support team via email, live chat, or phone for technical assistance and inquiries.",
  },
  {
    question: "Is there a demo available?",
    answer:
      "Yes! You can request a live demo session with one of our specialists to see SmartTraffic AI in action.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="text-center py-20 px-6 bg-blue-600 text-white">
        <HelpCircle className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-5xl font-extrabold">Frequently Asked Questions</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Find answers to common questions about SmartTraffic AI. If you don’t see your question, feel free to contact us!
        </p>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">General Questions</h2>
        {generalFAQs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} openIndex={openIndex} toggleFAQ={toggleFAQ} />
        ))}

        <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Technical Information</h2>
        {technicalFAQs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index + generalFAQs.length} openIndex={openIndex} toggleFAQ={toggleFAQ} />
        ))}

        <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Support & Contact</h2>
        {supportFAQs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index + generalFAQs.length + technicalFAQs.length} openIndex={openIndex} toggleFAQ={toggleFAQ} />
        ))}
      </div>

      {/* Contact Support Section */}
      <div className="bg-gray-100 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Still have questions?</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          If your question isn&apos;t answered here, reach out to our support team. We&apos;re happy to help!
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 hover:bg-blue-700">
            <Mail className="w-5 h-5" /> Contact Us
          </a>
          <a href="/live-chat" className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 hover:bg-gray-900">
            <MessageCircle className="w-5 h-5" /> Live Chat
          </a>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ faq, index, openIndex, toggleFAQ }: FAQItemProps) {
    return (
      <div className="border border-gray-200 rounded-lg shadow-sm transition-all duration-300 mb-4">
        <button
          className="w-full flex justify-between items-center px-6 py-5 text-lg font-medium text-gray-800 hover:bg-gray-100 focus:outline-none transition-all duration-200"
          onClick={() => toggleFAQ(index)}
        >
          <span>{faq.question}</span>
          {openIndex === index ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
        </button>
        {openIndex === index && (
          <div className="px-6 pb-5 text-gray-600 border-t border-gray-200 bg-gray-50">{faq.answer}</div>
        )}
      </div>
    );
  }
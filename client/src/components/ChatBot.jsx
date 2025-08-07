import React, { useState } from 'react';
import './ChatBot.css';

const predefinedQA = [
  { question: "What models are available?", answer: "We offer Classic, Street, and Cruiser models." },
  { question: "How can I build my bike?", answer: "Click 'Build Your Bike' on the homepage to customize yours!" },
  { question: "Where is your nearest showroom?", answer: "Please visit our 'Find Us' page or contact support." },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [selectedQA, setSelectedQA] = useState(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setStep(0);
    setName('');
    setNumber('');
    setSelectedQA(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && number.trim()) {
      setStep(1);
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbox">
          <div className="chat-header">CruzeBot 🤖</div>
          <div className="chat-body">
            {step === 0 && (
              <form onSubmit={handleSubmit}>
                <p>Hello! What's your name and phone number?</p>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
                <button type="submit">Continue</button>
              </form>
            )}

            {step === 1 && (
              <>
                <p>Hi {name}! How can I help you?</p>
                <ul className="question-list">
                  {predefinedQA.map((item, index) => (
                    <li key={index} onClick={() => setSelectedQA(item)}>{item.question}</li>
                  ))}
                </ul>
              </>
            )}

            {selectedQA && (
              <div className="answer-box">
                <strong>Q:</strong> {selectedQA.question}<br />
                <strong>A:</strong> {selectedQA.answer}
              </div>
            )}
          </div>
        </div>
      )}

      <button className="chatbot-toggle" onClick={toggleChat}>
        🤖
      </button>
    </div>
  );
};

export default ChatBot;

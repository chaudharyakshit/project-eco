import React, { useState, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    if (isOpen) {
      // Reset all chat-related state when chatbot opens
      setStep(0);
      setName('');
      setNumber('');
      setSelectedCategory(null);
      setSelectedQuestion(null);
      setChatHistory([]);
      setUserInput('');
    }
  }, [isOpen]);

  const saveUserData = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/chatuser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone: number })  // number is state for phone
    });
    const data = await res.json();
    console.log('User saved:', data);
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};


  const questionCategories = [
    {
      name: "🛵 Product Info",
      icon: "scooter",
      questions: [
        "What are the features of the EcoShine model?",
        "What is the battery range of your electric scooters?",
        "What colors are available for the EcoJoy?",
        "Can I compare different scooty models?",
        "What is the top speed of Cruze Blade?",
        "Are your scooters suitable for city commuting?",
        "How long does it take to fully charge the battery?",
        "Do your scooters have a reverse gear?",
        "What type of brakes are used in your models?",
        "What is the warranty on the battery and motor?"
      ],
      answers: [
        "The EcoShine model features LED lighting, digital dashboard, 3 riding modes, and regenerative braking.",
        "Our electric scooters offer a range of 80-120 km per charge depending on model and riding conditions.",
        "EcoJoy comes in 5 colors: Midnight Black, Pearl White, Ocean Blue, Ruby Red, and Forest Green.",
        "Yes! Use our comparison tool on the product page to compare up to 3 models side by side.",
        "The Cruze Blade has a top speed of 75 km/h in sports mode.",
        "Absolutely! Our scooters are designed specifically for urban commuting with compact size and good maneuverability.",
        "Charging time is 4-6 hours for a full charge from empty.",
        "Yes, our premium models (EcoShine Pro and Cruze Blade) feature reverse gear for easy parking.",
        "We use disc brakes in front and drum brakes in rear for optimal stopping power.",
        "Battery warranty is 3 years or 30,000 km, motor warranty is 5 years unlimited km."
      ]
    },
    {
      name: "💰 Pricing & Finance",
      icon: "currency-rupee",
      questions: [
        "What is the price of the EcoSwift?",
        "Do you offer EMI or loan options?",
        "Is there a calculator to estimate monthly payments?",
        "Are there any discounts for bulk orders?",
        "What's included in the on-road price?"
      ],
      answers: [
        "EcoSwift starts at ₹85,999 (ex-showroom). On-road price varies by location.",
        "Yes, we partner with major banks offering EMI options starting at 6.99% interest.",
        "Our website has an EMI calculator under the 'Finance' section.",
        "For orders of 5+ units, we offer 5% discount and free accessories.",
        "On-road price includes registration, insurance, and road tax plus optional accessories."
      ]
    },
    {
      name: "🧾 Booking & Test Drive",
      icon: "calendar-check",
      questions: [
        "How can I book a test ride?",
        "Can I pre-book a scooty online?",
        "What documents are needed for booking?",
        "Is home delivery available?",
        "Can I cancel or modify my booking?"
      ],
      answers: [
        "Book test rides through our website or WhatsApp. We'll schedule at your nearest showroom.",
        "Yes! Pay ₹2000 booking amount online to reserve your vehicle.",
        "Just need Aadhar card and driving license for test ride. Booking requires address proof.",
        "Home delivery available in select cities with ₹500 delivery charge.",
        "Bookings can be modified within 7 days. Cancellation refunds processed in 10 working days."
      ]
    },
    {
      name: "🧑‍🔧 Service & Support",
      icon: "tools",
      questions: [
        "Where is the nearest service center?",
        "What services do you provide after purchase?",
        "How often should I service my scooty?",
        "Do you offer free servicing?",
        "How can I schedule a service appointment?"
      ],
      answers: [
        "Our website shows all service centers. Share your location for nearest one.",
        "Free first service, paid annual services, roadside assistance, and warranty claims.",
        "First service at 500km, then every 6 months or 5000km (whichever comes first).",
        "First 2 services are free. Extended warranty includes 2 more free services.",
        "Book service appointments through our app, website, or by calling customer care."
      ]
    },
    {
      name: "🏪 Dealership Info",
      icon: "store",
      questions: [
        "How can I become an Ecocruze dealer?",
        "What are the requirements for dealership?",
        "Is there any franchise fee?",
        "How can I contact the dealership team?",
        "Where are your current showrooms?"
      ],
      answers: [
        "Submit dealer inquiry form on our website. Our team will contact you.",
        "Minimum 1000 sq.ft showroom space and ₹25L investment required.",
        "Franchise fee is ₹5L refundable deposit for metro locations.",
        "Email dealership@bikejunction.com or call 1800-123-4567.",
        "We have 87 showrooms across India. View complete list on our dealership page."
      ]
    }
  ];

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (name.trim() && number.trim()) {
    await saveUserData();
    addToChat(`User: ${name} (${number})`, 'user');
    addToChat("Bot: Hi " + name + "! How can I assist you today? Here are the help categories:", 'bot');
    setStep(1);
  }
};


  const handleUserMessage = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      addToChat("You: " + userInput, 'user');
      // Simple keyword matching for demo
      if (userInput.toLowerCase().includes('thank')) {
        addToChat("Bot: You're welcome! Is there anything else I can help with?", 'bot');
      } else {
        addToChat("Bot: I'm still learning! Please select from the options above or visit our website for more details.", 'bot');
      }
      setUserInput('');
    }
  };

  const addToChat = (message, sender) => {
    setChatHistory(prev => [...prev, { message, sender }]);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    addToChat(`Bot: You selected ${category.name}. Please choose a question:`, 'bot');
  };

  const selectQuestion = (question, index) => {
    setSelectedQuestion(question);
    const answer = selectedCategory.answers[index];
    addToChat(`You: ${question}`, 'user');
    addToChat(`Bot: ${answer}`, 'bot');
  };

  const resetToCategories = () => {
    setSelectedCategory(null);
    setSelectedQuestion(null);
    addToChat("Bot: What would you like to know about?", 'bot');
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="icon">🤖</span>
      
      </button>

      {isOpen && (
        <div className="chatbox">
          <div className="chat-header">
            <div className="logo">Ecocruze Assistant</div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="chat-body">
            {chatHistory.map((item, index) => (
              <div key={index} className={`message ${item.sender}`}>
                {item.message}
              </div>
            ))}

            {step === 0 && (
              <form onSubmit={handleSubmit} className="intro-form">
                <div className="welcome-message">
                  <h3>Welcome to ECOCRUZE!</h3>
                  <p>Get instant answers about our bikes, pricing, and services.</p>
                </div>
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
                <button type="submit" className="submit-btn">Start Chat</button>
                <div className="privacy-note">
                  We'll never share your details. By continuing, you agree to our <a href="#">Privacy Policy</a>.
                </div>
              </form>
            )}

            {step === 1 && !selectedCategory && (
              <div className="categories-container">
                <h4>How can I help you today?</h4>
                <div className="categories-grid">
                  {questionCategories.map((category, index) => (
                    <div 
                      key={index} 
                      className="category-card"
                      onClick={() => selectCategory(category)}
                    >
                      <div className="category-icon">{category.icon}</div>
                      <div className="category-name">{category.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedCategory && !selectedQuestion && (
              <div className="questions-container">
                <button className="back-btn" onClick={resetToCategories}>
                  ← Back to Categories
                </button>
                <h4>{selectedCategory.name} Questions</h4>
                <ul className="questions-list">
                  {selectedCategory.questions.map((question, index) => (
                    <li key={index} onClick={() => selectQuestion(question, index)}>
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(selectedQuestion || chatHistory.length > 2) && (
              <form onSubmit={handleUserMessage} className="message-input">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
                <button type="submit">Send</button>
              </form>
            )}
          </div>

          <div className="chat-footer">
            <div className="quick-links">
              <span>Quick Links:</span>
              <a href="#">Book Test Ride</a>
              <a href="#">Find Showroom</a>
              <a href="#">View Offers</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
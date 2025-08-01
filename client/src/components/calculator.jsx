import React from 'react';
import './Calculator.css';

const Calculator = () => {
  return (
    <section className="calc-banner">
      <div className="calc-container">
        {/* Left: Calculator Form */}
        <div className="calc-box">
          <h2>Loan Calculator</h2>
          <p>Estimate your monthly scooty loan payment easily.</p>

          <div className="calc-inputs">
            <input type="text" placeholder="Price of Scooty ($)" />
            <input type="text" placeholder="Interest Rate (%)" />
            <input type="text" placeholder="Loan Term (Months)" />
            <input type="text" placeholder="Down Payment ($)" />
          </div>

          <div className="calc-summary">
            <p>Down payment: <span>$0</span></p>
            <p>Financed: <span>$0</span></p>
            <p>Monthly: <span>$0</span></p>
          </div>

          <button className="calc-btn">CALCULATE →</button>
        </div>

        {/* Right: Text */}
        <div className="calc-text">
          <h1>Want To Calculate<br />Your Scooty Payment?</h1>
          <p>
            Trade in your old vehicle and use our quick loan calculator to check monthly payments before you buy your next electric scooty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

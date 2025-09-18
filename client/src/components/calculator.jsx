import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [price, setPrice] = useState('');
  const [rate, setRate] = useState('');
  const [months, setMonths] = useState('');
  const [down, setDown] = useState('');
  const [summary, setSummary] = useState({ down: 0, financed: 0, monthly: 0 });

  const toNumber = (v) => Number(String(v).replace(/[^0-9.]/g, '')) || 0;

  const calculate = () => {
    const P = Math.max(0, toNumber(price) - toNumber(down));
    const n = Math.max(1, Math.floor(toNumber(months)));
    const r = toNumber(rate) / 100 / 12;
    const monthly = r === 0 ? P / n : (P * r) / (1 - Math.pow(1 + r, -n));
    setSummary({ down: toNumber(down), financed: P, monthly: Math.round(monthly) });
  };

  return (
    <section className="calc-banner">
      <div className="calc-container">
        {/* Left: Calculator Form */}
        <div className="calc-box">
          <h2>Loan Calculator</h2>
          <p>Estimate your monthly scooty loan payment easily.</p>

          <div className="calc-inputs">
            <input type="text" placeholder="Price of Scooty (₹)" value={price} onChange={(e)=>setPrice(e.target.value)} />
            <input type="text" placeholder="Interest Rate (%)" value={rate} onChange={(e)=>setRate(e.target.value)} />
            <input type="text" placeholder="Loan Term (Months)" value={months} onChange={(e)=>setMonths(e.target.value)} />
            <input type="text" placeholder="Down Payment (₹)" value={down} onChange={(e)=>setDown(e.target.value)} />
          </div>

          <div className="calc-summary">
            <p>Down payment: <span>₹{summary.down.toLocaleString('en-IN')}</span></p>
            <p>Financed: <span>₹{summary.financed.toLocaleString('en-IN')}</span></p>
            <p>Monthly: <span>₹{summary.monthly.toLocaleString('en-IN')}</span></p>
          </div>

          <button className="calc-btn" onClick={calculate}>CALCULATE →</button>
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

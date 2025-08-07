import React from "react";
import "./Dealership.css";

// --- Banner Section ---
const BannerSection = () => (
  <section className="bold-banner">
    <div className="bold-banner-content">
      <div className="banner-lines">
        <div className="banner-line banner-line-1">THE KEY TO</div>
        <div className="banner-line banner-line-2">BUSINESS SUCCESS</div>
        <div className="banner-line banner-line-3">IS MAKING</div>
        <div className="banner-line banner-line-4">
          <span className="bold-word">BOLD</span>&nbsp;DECISIONS
        </div>
      </div>
      <button className="banner-btn">Become ECOCRUZE Partner</button>
    </div>
    <div className="bold-banner-bg" />
  </section>
);

// --- Form Section ---
const cityOptions = [
  "Delhi", "Dehradun", "Lucknow", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Other"
];
const stateOptions = [
  "Delhi", "Uttar Pradesh", "Haryana", "Uttarakhand", "Rajasthan", "Maharashtra", "West Bengal", "Tamil Nadu", "Karnataka", "Telangana", "Other"
];

const DealershipForm = () => (
  <div className="dealership-root">
    <h1 className="dealership-title">Electric Scooter Dealership</h1>
    <form className="dealership-form">
      <div className="dealership-grid">
        <div className="dealership-field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className="dealership-field">
          <label>Contact Number</label>
          <input type="tel" name="contact" placeholder="Contact" required />
        </div>
        <div className="dealership-field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="dealership-field">
          <label>State</label>
          <select name="state" required>
            <option value="">-Select State-</option>
            {stateOptions.map((state) => (
              <option value={state} key={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="dealership-field">
          <label>City</label>
          <select name="city" required>
            <option value="">-Select City-</option>
            {cityOptions.map((city) => (
              <option value={city} key={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="dealership-field">
          <label>Current Business</label>
          <input type="text" name="currentBusiness" placeholder="Current Business" />
        </div>
        <div className="dealership-field">
          <label>Firm Name</label>
          <input type="text" name="firmName" placeholder="Firm Name" />
        </div>
        <div className="dealership-field">
          <label>Current Business Turnover</label>
          <input type="text" name="turnover" placeholder="Current Business Turnover" />
        </div>
        <div className="dealership-field">
          <label>GST No.</label>
          <input type="text" name="gst" placeholder="GST No." />
        </div>
        <div className="dealership-field dealership-field--full">
          <label>Message</label>
          <textarea name="message" rows={3} placeholder="Type your message..." />
        </div>
      </div>
      <div className="dealership-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);

// --- Main Page Export ---
const Dealership = () => (
  <>
    <BannerSection />
    <DealershipForm />
  </>
);

export default Dealership;


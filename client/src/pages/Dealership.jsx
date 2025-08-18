import React, { useState } from "react";
import "./Dealership.css";

// --- Banner Section ---
const BannerSection = () => (
  <section className="bold-banner">
    <h1>Dealership</h1>
    <p className="breadcrumb">
      <a href="/">Home</a> &gt; Dealership
    </p>
  </section>
);

// --- Form Section ---
const cityOptions = [
  "Delhi", "Dehradun", "Lucknow", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Other"
];
const stateOptions = [
  "Delhi", "Uttar Pradesh", "Haryana", "Uttarakhand", "Rajasthan", "Maharashtra", "West Bengal", "Tamil Nadu", "Karnataka", "Telangana", "Other"
];

const DealershipForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const messageDiv = document.getElementById("formMessage");

  try {
    const res = await fetch("http://localhost:5001/api/dealership", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    // Show success message
    messageDiv.style.display = "block";
    messageDiv.className = "dealership-message success";
    messageDiv.innerText = data.message;

    // Redirect to home after 4 seconds
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  } catch (err) {
    messageDiv.style.display = "block";
    messageDiv.className = "dealership-message error";
    messageDiv.innerText = "Error submitting form";
  }
};



  return (
    <div className="dealership-root">
      <h1 className="dealership-title">Electric Scooter Dealership</h1>
      <form className="dealership-form" onSubmit={handleSubmit}>
        <div className="dealership-grid">
          <div className="dealership-field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          </div>
          <div className="dealership-field">
            <label>Contact Number</label>
            <input type="tel" name="contact" placeholder="Contact" onChange={handleChange} required />
          </div>
          <div className="dealership-field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          </div>
          <div className="dealership-field">
            <label>State</label>
            <select name="state" onChange={handleChange} required>
              <option value="">-Select State-</option>
              {stateOptions.map((state) => (
                <option value={state} key={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="dealership-field">
            <label>City</label>
            <select name="city" onChange={handleChange} required>
              <option value="">-Select City-</option>
              {cityOptions.map((city) => (
                <option value={city} key={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="dealership-field">
            <label>Current Business</label>
            <input type="text" name="currentBusiness" placeholder="Current Business" onChange={handleChange} />
          </div>
          <div className="dealership-field">
            <label>Firm Name</label>
            <input type="text" name="firmName" placeholder="Firm Name" onChange={handleChange} />
          </div>
          <div className="dealership-field">
            <label>Current Business Turnover</label>
            <input type="text" name="turnover" placeholder="Current Business Turnover" onChange={handleChange} />
          </div>
          <div className="dealership-field">
            <label>GST No.</label>
            <input type="text" name="gst" placeholder="GST No." onChange={handleChange} />
          </div>
          <div className="dealership-field dealership-field--full">
            <label>Message</label>
            <textarea name="message" rows={3} placeholder="Type your message..." onChange={handleChange} />
          </div>
        </div>
        <div className="dealership-message" id="formMessage"></div>
        <div className="dealership-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

// --- Main Page Export ---
const Dealership = () => (
  <>
    <BannerSection />
    <DealershipForm />
  </>
);

export default Dealership;

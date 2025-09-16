// Inventory.jsx
import React, { useState } from "react";
import "./Gallery.css";
import cruzeon from "../assets/cruzeon.png";
import CruzeBlade from "../assets/Cruze-blade.png";
import EcoShine from "../assets/eco-shine.png";
import EcoSwift from "../assets/EcoSwift.png";
import Ecojoy from "../assets/eco-joy.png";
import EcoGlide from "../assets/Eco-Glider.png";
import Rapidshine from "../assets/Rapi-dsign.png";

const scootyData = [
  {
    title: "Cruze Blade",
    seller: "Ecocruze",  
    type: "Electric",
    fuel: "Battery",
    img: CruzeBlade,
  },
  {
    title: "Eco Shine",
    seller: "Ecocruze",
    type: "Electric",
    fuel: "Battery",
    img: EcoShine,
  },
  {
    title: "Eco Swift",
    seller: "Ecocruze",
   
    type: "Electric",
    fuel: "Battery",
    img: EcoSwift,
  },
  {
    title: "Eco joy",
    seller: "Ecocruze",
  
    type: "Electric",
    fuel: "Battery",
    img: Ecojoy,
  },
  {
    title: "Eco Glider",
    seller: "Ecocruze",

    type: "Electric",
    fuel: "Battery",
    img: EcoGlide,
  },
  {
    title: "Cruzeon",
    seller: "Ecocruze",
  
    type: "Electric",
    fuel: "Battery",
    img: cruzeon,
  },
 {
  title: "Rapid Shine",   // fixed
  seller: "Ecocruze",
  type: "Electric",
  fuel: "Battery",
  img: Rapidshine,
},

   //{
     //title: "ECo Zeon",
     //seller: "Ecocruze",
     //type: "Electric",
     //fuel: "Battery",
    // img: "https://images.unsplash.com/photo-1648204834832-78e68052c04f?w=600",
  // },
  // {
   //  title: 'Eco Whiz',
     //seller: 'Pure EV Dealer',
     //type: 'Electric',
     //fuel: 'Battery',
    // img: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-s/source/iqube-s6825981c36579.jpg',
   //},
  // {
    // title: 'Ampere Magnus',
     //seller: 'Ampere Dealer',
     //cc: '135cc',
     //type: 'Electric',
     //fuel: 'Battery',
   //  img: 'https://images.unsplash.com/photo-1648204834832-78e68052c04f?w=600',
   //},
   //{
     //title: 'Lectrix EV LXS',
     //seller: 'Lectrix India',
     //cc: '125cc',
   //type: 'Electric',
     //fuel: 'Battery',
     //img: 'https://evtechnews.in/wp-content/uploads/2020/07/Ather450X-5.png',
   //},
   //{
     //title: 'Evtric Axis',
     //seller: 'Evtric Motors',
     //cc: '100cc',
     //type: 'Electric',
     //fuel: 'Battery',
     //img: 'https://evtechnews.in/wp-content/uploads/2020/07/Ather450X-5.png',
   //}
];

const Inventory = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, scootyData.length));
  };

  return (
    <section className="inventory-section">
      <div className="inventory-header">
        <h2>Latest Featured Scooty Inventory</h2>
      </div>

      <div className="inventory-grid">
        {scootyData.slice(0, visibleCount).map((scooty, idx) => (
          <div key={idx} className="inventory-card">
            <img src={scooty.img} alt={scooty.title} />
            <h3>{scooty.title}</h3>
            <p>
              <strong>Listed by:</strong> {scooty.seller}
            </p>
            <div className="scooty-info">
              <span>{scooty.cc}</span>
              <span>{scooty.type}</span>
              <span>{scooty.fuel}</span>
            </div>
            <div className="scooty-bottom">
              {/* WhatsApp CTA */}

              <a
                href={`https://wa.me/919557533303?text=Hi%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(
                  scooty.title
                )}.%20Please%20share%20more%20details.%20(No%20price%20disclosed)`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                  alt="WhatsApp"
                  className="whatsapp-icon"
                />
              </a>

              <a
  href={
  scooty.title === "Cruze Blade"
    ? "/cruze-blade-details"
    : (scooty.title === "Eco Shine" || scooty.title === "EcoShine")
    ? "/EcoShine-details"
    : (scooty.title === "Eco joy" || scooty.title === "EcoJoy")
    ? "/ecojoy-details"
    : (scooty.title === "Eco Glider" || scooty.title === "EcoGlider")
    ? "/eco-glider-details"
    : scooty.title === "Cruzeon"
    ? "/cruzeon-details"
    : (scooty.title === "Rapid Shine" || scooty.title === "RapidShine")
    ? "/rapidshine-details"
    : (scooty.title === "Eco Swift" || scooty.title === "EcoSwift")
    ? "/ecoswift-details"
    : "#"
}

  className="view-btn"
  target="_self"
  onClick={(e) => {   
    const supportedTitles = [
      "Cruze Blade",
      "Eco Shine",
      "EcoShine",
      "Eco joy",
      "EcoJoy",
      "Eco Glider",
      "EcoGlider",
      "Cruzeon",
      "Rapid Shine",
      "RapidShine",
      "Eco Swift",
      "EcoSwift"
    ];
    if (!supportedTitles.includes(scooty.title)) {
      e.preventDefault();
      alert("Details page not available yet.");
    }
  }}
>
  View Details →
</a>

            </div>
          </div>
        ))}
      </div>

      {visibleCount < scootyData.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Inventory;

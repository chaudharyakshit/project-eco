// Inventory.jsx
import React, { useState } from "react";
import "./Gallery.css";
import cruzeon from "../assets/cruzeon.png";
import CruzeBlade from "../assets/Cruze-blade.png";
import Ecoshine from "../assets/eco-shine.png";
import EcoSwift from "../assets/EcoSwift.png";
import Ecojoy from "../assets/eco-joy.png";
import EcoGlide from "../assets/Eco-Glider.png";
import Rapidsign from "../assets/Rapi-dsign.png";

const scootyData = [
  {
    title: "Cruze Blade",
    seller: "Ecocruze",
    cc: "120cc",
    type: "Electric",
    fuel: "Battery",
    img: CruzeBlade,
  },
  {
    title: "EcoShine",
    seller: "Ecocruze",
    cc: "150cc",
    type: "Electric",
    fuel: "Battery",
    img: Ecoshine,
  },
  {
    title: "EcoSwift",
    seller: "Ecocruze",
    cc: "100cc",
    type: "Electric",
    fuel: "Battery",
    img: EcoSwift,
  },
  {
    title: "EcoJoy",
    seller: "Ecocruze",
    cc: "120cc",
    type: "Electric",
    fuel: "Battery",
    img: Ecojoy,
  },
  {
    title: "EcoGlider",
    seller: "Ecocruze",
    cc: "130cc",
    type: "Electric",
    fuel: "Battery",
    img: EcoGlide,
  },
  {
    title: "Cruzeon",
    seller: "Ecocruze",
    cc: "110cc",
    type: "Electric",
    fuel: "Battery",
    img: cruzeon,
  },
  {
    title: "Rapidesign",
    seller: "Ecocruze",
    cc: "105cc",
    type: "Electric",
    fuel: "Battery",
    img: Rapidsign,
  },
  {
    title: "Okaya Faast F4",
    seller: "Okaya Mobility",
    cc: "125cc",
    type: "Electric",
    fuel: "Battery",
    img: "https://images.unsplash.com/photo-1648204834832-78e68052c04f?w=600",
  },
  // {
  //   title: 'Pure EV EPluto',
  //   seller: 'Pure EV Dealer',
  //   cc: '115cc',
  //   type: 'Electric',
  //   fuel: 'Battery',
  //   img: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-s/source/iqube-s6825981c36579.jpg',
  // },
  // {
  //   title: 'Ampere Magnus',
  //   seller: 'Ampere Dealer',
  //   cc: '135cc',
  //   type: 'Electric',
  //   fuel: 'Battery',
  //   img: 'https://images.unsplash.com/photo-1648204834832-78e68052c04f?w=600',
  // },
  // {
  //   title: 'Lectrix EV LXS',
  //   seller: 'Lectrix India',
  //   cc: '125cc',
  //   type: 'Electric',
  //   fuel: 'Battery',
  //   img: 'https://evtechnews.in/wp-content/uploads/2020/07/Ather450X-5.png',
  // },
  // {
  //   title: 'Evtric Axis',
  //   seller: 'Evtric Motors',
  //   cc: '100cc',
  //   type: 'Electric',
  //   fuel: 'Battery',
  //   img: 'https://evtechnews.in/wp-content/uploads/2020/07/Ather450X-5.png',
  // }
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
                href={`https://wa.me/918607998882?text=Hi%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(
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
    : scooty.title === "EcoShine"
    ? "/EcoShine-details"
    : scooty.title === "EcoJoy"
    ? "/ecojoy-details"
    : scooty.title === "EcoGlider"
    ? "/eco-glider-details"
    : scooty.title === "Cruzeon"
    ? "/cruzeon-details"
    : scooty.title === "Rapidesign"
    ? "/rapidesign-details"
    : scooty.title === "Ecoswift"
    ? "/ecoswift-details"
    : "#"
}

  className="view-btn"
  target="_self"
  onClick={(e) => {   
    if (scooty.title !== "Cruze Blade" && scooty.title !== "EcoShine" && scooty.title !== "EcoJoy" && scooty.title !== "EcoGlider" && scooty.title !== "Cruzeon" && scooty.title !== "Rapidesign"  && scooty.title !== "") {

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

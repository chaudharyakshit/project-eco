// Inventory.jsx
import React, { useState } from 'react';
import './Gallery.css';

const scootyData = [
  {
    title: 'Ather 450X',
    seller: 'ScootyMart Delhi',
    cc: '120cc',
    type: 'Electric',
    fuel: 'Battery',
    price: '$1,200',
    img: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-s/source/iqube-s6825981c36579.jpg',
  },
  {
    title: 'Ola S1 Pro',
    seller: 'Ola Showroom',
    cc: '150cc',
    type: 'Electric',
    fuel: 'Battery',
    price: '$1,100',
    img: 'https://images.unsplash.com/photo-1648204834832-78e68052c04f?w=600',
  },
  {
    title: 'TVS iQube',
    seller: 'TVS Center',
    cc: '100cc',
    type: 'Electric',
    fuel: 'Battery',
    price: '$890',
    img: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-s/source/iqube-s6825981c36579.jpg',
  },
  {
    title: 'Bajaj Chetak',
    seller: 'Bajaj Auto',
    cc: '120cc',
    type: 'Electric',
    fuel: 'Battery',
    price: '$950',
    img: 'https://images.unsplash.com/photo-1648204834832-78e68052c04f?w=600',
  },
  {
    title: 'Hero Vida V1',
    seller: 'Hero Motors',
    cc: '130cc',
    type: 'Electric',
    fuel: 'Battery',
    price: '$990',
    img: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-s/source/iqube-s6825981c36579.jpg',
  },
  {
    title: 'Simple One',
    seller: 'Simple Energy',
    cc: '110cc',
    type: 'Electric',
    fuel: 'Battery',
    price: '$999',
    img: 'https://images.unsplash.com/photo-1648204834832-78e68052c04f?w=600',
  },
  {
    title: 'Bounce Infinity',
    seller: 'Bounce Co.',
    cc: '105cc',
    type: 'Electric',
    fuel: 'Battery',
    price: '$899',
    img: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-s/source/iqube-s6825981c36579.jpg',
  },
  {
    title: 'Okaya Faast F4',
    seller: 'Okaya Mobility',
    cc: '125cc',
    type: 'Electric',
    fuel: 'Battery',
    price: '$950',
    img: 'https://images.unsplash.com/photo-1648204834832-78e68052c04f?w=600',
  },
  {
    title: 'Pure EV EPluto',
    seller: 'Pure EV Dealer',
    cc: '115cc',
    type: 'Electric',
    fuel: 'Battery',
    price: '$870',
    img: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-s/source/iqube-s6825981c36579.jpg',
  },
  {
    title: 'Ampere Magnus',
    seller: 'Ampere Dealer',
    cc: '135cc',
    type: 'Electric',
    fuel: 'Battery',
    price: '$880',
    img: 'https://images.unsplash.com/photo-1648204834832-78e68052c04f?w=600',
  },
  {
    title: 'Lectrix EV LXS',
    seller: 'Lectrix India',
    cc: '125cc',
    type: 'Electric',
    fuel: 'Battery',
    price: '$940',
    img: 'https://evtechnews.in/wp-content/uploads/2020/07/Ather450X-5.png',
  },
  {
    title: 'Evtric Axis',
    seller: 'Evtric Motors',
    cc: '100cc',
    type: 'Electric',
    fuel: 'Battery',
    price: '$870',
    img: 'https://evtechnews.in/wp-content/uploads/2020/07/Ather450X-5.png',
  }
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
            <p><strong>Listed by:</strong> {scooty.seller}</p>
            <div className="scooty-info">
              <span>{scooty.cc}</span>
              <span>{scooty.type}</span>
              <span>{scooty.fuel}</span>
            </div>
            <div className="scooty-bottom">
              <span className="price">{scooty.price}</span>
              <button className="view-btn">View Details →</button>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < scootyData.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleLoadMore}>Load More</button>
        </div>
      )}
    </section>
  );
};

export default Inventory;

// components/Brands/Brands.jsx
import React from 'react';
import './Brands.css';
import { motion } from 'framer-motion';

const brands = [
  {
    id: 1,
    name: 'Ather',
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjqXjj_QKsMVPOkUZEHfyfj6oAEK63UA6jA&s"
      },    {
    id: 2,
    name: 'Ola Electric',
    logo: 'https://cdn.olaelectric.com/sites/evdp/pages/news_room/press_kit/branding/branding-featured.webp'
  },
  {
    id: 3,
    name: 'TVS iQube',
    logo: 'https://vaishnavient.co.in/wp-content/uploads/2024/06/unnamed-3.jpg'
  },
  {
    id: 4,
    name: 'Bajaj Chetak',
    logo: 'https://cdn.evindia.online/uploads/user/2022-06-07-07-06-40-bajaj-chetak-electric-bike-logo.jpg'
  },
  {
    id: 5,
    name: 'Revolt',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3G2mvNlAuEgjIoxie420La5esQfxPAW7YQ&s'
  },
  {
    id: 6,
    name: 'Hero Electric',
    logo: 'https://www.haptik.ai/hs-fs/hubfs/Hero_electric_040523%20(1).webp?width=1000&height=500&name=Hero_electric_040523%20(1).webp'
  },
  {
    id: 7,
    name: 'Ampere',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYa0g3x00qo_yJ8oZUeVu7mDqoPYvdHx_6w&s'
  },
  {
    id: 8,
    name: 'Pure EV',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsKtKIL_Nb2Z04CRwl2hwqPXj_1LnHHXQ3A&s'
  },
];


const Brands = () => {
  return (
    <section className="brands-section">
      <div className="container">
        <h2 className="section-title">Our Popular Brands</h2>
        <p className="brands-description">
          Dealerships often build strong relationships with local communities by sponsoring events, 
          charities, or local teams, and providing a familiar face for vehicle purchases and service.
        </p>
        <div className="divider"></div>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <motion.div 
              key={brand.id}
              className="brand-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
              <h3 className="brand-name">{brand.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
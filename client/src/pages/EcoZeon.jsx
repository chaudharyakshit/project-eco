import React, { useEffect, useMemo, useState } from 'react';
import './EcoZeon.css';

import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';



import MintGreenFront from '../assets/Inner-Images/Eco Glider/2.png';
import MintGreenleft  from '../assets/Inner-Images/Eco Glider/1.png';
import MintGreenright from '../assets/Inner-Images/Eco Glider/4.png';
import MintGreenside  from '../assets/Inner-Images/Eco Glider/3.png';
// fallback if you later add more images
const PLACEHOLDER = '/src/assets/hero-1.webp';

export default function ScootyDetails() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const product = useMemo(
    () => ({
      name: 'Eco Zeon',
      brand: 'Ecocruze',
      slug: 'ecocruze-spark-x',
      tags: ['New', 'Bestseller'],
      rating: 4.6,
      ratingCount: 128,
      price: 89999,
      mrp: 99999,
      currency: 'INR',
      shortDescription:
        'Electric scooter with 100 km range,Front Disc & Rear Drum  Brake, and commuter‑first ergonomics.',
      includes: ['1 Scooter', '1 Charger', "Owner’s Manual"],
      variants: [
        {
          colorName: 'Mint Green',
          colorHex: '#7FC5B5',
          sku: 'SPARKX-WHT-01',
          stock: 12,
          images: [MintGreenFront, MintGreenleft, MintGreenright, MintGreenside]
        },
        //{
         // colorName: 'Matte Black',
          //colorHex: '#0B0F17',
          //sku: 'SPARKX-BLK-01',
          //stock: 8,
          //images: [blackFront, blackLeft, blackRight, blackSide]
        //},
        //{ 
          //colorName: 'Nebula Green',
           //colorHex: '#2ecc71', 
           //sku: 'SPARKX-NBL-01',
            //stock: 5,
            // images: [greenFront, greenLeft, greenRight, greenSide] 
            //},
        
       // { colorName: 'Lunar Gray',
        //   colorHex: '#95a5a6', 
          // sku: 'SPARKX-LGR-01',
            //stock: 5,
            // images: [grayFront, grayLeft, grayRight, graySide]
             //},
       
       
      //  { colorName: 'Solar Red',
        //   colorHex: '#e74c3c',
          //  sku: 'SPARKX-SRD-01',
            // stock: 5, 
             //images: [redFront, redLeft, redRight, redSide] 
           // },
      ],
      specs: {
        motorPowerW: 1000,
        batteryCapacityWh: 2460,
        rangeKm: 100,
        topSpeedKmph: 60,
        chargingTimeHrs: 3.5,
        braking: 'Front Disc & Rear Drum  Brake',
        suspension: 'Telescopic front, dual shocker rear',
        weightKg: 85,
        dimensions: '	1830X480X1130 mm'
      },
      deliveryReturns: {
        deliveryText: 'Standard delivery in 5–14 working days. Free shipping on eligible orders.',
        returnsText: '7‑day return for manufacturing defects. Registration charges non‑refundable.'
      }
    }),
    []
  );

  const variant = product.variants[variantIndex];
  const gallery = variant.images;

  // Always show 5 thumbnails (auto-fill by repeating images if needed)
  const galleryToShow = useMemo(() => {
    const imgs = [...(gallery || [])];
    if (imgs.length === 0) return imgs;
    while (imgs.length < 5) imgs.push(imgs[imgs.length % (gallery.length || 1)]);
    return imgs.slice(0, 5);
  }, [gallery]);

  useEffect(() => {
    if (activeImageIndex >= galleryToShow.length) setActiveImageIndex(0);
  }, [galleryToShow.length, activeImageIndex]);

  useEffect(() => {
    document.title = `${product.name} | ${product.brand}`;
    const meta =
      document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.name = 'description';
    meta.content = product.shortDescription;
    if (!meta.parentElement) document.head.appendChild(meta);
  }, [product]);

  const currency = (v) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: product.currency || 'INR' }).format(
      v
    );

  return (
    <main className="pdp">
      <div className="pdp-container">
        <nav className="pdp-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="sep">/</span>
          <a href="/scooters">Scooters</a>
          <span className="sep">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <div className="pdp-grid">
          {/* LEFT COLUMN: Gallery + assurance badges */}
          <section className="pdp-gallery">
            <div className="pdp-thumbs" role="list">
              {galleryToShow.map((src, idx) => (
                <button
                  key={String(src) + idx}
                  role="listitem"
                  className={`thumb ${idx === activeImageIndex ? 'is-active' : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                  aria-label={`View image ${idx + 1}`}
                  type="button"
                >
                  <img src={src} alt={`Thumbnail ${idx + 1}`} loading="lazy" />
                </button>
              ))}
            </div>

            <div
              className="pdp-hero"
              onClick={() => setLightboxOpen(true)}
              role="button"
              tabIndex={0}
            >
              <img src={galleryToShow[activeImageIndex]} alt={`${product.name} - ${variant.colorName}`} />
              <div className="zoom-hint">Click to zoom</div>
            </div>

          
          </section>

          {/* RIGHT COLUMN: Summary */}
          <aside className="pdp-summary">
            <div className="pdp-title-row">
              <h1 className="pdp-title">{product.name}</h1>
              <div className="pdp-badges">
                {product.tags.map((t) => (
                  <span className={`badge ${t.toLowerCase()}`} key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pdp-rating">
              <Stars value={product.rating} />
              <span className="rating-num">{product.rating.toFixed(1)}</span>
              <span className="rating-count">({product.ratingCount})</span>
            </div>

            <div className="pdp-price-row">
              <span className="Starting-Text1">Starting at</span>
              <a
                href={`https://wa.me/918607998882?text=Hi, I'm interested in the ${product.name} model!`}
                className="whatsapp-link1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                  alt="WhatsApp"
                  className="whatsapp-icon2"
                />
              </a>
            </div>

            <p className="pdp-desc">{product.shortDescription}</p>
            <p className="pdp-includes">Includes: {product.includes.join(', ')}</p>

            <div className="pdp-variant">
              <div className="label">Colour</div>
              <div className="swatches" role="radiogroup" aria-label="Select color">
                {product.variants.map((v, i) => (
                  <button
                    key={v.sku}
                    role="radio"
                    aria-checked={i === variantIndex}
                    className={`swatch ${i === variantIndex ? 'is-selected' : ''}`}
                    style={{ backgroundColor: v.colorHex }}
                    onClick={() => {
                      setVariantIndex(i);
                      setActiveImageIndex(0);
                    }}
                    title={v.colorName}
                    type="button"
                  />
                ))}
              </div>
              <div className="variant-name">{variant.colorName}</div>
            </div>

            {/* pdp-cta intentionally removed */}
            
            <div className="pdp-trust">
              <TrustItem icon="🚚" label="Free Shipping" sub="On eligible orders" />
              <TrustItem icon="↩️" label="Easy Returns" sub="7‑day policy" />
              <TrustItem icon="🔒" label="Secure Payment" sub="PCI DSS" />
            </div>

            <Accordion title="Details">
              <KeyValueList specs={product.specs} />
            </Accordion>

            <Accordion title="Delivery & Returns">
              <p className="plain">{product.deliveryReturns.deliveryText}</p>
              <p className="plain">{product.deliveryReturns.returnsText}</p>
            </Accordion>

            {/* Assurance icons (gold SVG) on the right too */}
            <section className="assurance">
              <div className="assurance-grid">
                <div className="assurance-item">
                  <span className="ai-icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" stroke="#f0b429" strokeWidth="1.8" fill="none"/><path d="M8 12l2 2 6-6" stroke="#f0b429" strokeWidth="1.8" fill="none"/></svg>
                  </span>
                  <div>
                    <div className="ai-title">Easy Exchange</div>
                    <div className="ai-sub">Easy exchange & return</div>
                  </div>
                </div>
                <div className="assurance-item">
                  <span className="ai-icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="10" rx="2" stroke="#f0b429" strokeWidth="1.8"/><path d="M7 10V7a5 5 0 0 1 10 0v3" stroke="#f0b429" strokeWidth="1.8"/></svg>
                  </span>
                  <div>
                    <div className="ai-title">Secure Payment</div>
                    <div className="ai-sub">Secure payment</div>
                  </div>
                </div>
                <div className="assurance-item">
                  <span className="ai-icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 7h16l2 5H6M3 7l3 10h12" stroke="#f0b429" strokeWidth="1.8"/><circle cx="10" cy="20" r="1.6" stroke="#f0b429" strokeWidth="1.8"/><circle cx="17" cy="20" r="1.6" stroke="#f0b429" strokeWidth="1.8"/></svg>
                  </span>
                  <div>
                    <div className="ai-title">Express Pickup</div>
                    <div className="ai-sub">Stores near you</div>
                  </div>
                </div>
                <div className="assurance-item">
                  <span className="ai-icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#f0b429" strokeWidth="1.8"/><path d="M8.5 12l2.5 2.5L15.5 10" stroke="#f0b429" strokeWidth="1.8"/></svg>
                  </span>
                  <div>
                    <div className="ai-title">Authentic Products</div>
                    <div className="ai-sub">100% Genuine</div>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>

      <div className="pdp-sticky-cta">
        <span className="Starting-Text1">Starting at</span>
        <a
          href={`https://wa.me/9195575 33303?text=Hi, I'm interested in the ${product.name} model!`}
          className="whatsapp-link1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            alt="WhatsApp"
            className="whatsapp-icon2"
          />
        </a>
      </div>
             <CTA />
      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <img src={galleryToShow[activeImageIndex]} alt="Zoomed" />
        </div>
      )}
    </main>
  );
}

function Stars({ value = 0 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span className="stars" aria-label={`${value} out of 5`}>
      {'★'.repeat(full)}
      {half ? '★' : ''}
      {'☆'.repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
}

function TrustItem({ icon, label, sub }) {
  return (
    <div className="trust-item">
      <span className="ic">{icon}</span>
      <div className="txt">
        <div className="label">{label}</div>
        <div className="sub">{sub}</div>
      </div>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="accordion">
      <button
        className="acc-head"
        onClick={() => setOpen(!open)}
        type="button"
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className={`chev ${open ? 'up' : ''}`}>⌄</span>
      </button>
      {open && <div className="acc-body">{children}</div>}
    </section>
  );
}

function KeyValueList({ specs }) {
  const rows = [
    ['Motor', specs?.motorPowerW ? `${specs.motorPowerW} W` : '-'],
    ['Battery', specs?.batteryCapacityWh ? `${specs.batteryCapacityWh} Wh` : '-'],
    ['Range', specs?.rangeKm ? `${specs.rangeKm} km` : '-'],
    ['Top Speed', specs?.topSpeedKmph ? `${specs.topSpeedKmph} km/h` : '-'],
    ['Charging', specs?.chargingTimeHrs ? `${specs.chargingTimeHrs} hrs` : '-'],
    ['Braking', specs?.braking || '-'],
    ['Suspension', specs?.suspension || '-'],
    ['Weight', specs?.weightKg ? `${specs.weightKg} kg` : '-'],
    ['Dimensions', specs?.dimensions || '-']
  ];
  return (
    <ul className="kv">
      {rows.map(([k, v]) => (
        <li key={k}>
          <span className="k">{k}</span>
          <span className="v">{v}</span>
        </li>
      ))}
    </ul>
  );
} // components/CTA/CTA.jsx




// CTA Component Definition
const CTA = () => {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="cta-title">Ready to Ride the Ecocruze?</h2>
        <p className="cta-text">
          Schedule a test ride at your nearest Thunderbolt dealer and experience the power,
          performance, and craftsmanship for yourself.
        </p>
        <a href="/dealership" className="btn btn-primary">
          Find a Dealer
        </a>
      </motion.div>
    </section>
  );
};
import React from "react";
import "./Newssection.css";

// Banner Component
const BannerSection = () => (
  <section className="bold-banner1">
    <div className="bold-banner-bg1" />
  </section>
);

// Local images
import img from "../assets/news1.jpg";
import img1 from "../assets/news2.jpg";
import img2 from "../assets/news3.jpg";
import img3 from "../assets/news4.jpg";
import img5 from "../assets/news5.jpg";

// News items data
const newsItems = [
  {
    id: 1,
    image: img,
    tag: "",
    tagColor: "#000000",
    lang: "hi",
    title: "बॉलीवुड एक्टर अरूण बख्शी जी आज indiasgo के कॉपोर्रेट ऑफिस नोएडा पहुंचे और प्रोजेक्टindiasgo Trip और इकॉक्रूज स्कूटी के प्रोजेक्ट पर हुई चर्चा ऑटोफ़्लेज प्रोजेक्ट की प्लानिंग हुई सफल",
    link: "#"
  },
  {
    id: 2,
    image: img1,
    tag: "",
    tagColor: "#222",
    lang: "hi",
    title: "_Ecocruze Launches Eco-Friendly Scooty Model GreenZoom_ 👍💻",
    
  },
  {
    id: 3,
    image: img2,
    tag: "",
    tagColor: "#e26c21",
    lang: "hi",
    title: "_Indiasgo Digital Pvt Ltd Honoured With More Than 10 National Awards",
    link: "https://www.worldnewsblogs.co.in/2023/03/02/indiasgo-digital-pvt-ltd-honoured-with-more-than-10-national-awards/"
  },
  {
    id: 4,
    image: img3,
    tag: "",
    tagColor: "#e26c21",
    lang: "hi",
    title: "Indiasgo ke डायल India की लॉन्चिंग हुई मुंबई में",
    link: "#"
  },
  {
    id: 5,
    image: img5,
    tag: "",
    tagColor: "#e26c21",
    lang: "en",
    title: "We have achieved this position with our hard work, our goal is to make the company the best company in the world: Vijender Goswami",
    link: "https://newsnetworks.co.in/en/2023/03/02/we-have-achieved-this-position-with-our-hard-work-our-goal-is-to-make-the-company-the-best-company-in-the-world-vijender-goswami/"
  },
  {
    id: 6,
    image: img1,
    tag: "",
    tagColor: "#e26c21",
    lang: "en",
    title: "इकोक्रूज़ ने नई पर्यावरण अनुकूल उत्पाद श्रृंखला लॉन्च की*",
    link: ""
  }
];

// Main Component
const Newssection = () => (
  <>
    <BannerSection />
    <div className="news-root">
      <h1 className="news-title">News</h1>
      <p className="news-subhead">Grab The Latest News And Announcements</p>
      <div className="news-grid">
        {newsItems.map(item => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="news-card"
            key={item.id}
          >
            <div className="news-img-box">
              <img src={item.image} alt={item.title} className="news-img" />
              {item.tag && (
                <span className="news-tag" style={{ background: item.tagColor }}>
                  {item.tag}
                </span>
              )}
            </div>
            <div className={`news-card-body lang-${item.lang}`}>
              <p className="news-desc">{item.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </>
);

export default Newssection;
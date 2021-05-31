import React from "react";
import Feature from "./Feature";
import icon1 from "../assets/icon-brand-recognition.svg";
import icon2 from "../assets/icon-detailed-records.svg";
import icon3 from "../assets/icon-fully-customizable.svg";

const data = [
  {
    icon: icon1,
    heading: "Brand Recognition",
    details:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: icon2,
    heading: "Detailed Records",
    details:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: icon3,
    heading: "Fully Customizable",
    details:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

function Features(props) {
  return (
    <section className="section section-features">
      <div className="container">
        <div className="features">
          <div className="features__intro">
            <h2 className="features__heading">Advanced Statistics</h2>
            <p className="features__tagline">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="feature-group">
            {data.map((feature) => (
              <Feature
                icon={feature.icon}
                heading={feature.heading}
                details={feature.details}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

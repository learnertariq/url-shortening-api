import React from "react";
import introImage from "../assets/illustration-working.svg";
import Button from "./common/Button";

function Intro(props) {
  return (
    <section className="section section-intro">
      <div className="container">
        <div className="intro">
          <img
            className="image intro__image"
            src={introImage}
            alt="working image intro section"
          />
          <div className="intro__details">
            <h1 className="intro__heading">More than just shorter links</h1>
            <p className="intro__tagline">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button category="primary" text="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;

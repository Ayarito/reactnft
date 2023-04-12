import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <p className="about">What is an NFT?</p>
        <p className="about__Text">
          NFT - non-fungible token, but that doesn’t make it any clearer.
          <br />
          “Non-fungible” more or less means that it’s unique and can’t be
          replaced with something else. For example, a bitcoin is fungible —
          trade one for another bitcoin, and you’ll have exactly the same thing.
          A one-of-a-kind trading card, however, is non-fungible. If you traded
          it for a different card, you’d have something completely different.
        </p>
        <p className="about__Text">
          NFTs can really be anything digital (such as drawings, music, your
          brain downloaded and turned into an AI), but a lot of the current
          excitement is around using the tech to sell digital art.{" "}
        </p>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { rest_chef_mid, rest2_mid } from "../utils";

const About = () => {
  return (
    <section className="about_section _max_width_center">
      <section className="about_text_content" >
        <header>
          <h1 className="about_text_content_header_h1">Our Story</h1>
        </header>
        <p className="about_text_content_p">
        Nestled in the heart of Chicago, Little Lemon is celebrated for its mouthwatering dishes crafted from fresh, locally sourced ingredients. With a warm, inviting atmosphere and exceptional service, its the perfect spot for both relaxed meals and special gatherings. Savor unforgettable flavors and experiences at Little Lemon.
        </p>
      </section>
      <section className="about_image_content">
        <figure className="about_image_content_figure">
          <img
            className="about_image_img  about_fig1"
            loading="lazy"
            src={rest_chef_mid}
            alt="rest"
          />
        </figure>
      </section>
    </section>
  );
};

export default About;

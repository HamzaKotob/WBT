import React from 'react';
import "../css/bootstrap.css";
import "../css/responsive.css";
import "../css/style.css";


function AboutSection() {
  return (
    <section class="about_section ">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="img-box">
            <img src="images/about-img2.png" alt=""/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                About Us
              </h2>
            </div>
            <p>
            As a web solution company, we are committed to helping businesses establish and maintain a strong online presence. We offer a range of services, including web design, web development, e-commerce solutions, digital marketing, and web hosting. Our team of experts is dedicated to delivering high-quality solutions that are tailored to meet the unique needs of our clients. We take pride in our ability to provide exceptional customer service and support, and we strive to build long-term relationships with our clients based on trust and mutual respect. At our web solution company, we believe that every business deserves a powerful and effective online presence, and we are here to help make that happen.
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
export default AboutSection ;

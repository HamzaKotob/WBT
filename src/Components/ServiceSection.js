import React from 'react';
import "../css/bootstrap.css";
import "../css/responsive.css";
import "../css/style.css";


function ServiceSection() {
  return (
    <section class="service_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container">
        <h2>
          Our Services
        </h2>
        <p>
        At our web solution company, we offer a wide range of services to help businesses establish and maintain a strong online presence
        </p>
      </div>

      <div class="service_container">
        <div class="box">
          <div class="img-box">
            <img src="images/s-1.png" alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Brand Promotion
            </h5>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="images/s-2.png" alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Video Marketing

            </h5>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="images/s-3.png" alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Site Analysis
            </h5>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="images/s-4.png" alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              Social Media Marketing
            </h5>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src="images/s-5.png" alt=""/>
          </div>
          <div class="detail-box">
            <h5>
              SEO Optimization
            </h5>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <a href="">
          Read More
        </a>
      </div>
    </div>
  </section>
  );
}
export default ServiceSection ;

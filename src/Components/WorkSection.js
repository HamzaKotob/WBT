import React from 'react';
import "../css/bootstrap.css";
import "../css/responsive.css";
import "../css/style.css";


function WorkSection() {
  return (
    <section class="work_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          How We Work!
        </h2>
        <p>
        At our web solution company, we believe in a collaborative approach to our work.        </p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="detail_container">
            <div class="box b-1">
              <div class="top-box">
                <div class="icon-box">
                  <img src="images/work-i1.png" alt=""/>
                </div>
                <h5>
                  We Generate A Good Idea First
                </h5>
              </div>
              <div class="bottom-box">
                <p>
                At our web solution company, we believe that generating a good idea is the foundation for creating a successful project. We work closely with our clients to understand their business objectives, target audience, and industry trends to generate a unique and effective idea for their project.
                </p>
              </div>
            </div>
            <div class="box b-1">
              <div class="top-box">
                <div class="icon-box">
                  <img src="images/work-i2.png" alt=""/>
                </div>
                <h5>
                  Then We Start Applying Ideas
                </h5>
              </div>
              <div class="bottom-box">
                <p>
                Our team of experts brainstorms and collaborates to come up with creative and innovative ideas that align with our clients' goals and needs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box">
            <img src="images/work-img.png" alt=""/>
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
export default WorkSection ;

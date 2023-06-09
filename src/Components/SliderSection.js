import React from 'react';
import "../css/bootstrap.css";
import "../css/responsive.css";
import "../css/style.css";


function SliderSection() {
  return (
    <section class=" slider_section ">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col-md-6 ">
                <div class="detail_box">
                  <h1>
                    The best marketing
                  </h1>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking
                  </p>
                  <div class="btn-box">
                    <a href="" class="btn-1">
                      Contact Us
                    </a>
                    <a href="" class="btn-2">
                      Get A Quote
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="img-box">
                  <img src="images/slider-img.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="container">
            <div class="row">
              <div class="col-md-6 ">
                <div class="detail_box">
                  <h1>
                    The best marketing
                  </h1>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking
                  </p>
                  <div class="btn-box">
                    <a href="" class="btn-1">
                      Contact Us
                    </a>
                    <a href="" class="btn-2">
                      Get A Quote
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="img-box">
                  <img src="images/slider-img.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="container">
            <div class="row">
              <div class="col-md-6 ">
                <div class="detail_box">
                  <h1>
                    The best marketing
                  </h1>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking
                  </p>
                  <div class="btn-box">
                    <a href="" class="btn-1">
                      Contact Us
                    </a>
                    <a href="" class="btn-2">
                      Get A Quote
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="img-box">
                  <img src="images/slider-img.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel_btn-container">
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
  );
}
export default SliderSection ;

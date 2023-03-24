import React from 'react';
import "../css/bootstrap.css";
import "../css/responsive.css";
import "../css/style.css";


function Footer() {
  return (

<div class="footer_bg">
    <section class="contact_section layout_padding" id="contact">
      <div class="container">
        <div class="heading_container">
          <h2>
            Get In touch
          </h2>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-8 mx-auto">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input type="text" class="form-control" id="inputName4" placeholder="Name "/>
                </div>
                <div class="form-group col-md-6">
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Email id"/>
                </div>

              </div>
              <div class="form-row">
                <div class="form-group col">
                  <input type="text" class="form-control" id="inputSubject4" placeholder="Subject"/>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="inputMessage" placeholder="Message"/>
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="info_section layout_padding2">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="info_logo">
              <h3>
                WBT
              </h3>
              <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_links">
              <h4>
                BASIC LINKS
              </h4>
              <ul class="  ">
                <li class=" active">
                  <a class="" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="">
                  <a class="" href="/about"> About</a>
                </li>
                <li class="">
                  <a class="" href="/service"> Services </a>
                </li>
                <li class="">
                  <a class="" href="#contactLink">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_contact">
              <h4>
                CONTACT DETAILS
              </h4>
              <a href="">
                <div class="img-box">
                  <img src="images/telephone-white.png" width="12px" alt=""/>
                </div>
                <p>
                  +01 1234567890
                </p>
              </a>
              <a href="">
                <div class="img-box">
                  <img src="images/envelope-white.png" width="18px" alt=""/>
                </div>
                <p>
                  demo@gmail.com
                </p>
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_form ">
              <h4>
                NEWSLETTER
              </h4>
              <form action="">
                <input type="email" placeholder="Enter your email"/>
                <button>
                  Subscribe
                </button>
              </form>
              <div class="social_box">
                <a href="">
                  <img src="images/info-fb.png" alt=""/>
                </a>
                <a href="">
                  <img src="images/info-twitter.png" alt=""/>
                </a>
                <a href="">
                  <img src="images/info-linkedin.png" alt=""/>
                </a>
                <a href="">
                  <img src="images/info-youtube.png" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid footer_section">
      <div class="container">
        <p>
          
          <span id="displayYear"></span> All Rights Reserved By
          
        </p>
      </div>
    </section>    
    </div>
  );
}
export default Footer ;

import React from 'react';
import { Link } from 'react-router-dom';
import "../css/bootstrap.css";
import "../css/responsive.css";
import "../css/style.css";


function Header() {
  return (
    <header class="header_section">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <Link class="navbar-brand" to="/">
            <span>
              WBT
            </span>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="s-1"> </span>
            <span class="s-2"> </span>
            <span class="s-3"> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/About"> About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/service"> Services </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href='#contact'>Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="quote_btn-container ">
              <a href="">
                <img src="images/call.png" alt=""/>
                    <span>
                    Call : + 01 1234567890
                    </span>
              </a>
                
              <form class="form-inline">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
    </div>
    </header>
  );
}
export default Header;

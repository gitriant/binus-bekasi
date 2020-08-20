import React, { Component } from "react";

import Ribbon from "../../../src/img/ribbon.png";
import Logo from "../../img/logo.png";
import "../Header/Header.css";
class Header extends Component {
  render() {
    return (
      <div class="row header">
        <div class=" ">
          <div className="ribbon">
            <img src={Ribbon} alt="Ribbon header"></img>
          </div>
        </div>
        <div class="">
          <div className="logo">
            <a href="http://">
              <img src={Logo} class="img-fluid" alt="Logo Header"></img>
            </a>
            <span>People Innovation Excellence</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

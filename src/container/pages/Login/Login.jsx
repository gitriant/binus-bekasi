import React, { Component } from "react";
import "../Login/Login.css";
import Ribbon from "../../../img/ribbon.png";
import Logo from "../../../img/logo.png";
import User from "../../../img/user.svg";
import Password from "../../../img/password.svg";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="wrapper-login">
        <div class="row ">
          <div class=" ">
            <div className="ribbon">
              <img src={Ribbon} alt="Ribbon login" />
            </div>
          </div>
          <div class="">
            <div className="logo-login">
              <a href="http://">
                <img src={Logo} class="img-fluid" alt="Logo login" />
              </a>
              <span class="logo-p">People Innovation Excellence</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="form-login">
          <div class="input-group mb-3 ">
            <div class="input-group-prepend">
              <span class="input-group-text user" id="basic-addon1">
                <img src={User} alt="" />
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">
                @binus.edu
              </span>
            </div>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text user" id="basic-addon1">
                <img src={Password} alt="" />
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon2"
            ></input>
            <small id="passwordHelpBlock" class="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </small>
            <Link
              to="/dashboard"
              class="btn btn-primary btn-block"
              href="#"
              role="button"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

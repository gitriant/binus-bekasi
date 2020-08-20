import React, { Component, Fragment } from "react";
import "../Home/Home.css";
import Carousel from "../../component/Carousel/Carousel";
import Header from "../../component/Header/Header";
import { Link } from "react-router-dom";
// import Background from "../../img/background.jpg";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div class="container">
          <Header />
          <div className="row content">
            <Carousel />
            <div className="col menu">
              <div class="list-group text-center">
                <img src="https://placeimg.com/500/250/tech" alt="" />
                <Link
                  to="/login"
                  class="list-group-item list-group-item-action active"
                >
                  Login
                </Link>
                <Link to="#" class="list-group-item list-group-item-action">
                  Forgot Your Password?
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center footer">
            <p>Copyright &copy;2020 - IT Bekasi</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../Dashboard/Dashboard.css";
import Header from "../../../component/Header/Header";
import Checkout from "../../../img/checkout.svg";
// import Right from "../../../img/arrow-right.png";
import Left from "../../../img/arrow-left.png";
import Burger from "../../../img/burger.svg";
import { Link } from "react-router-dom";
import Transaction from "../Transaction/Transaction";
import History from "../History/History";
import Event from "../Event/Event";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active: false,
    };
  }

  addActiveClass() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState,
    });
    console.log(this.state.active);
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className="container-fluid">
            <div className="dashboard-header">
              <Header />

              <div
                className={this.state.active ? "d-flex toggled" : "d-flex"}
                id="wrapper"
              >
                <div
                  class="bg-light border-right nav-side"
                  id="sidebar-wrapper"
                >
                  <div class="sidebar-heading bold">Menu </div>
                  <div class="list-group list-group-flush ">
                    <Link
                      to="/dashboard"
                      // data-toggle="pill"
                      href="#"
                      class="list-group-item list-group-item-action bg-light"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/dashboard/event"
                      class=" list-group-item list-group-item-action bg-light"
                    >
                      Create Event
                    </Link>
                    <Link
                      to="/dashboard/transaction"
                      class=" list-group-item list-group-item-action bg-light"
                    >
                      Transaction
                    </Link>
                    <Link
                      to="/dashboard/history"
                      class="list-group-item list-group-item-action bg-light"
                    >
                      History
                    </Link>
                    <a
                      href="/#"
                      class="list-group-item list-group-item-action bg-light"
                    >
                      Events
                    </a>
                    <a
                      href="/#"
                      class="list-group-item list-group-item-action bg-light"
                    >
                      Profile
                    </a>
                    <a
                      href="/#"
                      class="list-group-item list-group-item-action bg-light"
                    >
                      Status
                    </a>
                  </div>
                </div>
                {/* <!-- /#sidebar-wrapper --> */}

                {/* <!-- Page Content --> */}
                <div id="page-content-wrapper">
                  <nav class="navbar navbar-expand navbar-light bg-light border-bottom">
                    <button
                      onClick={this.addActiveClass}
                      class="btn btn-primary "
                      id="menu-toggle"
                    >
                      <img src={this.state.active ? Burger : Left} alt="" />
                    </button>

                    {/* <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                > */}
                    {/* <span class="navbar-toggler-icon"></span> */}
                    {/* </button> */}

                    {/* <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                > */}
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                      <li class="nav-item">
                        <a class="checkout nav-link disabled" href="/#">
                          <img
                            className="logo-checkout"
                            src={Checkout}
                            alt="logo checkout"
                          />
                          <span className="count">3</span>
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="/#"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Hai, Yogi
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="/#">
                            Profil
                          </a>
                          <a class="dropdown-item" href="/#">
                            Account setting
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="/#">
                            Sign Out
                          </a>
                        </div>
                      </li>
                    </ul>
                    {/* </div> */}
                  </nav>

                  <div class="container-fluid">
                    {/* <Route path="/dashboard" component={Dashboard} /> */}
                    dashboard
                    <Route path="/dashboard/event" component={Event} />
                    <Route
                      path="/dashboard/transaction"
                      component={Transaction}
                    />
                    <Route path="/dashboard/history" component={History} />
                  </div>
                </div>
                {/* <!-- /#page-content-wrapper --> */}
              </div>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default Dashboard;

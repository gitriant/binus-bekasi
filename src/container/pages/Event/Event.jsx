import React, { Component, Fragment } from "react";
import Date from "../../../component/Date/Datepicker";

class Event extends Component {
  render() {
    return (
      <Fragment>
        <form class="col-12">
          <h5 class="card-title">Create Event</h5>
          <div class="form-group">
            <label for="exampleFormControlInput1">Event Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            ></input>
          </div>
          <div class="form-group mr-5">
            <label for="exampleFormControlInput1">Date</label>
            <br />

            <label className="mr-3" for="exampleFormControlInput1">
              From
            </label>
            <Date />
            <label className="mx-3" for="exampleFormControlInput1">
              To
            </label>
            <Date />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Room</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Select</option>
              <option>MMG</option>
              <option>Big Tribun</option>
              <option>Library</option>
              <option>BHM</option>
              <option>Canteen</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Notes</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="button" class="btn btn-primary">
            Next
          </button>
        </form>
      </Fragment>
    );
  }
}

export default Event;

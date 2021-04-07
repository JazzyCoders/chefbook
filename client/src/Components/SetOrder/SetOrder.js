import React, { Component } from "react";
import { withRouter } from "react-router-dom";

//logic:
import logic from "../logic";

//components:
import Popup from "./Popup";
import Error from "./Error";

class SetOrder extends Component {
  state = {
    errorMessage: null,
    place: "",
    day: "",
    month: "",
    year: "",
    time: "",
    comments: "",
    holder: "",
    num: "",
    exmonth: "",
    exyear: "",
    cvc: "",
    showFirstForm: true,
    showSecondForm: false,
    showModal: false
  };

  onGoBack = e => {
    e.preventDefault();
    logic.deleteUnfinishedOrders().then(() => this.props.history.push("/cart"));
  };

  onGoBackToDetails = event => {
    //to go from 2nd form to the 1st one
    event.preventDefault();
    this.setState({ showFirstForm: true, showSecondForm: false });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ ...this.state, [name]: value });
  };

  displayMonthDays = () => {
    let arr = [];

    for (let i = 1; i <= 31; i++) {
      arr.push(
        <option className="form-control" key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };

  displayMonths = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return months.map((month, i) => (
      <option className="form-control" key={i} value={month}>
        {month}
      </option>
    ));
  };

  displayMonthNum = () => {
    let arr = [];

    for (let i = 1; i <= 12; i++) {
      arr.push(
        <option className="form-control" key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };

  onDetailsSubmit = event => {
    //go to 2nd form:
    event.preventDefault();

    if (
      !this.state.place ||
      !this.state.day ||
      !this.state.month ||
      !this.state.year ||
      !this.state.time
    ) {
      this.setState({
        errorMessage: "Some required fields still empty!"
      });
    } else {
      this.setState({
        errorMessage: null,
        showFirstForm: false,
        showSecondForm: true
      });
    }
  };

  onPaySubmit = event => {
    event.preventDefault();
    if (
      !this.state.holder ||
      !this.state.num ||
      !this.state.exmonth ||
      !this.state.exyear ||
      !this.state.cvc
    ) {
      this.setState({
        errorMessage: "Some required fields still empty!"
      });
    } else {
      try {

        const { place, day, month, year, time, comments } = this.state;



        export default withRouter(SetOrder)
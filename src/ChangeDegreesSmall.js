import React, { Component } from "react";
import "./ChangeDegreesSmall.css";

export default class ChangeDegrees extends Component {
  state = {
    unit: "metrics"
  };

  imperial = () => {
    this.setState({
      unit: "imperial",
      imperialTemp: Math.round(this.props.temperature * (9 / 5) + 32)
    });
  };

  metrics = () => {
    this.setState({
      unit: "metrics"
    });
  };

  render() {
    if (this.state.unit === "metrics") {
      return (
        <div>
          <big>{this.props.temperature}</big>
          <small>°C</small>
          <span onClick={this.imperial} className="active">
            {" "}
            <small>°F</small>
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <big>{this.state.imperialTemp}</big>
          <span onClick={this.metrics} className="active">
            <small>°F</small>
          </span>{" "}
          <small>°C</small>
        </div>
      );
    }
  }
}

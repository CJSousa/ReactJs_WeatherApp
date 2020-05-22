import React, { Component } from "react";

export default class HumanDate extends Component {
  HumanizeDate = () => {
    let date = new Date(
      this.props.timestamp * 1000 + (this.props.timezone - 3600) * 1000
    );
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  };

  render() {
    return <div>{this.HumanizeDate()}</div>;
  }
}

import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
library.add(faSun);
library.add(faMoon);

export default class BadgeTemp extends Component {
  timeConverter = epoch => {
    let a = new Date(epoch * 1000);
    let hour = a.getHours();
    return hour;
  };

  getMode = () => {
    let today = this.props.timestamp;
    let timezone = this.props.timezone;
    let difference = today + timezone - 3600;
    let hours = this.timeConverter(difference);
    let sunrise = this.props.sunrise;
    let difference2 = sunrise + timezone - 3600;
    let currentSunrise = this.timeConverter(difference2) - 1;
    let sunset = this.props.sunset;
    let difference3 = sunset + timezone - 3600;
    let currentSunset = this.timeConverter(difference3) - 1;
    if (hours >= currentSunset || hours <= currentSunrise) {
      return <Icon color="black" icon="moon" />;
    } else {
      return <Icon color="grey" icon="sun" />;
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>{this.getMode()}</div>
        </div>
      </div>
    );
  }
}

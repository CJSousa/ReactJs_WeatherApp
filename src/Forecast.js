import React, { Component } from "react";
import HumanDate from "./HumanDate";
import WeatherIcon from "./WeatherIcon";
import ChangeDegreesSmall from "./ChangeDegreesSmall";

export default class Forecast extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <HumanDate
              timestamp={this.props.date}
              timezone={this.props.timezone}
            />
          </li>
          <li>{this.props.description}</li>
        </ul>
        <div>
          <WeatherIcon weather={this.props.description} />
        </div>
        <div>
          <ChangeDegreesSmall temperature={this.props.temp} />
        </div>
        <ul>
          <li>Humidity: {this.props.humidity}%</li>
          <li>Wind: {this.props.wind}km/h</li>
        </ul>
      </div>
    );
  }
}

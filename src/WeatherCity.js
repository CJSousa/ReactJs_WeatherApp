import React, { Component } from "react";
import axios from "axios";
import BadgeTemp from "./BadgeTemp";
import Loader from "react-loader-spinner";
import HumanDate from "./HumanDate";
import WeatherIcon from "./WeatherIcon";
import ChangeDegrees from "./ChangeDegrees";
import NightDayIcon from "./NightDayIcon";
import "./Weather.css";

export default class WeatherCity extends Component {
  apiKey = "fe2620391e46a749fe8f3650ad56b3d3";
  apiRoot = "https://api.openweathermap.org";

  state = {
    loaded: false
  };

  showResults = response => {
    this.setState({
      weatherLoaded: true,
      weather: {
        date: response.data.dt,
        timezone: response.data.timezone,
        city: response.data.name,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset
      }
    });
  };

  search = city => {
    let apiUrl = `${this.apiRoot}/data/2.5/weather?q=${city}&appid=${
      this.apiKey
    }&units=metric`;
    axios.get(apiUrl).then(this.showResults);
  };

  componentDidMount() {
    this.search(this.props.city);
  }

  render() {
    if (this.state.weatherLoaded) {
      return (
        <div>
          <div>
            <BadgeTemp temperaturestamp={this.state.weather.temperature} />
          </div>
          <h1>{this.props.city}</h1>
          <ul>
            <li>
              <NightDayIcon
                timestamp={this.state.weather.date}
                timezone={this.state.weather.timezone}
                sunrise={this.state.weather.sunrise}
                sunset={this.state.weather.sunset}
              />
              <HumanDate
                timestamp={this.state.weather.date}
                timezone={this.state.weather.timezone}
              />
            </li>
            <li className="description">{this.state.weather.description}</li>
          </ul>
          <div className="clearfix">
            <div className="weather float-left">
              <WeatherIcon weather={this.state.weather.description} />
            </div>
            <div className="temperature float-left">
              <ChangeDegrees temperature={this.state.weather.temperature} />
            </div>
          </div>
          <br />
          <ul>
            <li>Humidity: {this.state.weather.humidity}%</li>
            <li>Wind: {this.state.weather.wind}km/h</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="loader">
          <Loader type="Plane" color="#333" height="100" width="100" />;
        </div>
      );
    }
  }
}

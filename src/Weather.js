import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import BadgeTemp from "./BadgeTemp";
import HumanDate from "./HumanDate";
import WeatherIcon from "./WeatherIcon";
import ChangeDegrees from "./ChangeDegrees";
import NightDayIcon from "./NightDayIcon";
import "./Weather.css";

export default class Weather extends Component {
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
        wind: Math.round(response.data.wind.speed)
      }
    });
  };

  clickForCurrentWeather = () => {
    let showRes = this.showResults;
    function showPosition(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      let apiKey = "fe2620391e46a749fe8f3650ad56b3d3";
      let apiEndPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiEndPoint).then(showRes);
    }

    navigator.geolocation.getCurrentPosition(showPosition);
  };

  render() {
    if (this.state.weatherLoaded) {
      return (
        <div>
          <Button
            variant="outline-secondary"
            onClick={this.clickForCurrentWeather}
          >
            Current Weather
          </Button>
          <br />
          <br />
          <BadgeTemp temperaturestamp={this.state.weather.temperature} />
          <h1>{this.state.weather.city}</h1>
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
          <div className="row">
            <div className="col-sm-6">
              <div className="clearfix">
                <div className="weather float-left">
                  <WeatherIcon weather={this.state.weather.description} />
                </div>
                <div className="temperature float-left">
                  <ChangeDegrees temperature={this.state.weather.temperature} />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>Humidity: {this.state.weather.humidity}%</li>
                <li>Wind: {this.state.weather.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Button
          variant="outline-secondary"
          onClick={this.clickForCurrentWeather}
        >
          Current Weather
        </Button>
      );
    }
  }
}

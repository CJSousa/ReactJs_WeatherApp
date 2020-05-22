import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default class WeatherIcon extends Component {
  ShowIcon = () => {
    if (this.props.weather === "clear sky") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "few clouds") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "scattered clouds") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "broken clouds") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "overcast clouds") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "shower rain") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "rain") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "moderate rain") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "light rain") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "light intensity shower rain") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "shower rain") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "thunderstorm") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "snow") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="SNOW"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "mist") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="FOG"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    } else if (this.props.weather === "haze") {
      return (
        <div>
          <ReactAnimatedWeather
            icon="FOG"
            color="black"
            size={55}
            animate={true}
          />
        </div>
      );
    }
  };

  render() {
    return <div>{this.ShowIcon()}</div>;
  }
}

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import WeatherCity from "./WeatherCity";
import WeatherForm from "./WeatherForm";
import Title from "./Title";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <Title />
        <div className="card m-5">
          <div className="card-body">
            <WeatherForm city="Madrid" />
          </div>
        </div>
        <div className="card m-5">
          <div className="row">
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="San Francisco" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="Mexico City" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="Toronto" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="Rio de Janeiro" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="New York" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="London" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="Madrid" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="Beijing" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="Luanda" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="Athens" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity
                    city="Reykjavik
                  "
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="Cape Town" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="Paris" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="Moscow" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="Tokyo" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card m-1">
                <div className="card-body">
                  <WeatherCity city="Sydney" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

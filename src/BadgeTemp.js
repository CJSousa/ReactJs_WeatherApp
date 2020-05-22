import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class BadgeTemp extends Component {
  ShowBadge = () => {
    let temp = this.props.temperaturestamp;
    if (temp < -5)
      return <div className="badge badge-primary">DUCKING COLD</div>;
    if (temp < 0) return <div className="badge badge-primary">FREEZING</div>;
    if (temp < 15) return <div className="badge badge-info">COLD</div>;
    if (temp < 25) return <div className="badge badge-warning">WARM</div>;
    if (temp < 35) return <div className="badge badge-danger">HOT</div>;
    return <div className="badge badge-danger">MELTING</div>;
  };

  render() {
    return (
      <div>
        <div>
          <div>{this.ShowBadge()}</div>
        </div>
      </div>
    );
  }
}

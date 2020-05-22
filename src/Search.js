import React, { Component } from "react";

export default class Weather extends Component {
  state = "";
  submit = event => {
    event.preventDefault();
    this.props.submit(this.state.keywords);
  };

  updateKeywords = event => {
    console.log(event.target.value);
    this.setState({
      keywords: event.target.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={event => this.submit(event)}>
          <input
            type="text"
            placeholder="Search for a city..."
            className="p-2 mb-2 rounded border"
            autoFocus={true}
            onChange={event => this.updateKeywords(event)}
          />
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    chatroom: "",
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div class="login-page">
        <h1>Welcome to Sleigh Ride's Chat App</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input id="username" required type="text"></input>
          </label>
          <label>
            Password:
            <input id="password" type="text"></input>
          </label>
          <label>
            Chatroom name:
            <input id="chatroom" required type="text"></input>
          </label>
          <button>Enter!</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;

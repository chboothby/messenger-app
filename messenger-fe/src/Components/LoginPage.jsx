import React, { Component } from "react";
import { Link } from "@reach/router";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3000");
class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    chatroom: "",
    id: "",
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setUser(this.state);
  };

  componentDidMount() {
    console.log(this.props);
    socket.on("connect", () => {
      console.log(socket.id);
      this.setState({ id: socket.id });
    });
  }

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
          <Link to="/chat">
            <button>Enter!</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default LoginPage;

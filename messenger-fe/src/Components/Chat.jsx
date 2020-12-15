import React, { Component } from "react";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3000");

class Chat extends Component {
  state = {
    message: { body: "", name: "", timeStamp: "" },
    chat: [],
    userCount: 0,
  };

  handleChange = (event) => {
    this.setState({ message: { [event.target.id]: event.target.value } });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.state.message.name = this.props.loggedInUser.name;
    socket.emit("message", this.state);
    this.setState((currState) => {
      return { chat: [...currState.chat, this.state.message] };
    });
  };

  render() {
    return (
      <div>
        <h1>Chat!</h1>
        {this.state.chat.map((chat) => {
          return (
            <p>
              {chat.name}: {chat.message}
            </p>
          );
        })}
        <form onSubmit={this.handleSubmit}>
          <textarea
            id="message"
            value={this.state.message.message}
            onChange={this.handleChange}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Chat;

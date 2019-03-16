import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import axios from 'axios';

import 'react-chat-widget/lib/styles.css';

class App extends Component {
  state = {
    firstMessage: true
  };

  componentDidMount() {
    addResponseMessage(
      "Welcome! If you've got any questions or concerns, let us know."
    );
    addResponseMessage("We'll take care of it as quick as possible!");
  }

  handleNewUserMessage = newMessage => {
    const { firstMessage } = this.state;

    if (firstMessage) {
      this.setState({ firstMessage: false });
      addResponseMessage(
        "We got it! Don't forget to tell us your email so we can get back to you!"
      );
    } else {
      addResponseMessage('Your message has been sent.');
    }
    axios.post('/api/messages', { message: newMessage }).catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <div style={{ zIndex: 100 }}>
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          addResponseMessage="Test"
          title="Trainiac Assisstant"
          subtitle="Got any questions ? Tell us below!"
        />
      </div>
    );
  }
}

export default App;

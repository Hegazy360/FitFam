import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';
import { Text } from 'grommet';
import axios from 'axios';

class TrainiacCounter extends Component {
  state = {
    usersCount: 0
  };

  componentDidMount() {
    const self = this;
    // TODO Refactor to one function
    axios
      .get('/api/usersCount')
      .then(response => {
        self.setState({ usersCount: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    this.usersCountInterval = setInterval(
      () =>
        axios
          .get('/api/usersCount')
          .then(response => {
            self.setState({ usersCount: response.data });
          })
          .catch(error => {
            console.log(error);
          }),
      120000
    );
  }

  componentWillUnmount() {
    clearInterval(this.usersCountInterval);
  }

  render() {
    const { usersCount } = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
        <AnimatedNumber
          value={usersCount}
          stepPrecision={0}
          style={{
            transition: '0.8s ease-out',
            fontSize: '55px',
            fontFamily: 600,
            transitionProperty: 'background-color, color, opacity'
          }}
          frameStyle={perc => (perc === 100 ? {} : { opacity: 0.25 })}
          duration={800}
        />
        <div>
          <Text
            margin="none"
            textAlign="center"
            size="xxlarge"
            style={{ fontWeight: 600 }}
          >
            Trainiac Beasts
          </Text>
        </div>
      </div>
    );
  }
}

export default TrainiacCounter;

import React, { Component } from 'react';
import Lottie from 'react-lottie';
import { Box, Button, Heading, Image, Paragraph, Text } from 'grommet';

export class SubscriptionFormSuccess extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px 40px' }}>
        <Lottie
          options={{
            loop: false,
            autoplay: true,
            animationData: require('./../assets/animations/happy.json')
          }}
          height={270}
        />
        <Text size="small">What's next ?</Text>
        <br />
        <Text size="small">
          You'll receive your workout plan in the next couple days.
        </Text>
        <br />
        <Text size="small">
          It will be carefully created and reviewed by multiple athletes before
          being sent to you.
        </Text>
        <br />
        <br />
        <Text size="small">
          If you have any questions, concers or simply want to chat, you can
          contact us at{' '}
        </Text>
        <Text size="small" style={{ fontWeight: 500 }}>
          fitnessmotown@gmail.com
        </Text>
      </div>
    );
  }
}

export default SubscriptionFormSuccess;

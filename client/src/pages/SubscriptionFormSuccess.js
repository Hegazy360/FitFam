import React from 'react';
import Lottie from 'react-lottie';
import { Helmet } from 'react-helmet';
import { Text } from 'grommet';

export default function SubscriptionFormSuccess() {
  return (
    <div style={{ textAlign: 'center', padding: '20px 40px' }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trainiac - Subscription Completed</title>
        <link rel="canonical" href="https://trainiac.io/success" />
      </Helmet>
      <Lottie
        options={{
          loop: false,
          autoplay: true,
          // eslint-disable-next-line global-require
          animationData: require('./../assets/animations/happy.json')
        }}
        height={270}
      />
      <Text size="small">What&apos;s next ?</Text>
      <br />
      <Text size="small">
        You&apos;ll receive your workout plan in the next couple days.
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

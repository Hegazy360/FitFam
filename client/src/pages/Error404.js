import React from 'react';
import Lottie from 'react-lottie';
import { Text } from 'grommet';

export default function Error404() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          // eslint-disable-next-line global-require
          animationData: require('./../assets/animations/404.json')
        }}
        height={270}
      />
      <Text>The page you&apos;re looking for was not found :(</Text>
    </div>
  );
}

/* eslint-disable global-require */
import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import Lottie from 'react-lottie';

export default function HomeBox({
  title,
  title2,
  textColor,
  description,
  animation,
  background,
  children
}) {
  return (
    <Box flex="grow" background={background} align="center">
      <Heading
        level="4"
        color={textColor}
        textAlign="center"
        size="small"
        margin="large"
        style={{ fontWeight: 500 }}
      >
        {title}
        {title2 && <br />}
        {title2 && title2}
      </Heading>
      {animation && (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            // eslint-disable-next-line import/no-dynamic-require
            animationData: require(`./../assets/animations/${animation}.json`)
          }}
          height={270}
        />
      )}
      {children && children}
      <Paragraph margin="small" textAlign="center" color="white">
        {description}
        <br />
        <br />
      </Paragraph>
    </Box>
  );
}

import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Box, Image, Text } from 'grommet';

import transformation2 from '../assets/images/transformations/2.jpg';
import transformation3 from '../assets/images/transformations/3.jpeg';
import transformation4 from '../assets/images/transformations/4.jpg';
import transformation5 from '../assets/images/transformations/5.jpg';
import transformation6 from '../assets/images/transformations/6.jpg';

const params = {
  autoplay: true
};

export default class TransformationsCarousel extends Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Swiper
          {...params}
          ref={node => {
            if (node) this.swiper = node.swiper;
          }}
        >
          <div>
            <Image style={{ width: '100%' }} src={transformation2} />
          </div>
          <div>
            <Image style={{ width: '100%' }} src={transformation6} />
          </div>
          <div>
            <Image style={{ width: '100%' }} src={transformation3} />
          </div>
          <div>
            <Image style={{ width: '100%' }} src={transformation4} />
          </div>
          <div>
            <Image style={{ width: '100%' }} src={transformation5} />
          </div>
        </Swiper>
        <br />
        <Box>
          <Text
            size="medium"
            textAlign="center"
            style={{ fontWeight: 600, textAlign: 'center' }}
          >
            Got your before and after picture ready ?
            <br />
            Send it to us to be featured!
          </Text>
        </Box>
      </div>
    );
  }
}

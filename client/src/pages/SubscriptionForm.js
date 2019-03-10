import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
  Image,
  Paragraph,
  Text
} from 'grommet';
import Swiper from 'react-id-swiper';
import Lottie from 'react-lottie';
import { Close, Menu, Info } from 'grommet-icons';
import { Link } from 'react-router-dom';

import './../styles/carousel.css';
import man from './../assets/images/man.svg';
import woman from './../assets/images/woman.svg';
import bodyTypes from './../assets/images/bodyTypes.jpg';

export class SubscriptionForm extends Component {
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };

    return (
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <Swiper {...params}>
          <Box
            style={{ padding: '20px 40px' }}
            direction="row"
            align="center"
            pad="large"
          >
            <Image
              fit="contain"
              width="100%"
              src={man}
              style={{ padding: '20px' }}
            />
            <Image
              fit="contain"
              width="100%"
              src={woman}
              style={{ padding: '20px' }}
            />
          </Box>
          <Box
            style={{ padding: '20px' }}
            direction="row"
            align="center"
            gap="medium"
            pad="large"
          >
            <Image fit="contain" width="100%" src={bodyTypes} />
          </Box>
          <div>Slide 3</div>
          <div>Slide 4</div>
          <div>Slide 5</div>
        </Swiper>
      </div>
    );
  }
}

export default SubscriptionForm;

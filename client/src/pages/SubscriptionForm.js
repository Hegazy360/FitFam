import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
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
import woman_skinny from './../assets/images/woman_skinny.svg';
import woman_normal from './../assets/images/woman_normal.svg';
import woman_curvy from './../assets/images/woman_curvy.svg';
import bodyTypes from './../assets/images/bodyTypes.jpg';

export class SubscriptionForm extends Component {
  constructor(props) {
    super(props);
    this.swiper = null;
    this.state = {
      gender: null,
      shape: null
    };
  }

  goNext = () => {
    if (this.swiper) this.swiper.slideNext();
  };

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev();
  };

  setFormValue = (key, value) => {
    this.setState({ [`${key}`]: value }, () => console.log(this.state));
    this.goNext();
  };

  simulatePaySuccess = () => {
    const { history } = this.props;
    axios
      .post('/api/subscription', this.state)
      .then(function(response) {
        console.log(response);
        history.push('/success');
      })
      .catch(function(error) {
        console.log(error);
      });
  };

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
        <Swiper
          {...params}
          ref={node => {
            if (node) this.swiper = node.swiper;
          }}
        >
          <Box style={{ padding: '20px 40px' }} align="center" pad="large">
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              What's your gender ?
            </Text>
            <Box direction="row" align="center" pad="large">
              <Image
                style={{ padding: '20px' }}
                fit="contain"
                width="100%"
                src={man}
                onClick={this.setFormValue.bind(this, 'gender', 'man')}
              />
              <Image
                style={{ padding: '20px' }}
                fit="contain"
                width="100%"
                src={woman}
                onClick={this.setFormValue.bind(this, 'gender', 'woman')}
              />
            </Box>
          </Box>
          <Box style={{ padding: '20px 40px' }} align="center" pad="large">
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              Which picture presents your current shape ?
            </Text>
            <Box direction="row" align="center" pad="small">
              <Image
                style={{ padding: '20px' }}
                fit="contain"
                width="33%"
                src={woman_skinny}
                onClick={this.setFormValue.bind(this, 'shape', 'skinny')}
              />
              <Image
                style={{ padding: '20px' }}
                fit="contain"
                width="33%"
                src={woman_normal}
                onClick={this.setFormValue.bind(this, 'shape', 'normal')}
              />
              <Image
                style={{ padding: '20px' }}
                fit="contain"
                width="33%"
                src={woman_curvy}
                onClick={this.setFormValue.bind(this, 'shape', 'curvy')}
              />
            </Box>
          </Box>
          <Box style={{ padding: '20px 40px' }} align="center" pad="large">
            <Button label="PAY NOW" onClick={this.simulatePaySuccess} />
          </Box>
          <div>Slide 4</div>
          <div>Slide 5</div>
        </Swiper>
      </div>
    );
  }
}

export default withRouter(SubscriptionForm);

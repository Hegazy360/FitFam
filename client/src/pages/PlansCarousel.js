import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Box, Button, Text } from 'grommet';
import { Link } from 'react-router-dom';

const params = {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
};

class PlansCarousel extends Component {
  render() {
    const { buttons = true } = this.props;

    return (
      <div>
        <Swiper
          {...params}
          ref={node => {
            if (node) this.swiper = node.swiper;
          }}
        >
          <Box
            style={{ padding: '20px 30px 40px' }}
            align="center"
            height={buttons ? '360px' : '150px'}
            justify="between"
          >
            <Text
              margin="none"
              textAlign="center"
              size="xxlarge"
              style={{ fontWeight: 600 }}
            >
              Basic - $10
            </Text>
            <br />
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              Custom workout plan
            </Text>
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              1 Monthly follow-up by one of the coaches
            </Text>
            {/* <Attraction size="large" /> */}
            <br />
            <br />
            {buttons && (
              <Link
                to="/subscription/basic"
                style={{
                  textDecoration: 'none',
                  color: 'rgb(68, 68, 68)'
                }}
              >
                <Button label="Start now" style={{ fontSize: '19px' }} />
              </Link>
            )}
          </Box>
          <Box
            style={{ padding: '20px 20px 40px' }}
            align="center"
            height={buttons ? '360px' : '150px'}
            justify="between"
          >
            <Text
              margin="none"
              textAlign="center"
              size="xxlarge"
              style={{ fontWeight: 600 }}
            >
              Pro - $25
            </Text>
            <br />
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              Custom workout plan
            </Text>
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              2 Monthly follow-ups by one of the coaches
            </Text>
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              Personal communication line with one of the coaches for any
              questions
            </Text>
            {/* <Attraction size="large" /> */}
            <br />
            <br />
            {buttons && (
              <Link
                to="/subscription/pro"
                style={{
                  textDecoration: 'none',
                  color: 'rgb(68, 68, 68)'
                }}
              >
                <Button label="Start now" style={{ fontSize: '19px' }} />
              </Link>
            )}
          </Box>
          <Box
            style={{ padding: '20px 20px 40px' }}
            align="center"
            height={buttons ? '360px' : '150px'}
            justify="between"
          >
            <Text
              margin="none"
              textAlign="center"
              size="xxlarge"
              style={{ fontWeight: 600 }}
            >
              Pro+ - $40
            </Text>
            <br />
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              Custom workout plan
            </Text>
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              Weekly follow-up by one of the coaches
            </Text>
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              Personal communication line with one of the coaches for any
              questions
            </Text>
            <Text
              margin="none"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              Diet planning and nutrition following
            </Text>
            {/* <Attraction size="large" /> */}
            <br />
            <br />
            {buttons && (
              <Link
                to="/subscription/proplus"
                style={{
                  textDecoration: 'none',
                  color: 'rgb(68, 68, 68)'
                }}
              >
                <Button label="Start now" style={{ fontSize: '19px' }} />
              </Link>
            )}
          </Box>
        </Swiper>
      </div>
    );
  }
}

export default PlansCarousel;

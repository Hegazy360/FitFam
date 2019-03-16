import React, { Component } from 'react';
import axios from 'axios';
import { Box, Button, Heading, Image, Paragraph, Text } from 'grommet';
import Lottie from 'react-lottie';
import AnimatedNumber from 'react-animated-number';
import { Helmet } from 'react-helmet';
import { Info } from 'grommet-icons';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import homepage from '../assets/images/homepage.jpg';
import transformation1 from '../assets/images/transformations/1.jpg';
import transformation2 from '../assets/images/transformations/2.jpg';
import transformation3 from '../assets/images/transformations/3.jpeg';
import transformation4 from '../assets/images/transformations/4.jpg';
import transformation5 from '../assets/images/transformations/5.jpg';
import transformation6 from '../assets/images/transformations/6.jpg';

import PlansCarousel from './PlansCarousel';

const params = {
  autoplay: true
};

class Home extends Component {
  constructor() {
    super();

    this.state = {
      usersCount: 0
    };
  }

  componentDidMount() {
    const self = this;
    // TODO Refactor to one function
    axios
      .get('/api/usersCount')
      .then(function(response) {
        self.setState({ usersCount: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    this.usersCountInterval = setInterval(
      () =>
        axios
          .get('/api/usersCount')
          .then(function(response) {
            self.setState({ usersCount: response.data });
          })
          .catch(function(error) {
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
      <div>
        <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Trainiac</title>
            <meta
              name="description"
              content="The fastest way to get in shape"
            />
            <link rel="canonical" href="https://trainiac.io/" />
          </Helmet>
          <Box flex align="center" justify="center">
            <Image
              fit="cover"
              style={{
                width: '100%',
                minHeight: '445px'
              }}
              src={homepage}
            />
            <br />
            <br />
            <Heading
              margin="none"
              level="1"
              textAlign="center"
              size="medium"
              style={{ fontWeight: 500 }}
            >
              Get fit faster
            </Heading>
            <Heading
              margin="medium"
              level="2"
              textAlign="center"
              style={{ fontWeight: 500 }}
              size="small"
            >
              Get a coach to help you get to the next level
            </Heading>

            <Box
              flex="grow"
              direction="row"
              align="center"
              gap="small"
              pad="xsmall"
            >
              <Link to="/subscription">
                <Button label="Start now" />
              </Link>

              <Button
                color="accent-4"
                icon={<Info color="accent-4" />}
                label="Know more"
                onClick={() => {}}
              />
            </Box>
            <br />
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
              <AnimatedNumber
                value={usersCount}
                stepPrecision={0}
                style={{
                  transition: '0.8s ease-out',
                  fontSize: 80,
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
            <br />
            <br />
            <Box fill="horizontal" id="first_section">
              <Box flex="grow" background="brand" align="center">
                <Heading
                  level="4"
                  color="white"
                  textAlign="center"
                  size="small"
                  margin="large"
                  style={{ fontWeight: 500 }}
                >
                  90% of People Quit After 3 Months of Hitting the Gym
                </Heading>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: require('./../assets/animations/stopwatch.json')
                  }}
                  height={270}
                />
                <Paragraph margin="small" textAlign="center" color="white">
                  We help people all around the world not to quit, by following,
                  motivating and helping them improve and learn everything about
                  their body and working out.
                  <br />
                  <br />
                </Paragraph>
              </Box>
              <Box flex="grow" background="white" align="center">
                <Heading
                  level="4"
                  color="black"
                  textAlign="center"
                  size="small"
                  margin="large"
                  style={{ fontWeight: 500 }}
                >
                  Guaranteed results or get your money back!
                  <br />
                  That's how confident we are.
                </Heading>
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
                <br />
              </Box>
              <Box flex="grow" background="#8BC34A" align="center">
                <Heading
                  level="4"
                  color="white"
                  textAlign="center"
                  size="small"
                  margin="large"
                  style={{ fontWeight: 500 }}
                >
                  We get it, it's not easy.
                </Heading>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: require('./../assets/animations/biking.json')
                  }}
                  height={270}
                />
                <Paragraph margin="small" textAlign="center" color="white">
                  We were all once in the same position.
                  <br />
                  Confused by all the one-size-fits-all diet tips and workout
                  plans.
                  <br />
                  We wish we had an affordable direct way to become fit faster.
                  <br />
                  <br />
                </Paragraph>
              </Box>
              <Box flex="grow" background="accent-4" align="center">
                <Heading
                  level="4"
                  color="white"
                  textAlign="center"
                  size="small"
                  margin="large"
                  style={{ fontWeight: 500 }}
                >
                  We're flexible
                </Heading>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: require('./../assets/animations/dance.json')
                  }}
                  height={270}
                />
                <Paragraph margin="small" textAlign="center" color="white">
                  Most of Trainiac's team are young athletes who have been
                  training most of their lives.
                  <br />
                  We don't believe in complicating what should be enjoyable.
                  <br />
                  Multiple plans, easy cancelation and refunds.
                  <br />
                  <br />
                </Paragraph>
              </Box>
              <Box flex="grow" background="#4CAF50" align="center">
                <Heading
                  level="4"
                  color="white"
                  textAlign="center"
                  size="small"
                  margin="large"
                  style={{ fontWeight: 500 }}
                >
                  We're affordable
                </Heading>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: require('./../assets/animations/atm.json')
                  }}
                  height={270}
                />
                <Paragraph margin="small" textAlign="center" color="white">
                  We're changing the game.
                  <br />
                  <br />
                  Multiple plans, starting at $25.
                  <br />
                  Customize everything based on your schedule, goals and
                  motivation.
                  <br />
                  <br />
                </Paragraph>
              </Box>
              <PlansCarousel />
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}
export default Home;

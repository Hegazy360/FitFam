import React from 'react';
import { Box, Button, Heading, Image } from 'grommet';
import { Helmet } from 'react-helmet';
import { Info } from 'grommet-icons';
import { Link } from 'react-router-dom';
import homepage from '../assets/images/homepage.jpg';

import PlansCarousel from './PlansCarousel';
import TrainiacCounter from './TrainiacCounter';
import HomeBox from './HomeBox';
import TransformationsCarousel from './TransformationsCarousel';

function Home() {
  return (
    <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trainiac</title>
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
            href="#first_section"
          />
        </Box>
        <br />
        <br />
        <br />
        <TrainiacCounter />
        <br />
        <br />
        <Box fill="horizontal" id="first_section">
          <HomeBox
            background="brand"
            title="90% of People Quit After 3 Months of Hitting the Gym"
            textColor="white"
            description="We help people all around the world not to quit, by following,
          motivating and helping them improve and learn everything about
          their body and working out."
            animation="stopwatch"
          />
          <HomeBox
            background="white"
            title="Guaranteed results or get your money back!"
            title2="That's how confident we are."
            textColor="black"
            description="We help people all around the world not to quit, by following,
          motivating and helping them improve and learn everything about
          their body and working out."
          >
            <TransformationsCarousel />
          </HomeBox>
          <HomeBox
            background="#8BC34A"
            title="We get it, it's not easy."
            textColor="white"
            description="We were all once in the same position.Confused by all the one-size-fits-all diet tips and workout
          plans.We wish we had an affordable direct way to become fit faster."
            animation="biking"
          />
          <HomeBox
            background="accent-4"
            title="We're flexible"
            textColor="white"
            description="Most of Trainiac's team are young athletes who have been
          training most of their lives.We don't believe in complicating what should be enjoyable.Multiple plans, easy cancelation and refunds."
            animation="dance"
          />
          <HomeBox
            background="#4CAF50"
            title="We're affordable"
            textColor="white"
            description="We're changing the game.Multiple plans, starting at only $10! Customize everything based on your schedule, goals and
          motivation."
            animation="atm"
          />
          <PlansCarousel />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
